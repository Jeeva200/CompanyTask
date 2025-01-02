import React, { useState } from 'react';
import { useFormik } from 'formik';

const CompanyForm = ({ onSubmit, initialValues }) => {
    const formik = useFormik({
        initialValues: initialValues || {
            name: '',
            location: '',
            linkedin: '',
            emails: '',
            phoneNumbers: '',
            comments: '',
            communicationPeriodicity: '',
        },
        onSubmit: (values) => {
            onSubmit(values);
            formik.resetForm();
        },
    });

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const buttonStyle = {
        padding: '10px 15px',
        fontSize: '14px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <form onSubmit={formik.handleSubmit} style={formStyle}>
            <input
                name="name"
                placeholder="Company Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                style={inputStyle}
                required
            />
            <input
                name="location"
                placeholder="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                style={inputStyle}
            />
            <input
                name="linkedin"
                placeholder="LinkedIn Profile"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                style={inputStyle}
            />
            <input
                name="emails"
                placeholder="Emails"
                value={formik.values.emails}
                onChange={formik.handleChange}
                style={inputStyle}
            />
            <input
                name="phoneNumbers"
                placeholder="Phone Numbers"
                value={formik.values.phoneNumbers}
                onChange={formik.handleChange}
                style={inputStyle}
            />
            <textarea
                name="comments"
                placeholder="Comments"
                value={formik.values.comments}
                onChange={formik.handleChange}
                style={{ ...inputStyle, height: '80px' }}
            />
            <input
                name="communicationPeriodicity"
                placeholder="Communication Periodicity"
                value={formik.values.communicationPeriodicity}
                onChange={formik.handleChange}
                style={inputStyle}
                required
            />
            <button type="submit" style={buttonStyle}>
                Submit
            </button>
        </form>
    );
};

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [editingCompany, setEditingCompany] = useState(null);

    const handleAddCompany = (company) => {
        if (editingCompany) {
            setCompanies((prevCompanies) =>
                prevCompanies.map((c) =>
                    c.id === editingCompany.id ? { ...company, id: c.id } : c
                )
            );
            setEditingCompany(null);
        } else {
            setCompanies([...companies, { ...company, id: Date.now() }]);
        }
    };

    const handleDeleteCompany = (id) => {
        if (window.confirm('Are you sure you want to delete this company?')) {
            setCompanies(companies.filter((company) => company.id !== id));
        }
    };

    const handleEditCompany = (company) => {
        setEditingCompany(company);
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thTdStyle = {
        border: '1px solid #ddd',
        padding: '10px',
        textAlign: 'left',
    };

    const headerStyle = {
        backgroundColor: '#f4f4f4',
    };

    const actionButtonStyle = {
        padding: '5px 10px',
        fontSize: '12px',
        margin: '0 5px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    };

    const editButtonStyle = {
        ...actionButtonStyle,
        backgroundColor: '#28a745',
        color: '#fff',
    };

    const deleteButtonStyle = {
        ...actionButtonStyle,
        backgroundColor: '#dc3545',
        color: '#fff',
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h2>Company Management</h2>
            <CompanyForm
                onSubmit={handleAddCompany}
                initialValues={editingCompany}
            />
            <table style={tableStyle}>
                <thead>
                    <tr style={headerStyle}>
                        <th style={thTdStyle}>Name</th>
                        <th style={thTdStyle}>Location</th>
                        <th style={thTdStyle}>LinkedIn</th>
                        <th style={thTdStyle}>Emails</th>
                        <th style={thTdStyle}>Phone Numbers</th>
                        <th style={thTdStyle}>Comments</th>
                        <th style={thTdStyle}>Periodicity</th>
                        <th style={thTdStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td style={thTdStyle}>{company.name}</td>
                            <td style={thTdStyle}>{company.location}</td>
                            <td style={thTdStyle}>{company.linkedin}</td>
                            <td style={thTdStyle}>{company.emails}</td>
                            <td style={thTdStyle}>{company.phoneNumbers}</td>
                            <td style={thTdStyle}>{company.comments}</td>
                            <td style={thTdStyle}>{company.communicationPeriodicity}</td>
                            <td style={thTdStyle}>
                                <button
                                    onClick={() => handleEditCompany(company)}
                                    style={editButtonStyle}
                                >
                                    Edit
                                </button>
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

export default CompanyList;
