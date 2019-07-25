import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardsFooter from "components/Footers/CardsFooter.jsx";
import DatePickerComp from "components/Tools/DatePickerComp.jsx";
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