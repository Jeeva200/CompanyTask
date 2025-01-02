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

  // Responsive styles based on screen width
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '880px',
    margin: 'auto',
    padding: '20px',
  };

  const inputStyle = {
    padding: '10px',
    marginRight: '20px',
    border: '1px solid #ccc',
    width: 'calc(100% - 130px)', // Adjust width dynamically
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100px',
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
    width: '90%',
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

  const smallScreenStyles = window.innerWidth < 768 ? {
    inputStyle: { ...inputStyle, width: '100%' },
    buttonStyle: { ...buttonStyle, width: '100%', marginTop: '10px' },
    tableInputStyle: { width: '100%' },
  } : {};

  return (
    <div style={containerStyle}>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          value={newCompanyName}
          onChange={(e) => setNewCompanyName(e.target.value)}
          placeholder="Enter Company Name"
          style={{ ...inputStyle, ...smallScreenStyles.inputStyle }}
        />
        <button
          onClick={handleAddCompany}
          style={{ ...buttonStyle, ...smallScreenStyles.buttonStyle }}
        >
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
                  style={{ ...tableInputStyle, ...smallScreenStyles.tableInputStyle }}
                />
              </td>
              <td style={cellStyle}>
                <input
                  type="date"
                  value={company.nextScheduled || ''}
                  onChange={(e) => handleUpdateNextScheduled(company.id, e.target.value)}
                  style={{ ...tableInputStyle, ...smallScreenStyles.tableInputStyle }}
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
