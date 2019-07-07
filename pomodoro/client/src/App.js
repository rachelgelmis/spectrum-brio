import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Card>
        <Card.Title>
          <div className="text-center" style={{fontSize: 36}}>
            Pomodoro Timer
          </div>
        </Card.Title>
      </Card>
      <Card style={{padding: "50px"}}>
        <Card.Body>
          <h2 className="text-center">
            00:00:00
          </h2>
          <h4 className="text-center">Set Timer</h4>
          <div className="form-group">
            <div className="col-sm-4">
              <label htmlFor="hours">Hours</label>
            </div>
            <div className="col-sm-2">
              <input id="hours" className="form-control" type="number"></input>
            </div>
            <div className="col-sm-4">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="col-sm-2">
              <input id="minutes" className="form-control" type="number"></input>
            </div>
            <div className="col-sm-4">
              <label htmlFor="seconds">Seconds</label>
            </div>
            <div className="col-sm-2">
              <input id="seconds" className="form-control" type="number"></input>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default App;
