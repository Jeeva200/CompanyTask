import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import your Redux store
import AdminPage from './pages/AdminPage';
import Dashboard from './components/Dashboard/Dashboard';
import CalendarPage from './pages/CalendarPage';
import './App.css';
import CompanyForm from './components/Admin/CompanyForm';

const App = () => {
  const companies = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
  ];

  return (
    <Provider store={store}> {/* Wrap the application with Provider */}
      <Router>
        <div>
          <header>
            <h1>Communication Tracker</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <Link to="/company">Communication</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Dashboard companies={companies} />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/company" element={< CompanyForm/>} />
              <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
          </main>

          <footer>
            <p>&copy; 2024 Communication Tracker</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
