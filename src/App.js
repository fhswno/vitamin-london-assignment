import './App.css';
import { Button, Form, Table } from 'react-bootstrap';
import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
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

  // This function returns the number of events that are scheduled at the same day and time
  const getEventCount = (day, time) => {
    return events.filter((event) => event.day === day && event.time === time)
      .length;
  };

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day} className='day-header'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td>{time}:00</td>
              {days.map((day) => (
                <td key={day}>
                  <div className="event-container">
                    {events
                      .filter((event) => event.day === day && event.time === time)
                      .map((event, index) => {
                        const count = getEventCount(day, time);
                        const width = `${100 / count}%`;
                        return (
                          <div
                            key={index}
                            className="event"
                            style={{ width }}
                          >
                            {event.name}
                          </div>
                        );
                      })
                    }
                  </div>
                </td>
              ))}
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
