import React, { useState } from 'react';
import './consumerbill.css'
import Axios from 'axios';

function Consumerbill() {
  const [accountNo, setAccountNo] = useState('');
  const [periodFrom, setPeriodFrom] = useState('');
  const [periodTo, setPeriodTo] = useState('');
  const [billData, setBillData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!accountNo || !periodFrom || !periodTo) {
      setErrorMessage('Please fill in all fields.');
      setBillData(null);
      return;
    }

    setErrorMessage('');

    Axios.get(`http://localhost:3002/consumerbill/${accountNo}/${periodFrom}/${periodTo}`)
      .then((response) => {
        const bill = response.data;
        setBillData(bill);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Failed to fetch bill data.');
        setBillData(null);
      });
  };

  return (
    <div className="consumer-bill">
      <h1 className="main-heading">Consumer Bill</h1>
      <form className="bill-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountNo">Account Number:</label>
          <input
            type="text"
            id="accountNo"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="periodFrom">Period From:</label>
          <input
            type="date"
            id="periodFrom"
            value={periodFrom}
            onChange={(e) => setPeriodFrom(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="periodTo">Period To:</label>
          <input
            type="date"
            id="periodTo"
            value={periodTo}
            onChange={(e) => setPeriodTo(e.target.value)}
            required
          />
        </div>

        <button type="submit">Show Bill</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {billData && (
        <div className="bill-details">
          <h2>Bill Details</h2>
          <p>Account Number: {billData.Account_no}</p>
          <p>Period From: {billData.PeriodFrom}</p>
          <p>Period To: {billData.PeriodTo}</p>
          <p>Current Reading: {billData.CurrentReading}</p>
          <p>Previous Reading: {billData.PreviousReading}</p>
          <p>Category: {billData.Category}</p>
          <p>Consumption: {billData.Consumption}</p>
          <p>Total Amount: {billData.TotalAmount}</p>
        </div>
      )}
    </div>
  );
}

export default Consumerbill;
