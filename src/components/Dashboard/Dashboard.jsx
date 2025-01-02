import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCompany,
  deleteCompany,
  updateCompanyCommunication,
  updateNextScheduled,
} from '../../redux/store';

const Dashboard = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);
  const [newCompanyName, setNewCompanyName] = useState('');

  const handleAddCompany = () => {
    if (newCompanyName.trim() === '') return;

    const newCompany = {
      id: companies.length + 1,
      name: newCompanyName,
      communication: '',
      nextScheduled: '',
    };

    dispatch(addCompany(newCompany));
    setNewCompanyName('');
  };

  const handleDeleteCompany = (id) => {
    dispatch(deleteCompany(id));
  };

  const handleUpdateCommunication = (id, value) => {
    dispatch(updateCompanyCommunication({ id, communication: value }));
  };

  const handleUpdateNextScheduled = (id, value) => {
    dispatch(updateNextScheduled({ id, nextScheduled: value }));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '880px', margin: 'auto' }}>
      <h2>Dashboard</h2>
      <div>
        <input
          type="text"
          value={newCompanyName}
          onChange={(e) => setNewCompanyName(e.target.value)}
          placeholder="Enter Company Name"
          style={{ padding: '10px', marginRight: '20px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleAddCompany}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add Company
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Company</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Last Communication</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Next Scheduled</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{company.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <input
                  type="date"
                  value={company.communication || ''}
                  onChange={(e) => handleUpdateCommunication(company.id, e.target.value)}
                  style={{ width: '80%', padding: '5px' }}
                />
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <input
                  type="date"
                  value={company.nextScheduled || ''}
                  onChange={(e) => handleUpdateNextScheduled(company.id, e.target.value)}
                  style={{ width: '80%', padding: '5px' }}
                />
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button
                  onClick={() => handleDeleteCompany(company.id)}
                  style={{
                    padding: '10px 15px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
