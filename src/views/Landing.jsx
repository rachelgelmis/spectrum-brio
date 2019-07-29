import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import alex from "../assets/img/team/alex.jpg";
import freya from "../assets/img/team/freya.jpg";
import patrick from "../assets/img/team/patrick.jpg";
import rachel from "../assets/img/team/rachel.jpg";
import john from "../assets/img/team/john.jpg";
import anny from "../assets/img/team/anny.jpg";
import macy from "../assets/img/team/macy.jpg";
import emma from "../assets/img/team/emma.jpg";
import brioLogo from "../assets/img/brand/spectrum_brio.png";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "./IndexSections/Download.jsx";

class Landing extends React.Component {
  state = {
    imgURL: brioLogo

  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
        <>
          <main ref="main">
            <div className="position-relative">
              {/* shape Hero */}
              <section className="section section-sm section-shaped pb-250">
                <div className="shape shape-style-1 shape-primary">
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="7">
                        <h1 className="display-2 text-white">
                          <img src ={this.state.imgURL}></img>
                          {" "}
                          <span>Health and Wellness</span>
                        </h1>
                        <p className="lead text-white">
                          Increasing employee productivity by promoting healthy habits, mental health and social interaction
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>

              </section>
              {/* 1st Hero Variation */}
            </div>
            <section className="section section-sm">
              <Container>
                <Row className="justify-content-center text-center mb-lg">
                  <Col lg="12">
                    <h2 className="display-1">Features</h2>
                    <p className="lead text-muted">
                      Each feature is designed to focus on an aspect of employee health: physical, mental, or social.
                    </p>
                  </Col>
                  <Col lg="12">
                    <h6 className="text-white text-uppercase">
                      space
                      space
                      space
                    </h6>
                    <h6 className="text-white text-uppercase">
                      space
                      space
                      space
                    </h6>
                    <Row className="row-grid">
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-user-run" />
                            </div>

                            <h6 className="text-primary text-uppercase">
                              Physical
                            </h6>
                            <Button
                                className="mt-4"
                                color="primary"
                                href="http://localhost:3000/login"
                                onClick={e => e.handleClick()}
                            >
                              View
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-atom" />
                            </div>
                            <h6 className="text-primary text-uppercase">
                              Mental
                            </h6>

                            <Button
                                className="mt-4"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              View
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-circle-08" />
                            </div>

                            <h6 className="text-primary text-uppercase">
                              Social
                            </h6>

                            <Button
                                className="mt-4"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              View
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section section-sm">
              <Container>
                <Row className="justify-content-center text-center mb-lg">
                  <Col lg="8">
                    <h2 className="display-1">The Brio Team</h2>
                    <p className="lead text-muted">
                      Hand picked by brilliant HR representatives, Group 6 is the team to beat.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={alex}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Alex Chen</span>
                          <small className="h6 text-muted">Engineer</small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={freya}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Freya (Ziqian) Fu</span>
                          <small className="h6 text-muted">
                            Engineer/Marketing
                          </small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={emma}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Emma Millard </span>
                          <small className="h6 text-muted">Marketing</small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={john}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">John Markley</span>
                          <small className="h6 text-muted">Engineer</small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={patrick}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Patrick Schwerdtfeger</span>
                          <small className="h6 text-muted">Engineer/Marketing</small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={macy}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Macy Webb-Alexander</span>
                          <small className="h6 text-muted">
                            Engineer/Marketing
                          </small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={rachel}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Rachel Gelmis </span>
                          <small className="h6 text-muted">Project Manager/Engineer</small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={anny}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Anny Gonzalez</span>
                          <small className="h6 text-muted">Marketing</small>
                        </h5>
                        <div className="mt-3">

                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>




          </main>

        </>
    );
  }
}

export default Landing;
