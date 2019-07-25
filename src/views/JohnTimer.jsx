import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import GreenAlert from "components/Alerts/GreenAlert.jsx"
import SelectSearch from 'react-select-search';
import {friends} from './data';
import './style.css';

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

        this.setTimeForCode = this.setTime.bind(this, 300);
        this.setTimeForSocial = this.setTime.bind(this, 1500);
        this.setTimeForCoffee = this.setTime.bind(this, 60);
        this.reset = this.reset.bind(this);
        this.play = this.play.bind(this);
        this.elapseTime = this.elapseTime.bind(this);
        this.renderFontOption = this.renderFontOption.bind(this);
        this.renderFontValue = this.renderFontValue.bind(this);
        this.renderFriend = this.renderFriend.bind(this);
        this.renderColors = this.renderColors.bind(this);
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
            {type: "code", time: 300},
            {type: "social", time: 1500},
            {type: "coffee", time: 60}
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

    renderFontValue(label, option) {
        if (!option) {
            return label;
        }
    
        return <span style={{ fontFamily: option['data-stack'] }}>{label}</span>;
    }
    
    renderFontOption(option) {
        if (!('data-stack' in option)) {
            return option.name;
        }
    
        const style = {
            fontFamily: option['data-stack'],
        };
    
        return <span style={style}>{option.name}</span>;
    }
    
    renderFriend(option) {
        const imgStyle = {
            borderRadius: '50%',
            verticalAlign: 'middle',
            marginRight: 10,
        };
    
        return (<span><img alt="" style={imgStyle} width="40" height="40" src={option.photo} /><span>{option.name}</span></span>);
    }
    
    renderColors(option) {
        return (<span><span>{option.name}</span></span>);
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
                                                    <medium>Invite your friends?</medium>
                                                </div>
                                                <SelectSearch
                                                    name="friends"
                                                    multiple
                                                    value={this.state.friends_search}
                                                    height={172}
                                                    options={friends}
                                                    placeholder="Search friends"
                                                    renderOption={this.renderFriend}
                                                />
                                                    <Row>
                                                        <Button color="outline-primary" onClick={this.setTimeForCode}>Stand</Button>
                                                        <Button color="outline-primary" onClick={this.setTimeForSocial}>Sit</Button>
                                                        <Button color="outline-primary" onClick={this.setTimeForCoffee}>Pushups</Button>
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

                
            </>




        );

    }


};

export default johnTimer;