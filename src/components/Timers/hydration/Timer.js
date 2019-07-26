import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerConfig from './TimerConfig';
import moment from 'moment';
import * as timerStates from '../timerStates';
import {Button, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import WaterBottle from './WaterBottle';
import { Progress } from 'reactstrap';

export default class Timer extends Component {

  constructor() {
    super()
    this.state = {
      currentTime: moment.duration(0, 'minutes'),
      baseTime: moment.duration(0, 'minutes'),
      timerState: timerStates.NOT_SET,
      timer: null,
      count: 8,
      progress: 0,
      lidx: "17.5",
      holderx: "52.5",
      liquidx: "11",
      liquidy: "91",
      outlinex: "12.5",
    }

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.increaseProgress = this.increaseProgress.bind(this);
    this.resetProgress = this.resetProgress.bind(this);
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

    this.increaseProgress();

    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null
    });

    alert("Time is up! Drink your last cup of water")
  }

  reduceTimer() {
    if (this.state.currentTime.get('hours') === 0
        && this.state.currentTime.get('minutes') === 0
        && this.state.currentTime.get('seconds') === 0
        && this.state.count === 1) {
      this.completeTimer();
      this.resetCount();
      this.resetProgress();
      return;
    }

    else if (this.state.currentTime.get('hours') === 0
        && this.state.currentTime.get('minutes') === 0
        && this.state.currentTime.get('seconds') === 0) {
      this.reduceCount();
      this.increaseProgress();
      this.stopTimer();
      alert("Time for Water: Cup " + (8 - this.state.count));
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime
    })
  }

  increaseProgress() {
    this.setState({
      progress: this.state.progress + 12.5,
      lidx: parseInt(this.state.lidx) + 25,
      holderx: parseInt(this.state.holderx) + 25,
      liquidx: parseInt(this.state.liquidx) + 25,
      outlinex: parseInt(this.state.outlinex) + 25

    })
  }

  reduceCount() {
    if (this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1,
      })
    }
    return;
  }

  resetCount() {
    this.setState({
      count: 8,
    })
    return;
  }

  resetProgress() {
    this.setState({
      progress: 0,
      lidx: 17.5,
      liquidx: 11,
      holderx: 52.5,
      outlinex: 12.5
    })
    return;
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
                        <h1> Hydration Timer </h1>
                        <medium>Drink a Glass of Water in:</medium>
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
                        (<TimerConfig baseTime={this.state.baseTime}
                                      setBaseTime = {this.setBaseTime}
                        />)
                      }

                      <WaterBottle
                          lidx = {this.state.lidx}
                          holderx = {this.state.holderx}
                          liquidx = {this.state.liquidx}
                          outlinex = {this.state.outlinex} />
                      <Progress color="info" value={this.state.progress} />

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
