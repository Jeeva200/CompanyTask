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

  // Responsive styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '880px',
    margin: 'auto',
    padding: '10px',
  };

  const inputStyle = {
    padding: '10px',
    marginRight: '20px',
    border: '1px solid #ccc',
    flex: '1 1 300px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: '1 1 100px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const cellStyle = {
    padding: '10px',
    border: '1px solid #ddd',
  };

  const tableInputStyle = {
    width: '80%',
    padding: '5px',
    boxSizing: 'border-box',
  };

  const deleteButtonStyle = {
    padding: '10px 15px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      inputStyle: { ...inputStyle, flex: '1 1 100%' },
      buttonStyle: { ...buttonStyle, flex: '1 1 100%' },
      tableInputStyle: { width: '100%' },
    },
  };

  return (
    <div style={containerStyle}>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={newCompanyName}
          onChange={(e) => setNewCompanyName(e.target.value)}
          placeholder="Enter Company Name"
          style={inputStyle}
        />
        <button onClick={handleAddCompany} style={buttonStyle}>
          Add Company
        </button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={cellStyle}>Company</th>
            <th style={cellStyle}>Last Communication</th>
            <th style={cellStyle}>Next Scheduled</th>
            <th style={cellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td style={cellStyle}>{company.name}</td>
              <td style={cellStyle}>
                <input
                  type="date"
                  value={company.communication || ''}
                  onChange={(e) => handleUpdateCommunication(company.id, e.target.value)}
                  style={tableInputStyle}
                />
              </td>
              <td style={cellStyle}>
                <input
                  type="date"
                  value={company.nextScheduled || ''}
                  onChange={(e) => handleUpdateNextScheduled(company.id, e.target.value)}
                  style={tableInputStyle}
                />
              </td>
              <td style={cellStyle}>
                <button
                  onClick={() => handleDeleteCompany(company.id)}
                  style={deleteButtonStyle}
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
