import React from 'react';
import { useSelector } from 'react-redux';

const AdminPage = () => {
  const companies = useSelector((state) => state.companies);

  if (companies.length === 0) {
    return <p>No companies available.</p>;
  }

  return (
    <div>
      <h2>Admin Page</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name} - Next Scheduled: {company.nextScheduled || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
