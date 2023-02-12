import './App.css';
import { Button, Form, Table } from 'react-bootstrap';
import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function App() {
  const [eventName, setEventName] = useState('');
  const [eventDay, setEventDay] = useState('Monday');
  const [eventTime, setEventTime] = useState(9);
  const [events, setEvents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEvents([
      ...events,
      { name: eventName, day: eventDay, time: eventTime },
    ]);
    setEventName('');
    setEventTime(9);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td>{time}:00</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="form-container">
        <form className="form-element" onSubmit={handleSubmit}>
          <Form.Label htmlFor="event-name">
            Name
          </Form.Label>
          <Form.Control
            type="text"
            id="event-name"
            placeholder="Event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <Form.Label htmlFor="event-day">
            Day
          </Form.Label>
          <Form.Select
            id="event-day"
            value={eventDay}
            onChange={(e) => setEventDay(e.target.value)}
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Form.Select>
          <Form.Label htmlFor="event-time">
            Time
          </Form.Label>
          <Form.Select
            id="event-time"
            value={eventTime}
            onChange={(e) => setEventTime(Number(e.target.value))}
          >
            {times.map((time) => (
              <option key={time} value={time}>
                {time}:00
              </option>
            ))}
          </Form.Select>
          <Button
            variant="primary"
            type="submit"
            className="submit-button"
          >
            Add Event
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
