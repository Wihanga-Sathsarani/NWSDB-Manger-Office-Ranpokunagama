import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './notification.css'

function AlertDismissible() {
  const [show, setShow] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch the data from the Node.js server
    axios.get('http://localhost:3002/notification')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  }, []);

  return (
    <>
      {notifications.map(notification => (
        <Alert key={notification.id} show={show} variant="success">
          <Alert.Heading>NWSDB Alert</Alert.Heading>
          <p>
            Message: {notification.Noti_msg}
          </p>
          <p>
            Date: {notification.Noti_date}
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me
            </Button>
            <hr/>
          </div>
        </Alert>
      ))}

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;
