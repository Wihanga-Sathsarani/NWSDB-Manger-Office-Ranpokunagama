import React, { useState } from 'react';
import './calmybill.css'

import {MdOutlineVerifiedUser} from 'react-icons/md'

function Calmybill()  {
    const [periodFrom, setPeriodFrom] = useState('');
  const [periodTo, setPeriodTo] = useState('');
  const [currentRead, setCurrentRead] = useState('');
  const [preRead, setPreRead] = useState('');
  const [category, setCategory] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [consumption, setConsumption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const consumptionValue = parseInt(currentRead) - parseInt(preRead);
    let charge;

    switch (category) {
      case 'Domestic':
        charge = 20;
        break;
      case 'Tempale':
        charge = 30;
        break;
      case 'Business':
        charge = 40;
        // Add VAT for business category
        charge += 50;
        break;
      default:
        return;
    }

    const amount = consumptionValue * charge;
    setTotalAmount(amount);
    setConsumption(consumptionValue);
  };

  return (
    <div className='calmybill'>
      <h1 className='mainhead1'>Water Consumption Calculator</h1>
      <form action="" className='form grid' onSubmit={handleSubmit}>

        <div className="inputDiv">
            <label htmlFor="periodFrom">Period From:</label>
            <div className="input flex">
                <MdOutlineVerifiedUser className='icon' />
                <input type="date" id="periodFrom" value={periodFrom} onChange={(e) => setPeriodFrom(e.target.value)} required />
            </div>
        </div>
        <br />
        <div className="inputDiv">
            <label htmlFor="periodTo">Period To:</label>
            <div className="input flex">
                <MdOutlineVerifiedUser className='icon' />  
                <input type="date" id="periodTo" value={periodTo} onChange={(e) => setPeriodTo(e.target.value)} required />
            </div>
        </div>
        <br />
        <div className="inputDiv">
            <label htmlFor="currentRead">Current Reading:</label>
            <div className="input flex">
                <MdOutlineVerifiedUser className='icon' /> 
                <input type="number" id="currentRead" value={currentRead} onChange={(e) => setCurrentRead(e.target.value)} required />
            </div>
        </div>
        <br />
        <div className="inputDiv">
            <label htmlFor="preRead">Previous Reading:</label>
            <div className="input flex">
                <MdOutlineVerifiedUser className='icon' /> 
                <input type="number" id="preRead" value={preRead} onChange={(e) => setPreRead(e.target.value)} required />
            </div>
        </div>
        <br />
        <div className="inputDiv">
            <label htmlFor="category">Category:</label>
            <div className="input flex">
                <MdOutlineVerifiedUser className='icon' /> 
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select category</option>
                    <option value="Domestic">Domestic</option>
                    <option value="Tempale">Tempale</option>
                    <option value="Business">Business</option>
                </select>
            </div>
        </div>
        <br />
        <button className='btn' type="submit">Calculate</button>
      </form>
      <br/><br/>
      <h2>Calculation Result</h2>
      {consumption !== '' && (
        <div>
          
          <p>Consumption:</p>
          <input type="text" value={consumption} readOnly />
        </div>
      )}
      {totalAmount !== '' && (
        <div>
          <p>Total Amount:</p>
          <input type="text" value={totalAmount} readOnly />
        </div>
      )}
    </div>
  );
}
export default Calmybill