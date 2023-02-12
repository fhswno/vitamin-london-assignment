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
      <div>
        <form>
          <Form.Label>
            Name
          </Form.Label>
          <Form.Control type="text" />
          <Form.Label>
            Day
          </Form.Label>
          <Form.Select>
            {days.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </Form.Select>
          <Form.Label>
            Time
          </Form.Label>
          <Form.Select>
            {times.map((time) => (
              <option key={time}>{time}:00</option>
            ))}
          </Form.Select>
          <Button variant="primary" type="submit">Add Event</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
