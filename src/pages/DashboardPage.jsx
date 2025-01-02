import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { fetchCompanies } from '../services/api';

const DashboardPage = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const loadCompanies = async () => {
            const data = await fetchCompanies();
            setCompanies(data);
        };
        loadCompanies();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <Dashboard companies={companies} />
        </div>
    );
};

export default DashboardPage;
