// dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

app.use(express.json());
app.use(cors());

// Create a directory to store uploaded files
const uploadDirectory = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// run server
app.listen(3002, () => {
  console.log('Server is running on port 3002');
});

// create database connection
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'waterboard',
});

// get all consumers
app.get('/', (req, res) => {
  const SQL = 'SELECT * FROM consumer';
  db.query(SQL, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// add namechange Request
app.post('/namechange', upload.single('Namechgdoc'), (req, res) => {
  const sentAccountNo = req.body.AccountNo;
  const sentNewusername = req.body.Newusername;
  const sentNamereason = req.body.Namereason;
  const sentNamechgdoc = req.file;

  const fileName = sentNamechgdoc.filename;
  const filePath = path.join(uploadDirectory, fileName);

  // Move the file to the storage directory
  fs.renameSync(sentNamechgdoc.path, filePath);

  const SQL =
    'INSERT INTO namechange (Account_no, Newusername, Namereason, Name_chng_doc) VALUES (?, ?, ?, ?)';

  const Values = [sentAccountNo, sentNewusername, sentNamereason, fileName];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log('Name change request inserted successfully');
      res.send({ message: 'Name request added!' });
    }
  });
});

// download namechange document
app.get('/download/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(uploadDirectory, fileName);

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(404).json({ message: 'File not found' });
    }
  });
});

//get all nameupdate details
app.get('/adminnamechange', (req, res) => {
  const SQL = "SELECT * FROM namechange";
  db.query(SQL, (err, result)=> {
    if(err) return res.json({Message: "Error inside  server"});
    return res.json(result);
  })
})


//nameupdate
app.get('/edit/:Accountno', (req, res) => {
  
  const SQL = 'SELECT * FROM consumer WHERE Account_no = ?';
  const Accountno = req.params.Accountno;
  db.query(SQL, [Accountno], (err, result) => {
    if (err) return res.json({ Error: err });
    return res.json(result);
  });
});

app.put('/nameupdate/:Accountno', (req, res) =>{
  const SQL = "UPDATE consumer SET `Cons_name` = ? Where Account_no = ?";
  const Accountno = req.params.Accountno;
  db.query(SQL, [req.body.username, Accountno], (err, result) => {
    if(err) return res.json("Error");
    return res.json({updated: true})
  })
})

//delete consumer
app.delete('/delete/:Accountno', (req, res) => {
  const SQL = "DELETE FROM consumer WHERE Account_no = ?";
  const Accountno = req.params.Accountno;
  db.query(SQL, [Accountno], (err, result) => {
    if(err) return res.json({Message: "Error inside server"});
    return res.json(result);
  })
})


// register a new consumer
app.post('/register', async (req, res) => {
  const sentUserName = req.body.UserName;
  const sentAccountNo = req.body.AccountNo;
  const sentMobile = req.body.Mobile;
  const sentNIC = req.body.Nic;
  const sentAddress = req.body.Address;
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;
  const sentRegDate = req.body.RegDate;

  try {
    const hashedPassword = await bcrypt.hash(sentPassword, 10); // Hash the password using bcrypt

    const SQL =
      'INSERT INTO consumer(Cons_name, Account_no, Mobile, Nic, Address, Email, Password, Date) VALUES (?,?,?,?,?,?,?,?)';
    const Values = [
      sentUserName,
      sentAccountNo,
      sentMobile,
      sentNIC,
      sentAddress,
      sentEmail,
      hashedPassword,
      sentRegDate,
    ];

    db.query(SQL, Values, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error registering user');
      }
      console.log('User inserted successfully!');
      return res.status(200).json({ message: 'User added!' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error registering user');
  }
});

//Login
app.post('/login', (req, res) => {
  const sentLoginAccountNo = req.body.LoginAccountNo;
  const sentLoginPassword = req.body.LoginPassword;

  const SQL = 'SELECT * FROM consumer WHERE Account_no = ? && Password = ?';
  const Values = [sentLoginAccountNo];

  db.query(SQL, Values, async (err, results) => {
    if (err) {
      res.send({ error: err });
    } else {
      if (results.length > 0) {
        const storedHashedPassword = results[0].Password;
        const isPasswordMatch = await bcrypt.compare(
          sentLoginPassword,
          storedHashedPassword
        );
        if (isPasswordMatch) {
          res.send(results);
        } else {
          res.send({ message: `Credentials don't match!` });
        }
      } else {
        res.send({ message: `User not found!` });
      }
    }
  });
});





// Add notification

app.post('/adminnotification', (req, res) =>{
  const sentNotimsg = req.body.Notimsg
  const sentNotidate = req.body.Notidate

  const SQL = 'INSERT INTO notification (Noti_msg, Noti_date) VALUES (?,?)'

  const Values = [sentNotimsg, sentNotidate]

  db.query(SQL, Values, (err, results)=>{
    if(err){
      res.send(err)
    }
    else{
      console.log('Notication inserted sucessfuly!!')
      res.send({message: 'Notification added!'})
    }
  })


})

// get all notification

app.get('/notification', (req, res) => {
  const SQL = 'SELECT Noti_msg, Noti_date FROM notification';
  db.query(SQL, (err, result) => {
    if (err) {
      return res.status(500).json(err); // Internal Server Error
    }
    return res.status(200).json(result); // OK
  });
});


// store bill data
app.post('/bill', (req, res) => {
  const AccountNo = req.body.AccountNo;
  const PeriodFrom = req.body.PeriodFrom;
  const PeriodTo = req.body.PeriodTo;
  const CurrentReading = req.body.CurrentReading;
  const PreviousReading = req.body.PreviousReading;
  const Category = req.body.Category;
  const TotalAmount = req.body.TotalAmount;
  const Consumption = req.body.Consumption;

  const SQL =
    'INSERT INTO bill (Account_no, PeriodFrom, PeriodTo, CurrentReading, PreviousReading, Category, TotalAmount, Consumption) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  const Values = [
    AccountNo,
    PeriodFrom,
    PeriodTo,
    CurrentReading,
    PreviousReading,
    Category,
    TotalAmount,
    Consumption,
  ];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log('Bill data inserted successfully');
      res.send({ message: 'Bill data added!' });
    }
  });
});


// store consumerbill data
app.get('/consumerbill/:accountNo/:periodFrom/:periodTo', (req, res) => {
  const accountNo = req.params.accountNo;
  const periodFrom = req.params.periodFrom;
  const periodTo = req.params.periodTo;

  const SQL =
    'SELECT * FROM bill WHERE Account_no = ? AND PeriodFrom = ? AND PeriodTo = ?';

  const values = [accountNo, periodFrom, periodTo];

  db.query(SQL, values, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Failed to fetch bill data' });
    } else {
      if (results.length > 0) {
        console.log('Data retrieved successfully');
        const billData = results[0]; // Assuming only one matching record is expected
        res.status(200).json(billData);
      } else {
        console.log('No data found');
        res.status(404).json({ message: 'No water bill details found' });
      }
    }
  });
});


app.post('/adminlogin', (req, res) => {
  const sentloginadminuname = req.body.Loginadminuname
  const sentLoginadminpassword = req.body.Loginadminpassword

  const SQL = 'SELECT * FROM  adminlogin  WHERE adminuname = ? && adminpassword = ?'
  const Values = [sentloginadminuname, sentLoginadminpassword]

  db.query(SQL, Values, (err, results)=>{
    if (err){
      res.send({error:err})
    }
    if(results.length > 0){
      res.send(results)
    }
    else{
      res.send({message:`Credentials Don't  match!`})
    }
  })



})