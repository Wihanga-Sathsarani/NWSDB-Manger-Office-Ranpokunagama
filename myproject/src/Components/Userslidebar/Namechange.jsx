
import React, { useState } from 'react';
import './namechange.css';
import Axios from 'axios';
import { FaUserShield } from 'react-icons/fa';
import { BsTelephoneFill, BsFillHouseCheckFill } from 'react-icons/bs';
import { MdEmail, MdOutlineVerifiedUser, MdOutlineSwipeRight } from 'react-icons/md';

const Namechange = () => {
  const [Accountno, setAccountNo] = useState('');
  const [newusername, setNewusername] = useState('');
  const [namereason, setNamereason] = useState('');
  const [namechgdoc, setNamechgdoc] = useState(null);

  const handleFileChange = (event) => {
    setNamechgdoc(event.target.files[0]);
  };

  const createnamechange = () => {
    const formData = new FormData();
    formData.append('AccountNo', Accountno);
    formData.append('Newusername', newusername);
    formData.append('Namereason', namereason);
    formData.append('Namechgdoc', namechgdoc);

    Axios.post('http://localhost:3002/namechange', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(() => {
        console.log('Name Change request has been created');
      })
      .catch((error) => {
        console.error('Error creating name change request:', error);
      });
  };

  return (
    <div className='namechange'>
      <h1 className='mainhead1'>Name Change Request</h1>
      <form action='' className='form grid'>
        <div className='inputDiv'>
          <label htmlFor='Accountno'>Consumer Account Number</label>
          <div className='input flex'>
            <MdOutlineVerifiedUser className='icon' />
            <input
              type='text'
              id='Accountno'
              placeholder='Your Account Number'
              onChange={(event) => {
                setAccountNo(event.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className='inputDiv'>
          <label htmlFor='newusername'>New Name</label>
          <div className='input flex'>
            <FaUserShield className='icon' />
            <input
              type='text'
              id='newusername'
              placeholder='Enter Name you want to add '
              onChange={(event) => {
                setNewusername(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className='inputDiv'>
          <label htmlFor='namereason'>Reason for Change</label>
          <div className='input flex'>
            <MdEmail className='icon' />
            <input
              type='text'
              id='namereason'
              placeholder='Enter reason to change previous name'
              onChange={(event) => {
                setNamereason(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className='inputDiv'>
          <label htmlFor='namechgdoc'>Attach Supported document</label>
          <div className='input flex'>
            <BsTelephoneFill className='icon' />
            <input type='file' id='namechgdoc' onChange={handleFileChange} required />
          </div>
        </div>

        <button className='btn' type='submit' onClick={createnamechange}>
          <span>Submit</span>
          <MdOutlineSwipeRight className='icon' />
        </button>
      </form>
    </div>
  );
};

export default Namechange;

