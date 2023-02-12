import './App.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function App() {
  return (
    <div>
      <table>
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
      </table>
    </div>
  );
}

export default App;
