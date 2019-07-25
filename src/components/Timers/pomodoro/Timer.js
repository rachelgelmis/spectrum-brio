import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerConfig from './TimerConfig';
import moment from 'moment';
import * as timerStates from '../timerStates';
import {CardBody, CardHeader, Col, Container, Row} from "reactstrap";

export default class Timer extends Component {

  constructor() {
    super()
    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      timerState: timerStates.NOT_SET,
      timer: null,
      message: ""
    }

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({baseTime: newBaseTime,
    currentTime: newBaseTime
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    })
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime)
    })
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null
    });

    alert("Time is up!")
  }

  reduceTimer() {

    if (this.state.currentTime.get('hours') === 0 &&
        this.state.currentTime.get('minutes') === 0 
        && this.state.currentTime.get('seconds') === 0) {
          this.completeTimer();
          return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime
    })
  }

  render() {
    return (

        <main ref="main">

          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-center text-muted mb-4">
                        <h1> Pomodoro Timer </h1>
                        <medium>{this.state.message}</medium>
                        <TimerDisplay currentTime={this.state.currentTime} />

                      </div>
                      <div className="btn-wrapper text-center">



                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center mb-4">

                      </div>
                      <TimerButton startTimer={this.startTimer}
                                   stopTimer={this.stopTimer}
                                   timerState={this.state.timerState}/>
                      {
                        (this.state.timerState !== timerStates.RUNNING)
                        &&
                        (<TimerConfig message={this.state.message}
                                      baseTime={this.state.baseTime}
                                      setBaseTime = {this.setBaseTime}
                        />)
                      }

                    </CardBody>
                  </Card>
                  <Row className="mt-3">

                  </Row>
                </Col>
              </Row>


            </Container>
          </section>


        </main>

    )
  }
}
