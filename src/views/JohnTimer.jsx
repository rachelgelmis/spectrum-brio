import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GreenAlert from "components/Alerts/GreenAlert.jsx"

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Jumbotron
} from "reactstrap";

class johnTimer extends React.Component {


    constructor() {
        super();
        this.state = {
            time: 0,
            play: false,
            timeType: 0,
            title: '',
            alert: 'green'
        };

        this.setTimeForCode = this.setTime.bind(this, 1500);
        this.setTimeForSocial = this.setTime.bind(this, 300);
        this.setTimeForCoffee = this.setTime.bind(this, 900);
        this.reset = this.reset.bind(this);
        this.play = this.play.bind(this);
        this.elapseTime = this.elapseTime.bind(this);
    }

    componentDidMount() {
        this.setDefaultTime();
        //this.startShortcuts();
        Notification.requestPermission();
    }

    elapseTime() {
        if (this.state.time === 0) {
            this.reset(0);
            this.alert();
        }
        if (this.state.play === true) {
            let newState = this.state.time - 1;
            this.setState({time: newState, title: this.getTitle(newState)});
        }
    }

    format(seconds) {
        let m = Math.floor(seconds % 3600 / 60);
        let s = Math.floor(seconds % 3600 % 60);
        let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
        return timeFormated;
    }

    getFormatTypes() {
        return [
            {type: "code", time: 1500},
            {type: "social", time: 300},
            {type: "coffee", time: 900}
        ];
    }

    formatType(timeType) {
        let timeTypes = this.getFormatTypes();
        for (let i = 0; i < timeTypes.length; i++) {
            let timeObj = timeTypes[i];
            if (timeObj.time === timeType) {
                return timeObj.type;
            }
        }
        return null;
    }

    restartInterval() {
        clearInterval(this.interval);
        this.interval = setInterval(this.elapseTime, 1000);
    }

    play() {
        if (true === this.state.play) return;

        this.restartInterval();

        this.setState({
            play: true
        });

    }

    reset(resetFor = this.state.time) {
        clearInterval(this.interval);
        let time = this.format(resetFor);
        this.setState({play: false});
    }

    togglePlay() {
        if (true === this.state.play)
            return this.reset();

        return this.play();
    }

    setTime(newTime) {
        this.restartInterval();

        this.setState({
            time: newTime,
            timeType: newTime,
            title: this.getTitle(newTime),
            play: true
        });
    }

    setDefaultTime() {
        let defaultTime = 1500;

        this.setState({
            time: defaultTime,
            timeType: defaultTime,
            title: this.getTitle(defaultTime),
            play: false,
            alert: 'green'
        });
    }

    getTitle(time) {
        time = typeof time === 'undefined' ? this.state.time : time;
        let _title = this.format(time) + ' | Pomodoro timer';
        return _title;
    }



    toggleMode(gotoDirection) {
        let timeTypes = this.getFormatTypes();
        let currentPosition = -1;


        for (let i = 0; i < timeTypes.length; i++) {
            if (timeTypes[i].time === this.state.timeType) {
                currentPosition = i;
                break;
            }
        }
        if (currentPosition !== -1) {
            let newMode = timeTypes[currentPosition + gotoDirection];
            if (newMode) this.setTime(newMode.time);
        }
    }

    _setLocalStorage(item, element) {
        let value = element.target.checked;
        localStorage.setItem('react-pomodoro-' + item, value);
    }

    _getLocalStorage(item) {
        return (localStorage.getItem('react-pomodoro-' + item) == 'true') ? true : false;
    }

    alert(){
        if(this.alert === 'green'){
            console.log('GREEN');
        }if(alert === 'red'){
            console.log('RED');
        }else{
            console.log('NOTHING');
        }
    }


    render(){
        return(


                <>

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
                                <GreenAlert />
                                <Row className="justify-content-center">
                                    <Col lg="5">
                                        <Card className="bg-secondary shadow border-0">
                                            <CardHeader className="bg-white pb-5">
                                                <div className="text-center text-muted mb-4">
                                                    <h1>{this.format(this.state.time)}</h1>
                                                </div>
                                                <div className="btn-wrapper text-center">
                                                    <Button color="primary" onClick={this.play}>Start</Button>
                                                    <Button color="warning" onClick={this.reset}>Pause</Button>


                                                </div>
                                            </CardHeader>
                                            <CardBody className="px-lg-5 py-lg-5">
                                                <div className="text-center mb-4">
                                                    <medium>What Time Is It?</medium>
                                                </div>
                                                    <Row>
                                                        <Button color="outline-primary" onClick={this.setTimeForCode}>Work</Button>
                                                        <Button color="outline-primary" onClick={this.setTimeForSocial}>Social</Button>
                                                        <Button color="outline-primary" onClick={this.setTimeForCoffee}>Coffee</Button>
                                                    </Row>

                                            </CardBody>
                                        </Card>
                                        <Row className="mt-3">

                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </main>

                <section>
                    <Container>
                        <Jumbotron>
                            <h1>Pomodoro</h1>
                            <h1>{this.format(this.state.time)}</h1>
                            <span className="timeType">The {this.formatType(this.state.timeType)} time!</span>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                            <Row>

                                <Button color="primary" onClick={this.play}>Start</Button>
                                <Button color="warning" onClick={this.reset}>Pause</Button>
                                <Button color="alert" onClick={this.alert}>alert</Button>

                            </Row>
                            <br/>
                            <Row>
                                <Button color="outline-primary" onClick={this.setTimeForCode}>Work</Button>
                                <Button color="outline-primary" onClick={this.setTimeForSocial}>Social</Button>
                                <Button color="outline-primary" onClick={this.setTimeForCoffee}>Coffee</Button>

                            </Row>
                        </Jumbotron>
                    </Container>
                </section>
            </>




        );

    }


};

export default johnTimer;