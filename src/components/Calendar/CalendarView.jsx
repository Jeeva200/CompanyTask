import React from 'react';
import { useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// Function to determine the color based on the date
const getEventColor = (eventDate) => {
  const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
  const scheduledDate = new Date(eventDate).toISOString().split('T')[0]; // Event date in YYYY-MM-DD format

  if (scheduledDate === today) {
    return 'yellow'; // Yellow for today
  } else if (scheduledDate < today) {
    return 'lightcoral'; // Light red for past dates
  } else {
    return 'lightgreen'; // Green for future dates
  }
};

const CalendarView = () => {
  // Get the list of companies and their nextScheduled date from Redux store
  const companies = useSelector((state) => state.companies);

  // Map companies' nextScheduled date into FullCalendar events
  const events = companies.map((company) => ({
    title: `${company.name} - Next Scheduled`,
    date: company.nextScheduled,
    backgroundColor: getEventColor(company.nextScheduled), // Dynamically set color
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events} // Pass the events with dynamic colors
    />
  );
};

export default CalendarView;
