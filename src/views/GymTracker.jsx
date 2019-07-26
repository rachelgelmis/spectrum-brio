import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardsFooter from "components/Footers/CardsFooter.jsx";
import DatePickerComp from "components/Tools/DatePickerComp.jsx";
import SelectSearch from 'react-select-search';
import './style.css';
import {friends} from './data';

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
import ButtonDropdown from "reactstrap/es/ButtonDropdown";

class GymTracker extends React.Component{

    componentDidMount() {
        fetch('http://localhost:8080/traffic/1')
            .then(res => res.json())
            .then((data) => {
                this.setState({ traffic: data })
                console.log(this.state)
                console.log("----------------")
            })
            .catch(console.log)
        console.log(this.state)
    }

    constructor() {
        super();

        this.state = {
            traffic: {
                id: '',
                day: '',
                status: '',
                pings: '',
                time: '',
                active: ''

            }
        }

        this.setME = this.setME.bind(this)
        this.renderFriend = this.renderFriend.bind(this);
        this.renderFontOption = this.renderFontOption.bind(this);
        this.renderFontValue = this.renderFontValue.bind(this);
        this.renderColors = this.renderColors.bind(this);
    }
    setNew() {

        this.state = {
            traffic: {
                id: '',
                day: '',
                status: 'Thdfdfde Gym Will Be Busy On Monday, July 29 @ 5:30pm',
                pings: '',
                time: '',
                active: ''

            }

        }
    }

    getAPI(){
        let intAPI = 2;
        fetch('http://localhost:8080/traffic/2')
            .then(res => res.json())
            .then((data) => {
                this.setState({ traffic: data })
                console.log(this.state)
                console.log("----------------")
            })
            .catch(console.log)
        console.log(this.state)

    }

    setME(){

        if (this.state.traffic.id != 2){
            fetch('http://localhost:8080/traffic/2')
                .then(res => res.json())
                .then((data) => {
                    this.setState({ traffic: data })
                    console.log(this.state)
                    console.log("----------------")
                })
                .catch(console.log)

        }else{
            fetch('http://localhost:8080/traffic/3')
                .then(res => res.json())
                .then((data) => {
                    this.setState({ traffic: data })
                    console.log(this.state)
                    console.log("----------------")
                })
                .catch(console.log)
        }

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
    };

    renderFriend(option) {
        const imgStyle = {
            borderRadius: '50%',
            verticalAlign: 'middle',
            marginRight: 10,
        }
        return (<span><img alt="" style={imgStyle} width="40" height="40"
        src={option.photo}/><span>{option.name}</span></span>)
    };

    renderColors(option) {
        return (<span><span>{option.name}</span></span>)
    }


    render(){
        return(

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
                                            <h1>{this.state.traffic.status}</h1>
                                            <h3>About {this.state.traffic.pings} people</h3>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <Button color="primary">Refresh</Button>



                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center mb-4">

                                            <medium>Or want to know how busy it is at a different time?</medium>

                                        </div>






                                        <Row className="justify-content-center">
                                            <DatePickerComp/>
                                        </Row>
                                        <Row className="span-50">
                                            <span />
                                        </Row>
                                        <div className="text-center mb-4">

                                            <span />

                                        </div>
                                        <Row className="justify-content-center">
                                            <Button color="warning" onClick={this.setME}>Select</Button>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <br/>
                                            <medium>Invite a Friend to the Gym!</medium>

                                        </Row>

                                        <SelectSearch
                                            name="friends"
                                            multiple
                                            value={this.state.friends_search}
                                            height={172}
                                            options={friends}
                                            placeholder="Search friends"
                                            renderOption={this.renderFriend}
                                        />

                                        <Row className="justify-content-center">
                                            <Button color="warning" onClick={this.setME}>Invite</Button>
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

        );
    }
};

export default GymTracker;