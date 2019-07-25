import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GreenAlert from "components/Alerts/GreenAlert.jsx"
import CardsFooter from "components/Footers/CardsFooter.jsx"
import StandingIcon from "assets/img/icons/common/standing.png";
import SittingIcon from "assets/img/icons/common/sit.png";

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
    Jumbotron,
    UncontrolledAlert
} from "reactstrap";

class johnTimer extends React.Component {


    constructor() {
        super();
        this.state = {
            time: 0,
            play: false,
            timeType: 0,
            title: '',
            alert: 'green',
            standing: ''
        };

        let x = this.timeForWater();

        this.setTimeForCode = this.setTime.bind(this, (45 * 60));
        this.setTimeForWater = this.setTime.bind(this, x);

        this.reset = this.reset.bind(this);
        this.play = this.play.bind(this);
        this.elapseTime = this.elapseTime.bind(this);



    }


    timeForWater(){
        let waterTime = 15 * 60;

        return waterTime;

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
            {type: "coffee", time: 900},
            {type: "water", time: 1700}

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
                                <Row className="justify-content-center">
                                    <Col lg="5">
                                        <Card className="bg-secondary shadow border-0">
                                            <CardHeader className="bg-white pb-5">
                                                <div className="text-center text-muted mb-4">
                                                    <h1>{this.format(this.state.time)}</h1>
                                                    <img src={StandingIcon} />
                                                    <img src={SittingIcon} />
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
                                                    <Row className="justify-content-center">
                                                        <Button color="outline-primary" onClick={this.setTimeForCode}>Time To Sit</Button>
                                                        <Button color="outline-primary" onClick={this.setTimeForWater}>Time To Stand</Button>

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
                    <CardsFooter/>


            </>




        );

    }


};

export default johnTimer;