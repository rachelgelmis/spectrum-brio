import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardsFooter from "components/Footers/CardsFooter.jsx"
import DatePicker from "components/Tools/DatePicker.jsx";
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
                                <h2 className="display-5 text-black">
                                    How Busy Is The Gym?
                                </h2>
                                <h1>{this.state.traffic.status}</h1>
                                <h3>About {this.state.traffic.pings} people</h3>
                            </div>
                            <div className="btn-wrapper text-center">
                                <Button color="primary">Start</Button>
                                <Button color="warning">Pause</Button>


                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center mb-4">
                                <medium>Or want to know how busy it is at a different time?</medium>
                            </div>

                            <Row className="justify-content-center">
                                <DatePicker/>

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