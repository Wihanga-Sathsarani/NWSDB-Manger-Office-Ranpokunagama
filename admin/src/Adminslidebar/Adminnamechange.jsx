import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { saveAs } from 'file-saver';

function Adminnamechange() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:3002/adminnamechange')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDownload = (fileData, fileName) => {
    const blob = new Blob([fileData], { type: 'application/pdf' });
    saveAs(blob, fileName);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='d-flex bg-primary justify-content-center align-items-center'>
      <div className='w-90 bg-white rounded p-3'>
        <h2>Captured Name Change Requests</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Requested Name</th>
              <th>Reason</th>
              <th>Necessary Document</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((request, index) => (
              <tr key={index}>
                <td>{request.Account_no}</td>
                <td>{request.Newusername}</td>
                <td>{request.Namereason}</td>
                <td>
                  {typeof request.Name_chng_doc === 'object' ? (
                    <button
                      onClick={() =>
                        handleDownload(
                          request.Name_chng_doc.data,
                          `document_${index}.pdf`
                        )
                      }
                    >
                      Download
                    </button>
                  ) : (
                    <span>{request.Name_chng_doc}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminnamechange;










