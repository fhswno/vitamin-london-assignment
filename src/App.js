import './App.css';
import { Button, Form, Table } from 'react-bootstrap';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function App() {
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
        <form className="form-element">
          <Form.Label htmlFor="event-name">
            Name
          </Form.Label>
          <Form.Control
            type="text"
            id="event-name"
            placeholder="Event name"
          />
          <Form.Label htmlFor="event-day">
            Day
          </Form.Label>
          <Form.Select id="event-day">
            {days.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </Form.Select>
          <Form.Label htmlFor="event-time">
            Time
          </Form.Label>
          <Form.Select id="event-time">
            {times.map((time) => (
              <option key={time}>{time}:00</option>
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
