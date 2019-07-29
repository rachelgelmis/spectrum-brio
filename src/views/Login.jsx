import React from "react";
import standing from "../assets/img/brand/Standing.png";
import hydration from "../assets/img/brand/hydration.png";
import gym from "../assets/img/brand/gym.png";

// reactstrap components
import {
  Badge,
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
  Col
} from "reactstrap";

// core components
//import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
//import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
        <>

          <main ref="main">
              {/* shape Hero */}
              <section className="section section-sm section-shaped pb-250">
                <div className="shape shape-style-1 shape-primary">
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="7">
                        <h1 className="display-1 text-white">
                          {" "}
                          <span>Physical Health</span>
                        </h1>
                        <p className="lead text-white">
                          The goal of these features are to get employees up and moving throughout the workday. Studies show that [statistic about exercise] improves productivity, focus, etc [x amount]
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>

              </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="3">
                  <img
                    alt="..."
                    className="img-fluid shadow floating"
                    src={standing}
                  />
                </Col>
                <Col className="order-md-2" md="8">
                  <div className="pr-md-3">
                    <h3>Standing Desk Timer</h3>
                    <p>
                      This timer is designed to encourage employees to utilize their standing desks. It allows for 45 minutes of standing with 15 minutes of sitting per hour.
                    </p>
                    <div className="d-flex align-items-center">
                            <Button
                                className="mt-4"
                                color="primary"
                                href="http://localhost:3000/StandingTimer"
                                onClick={e => e.handleClick()}
                            >
                              View
                            </Button>
                        </div>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="3">
                  <img
                    alt="..."
                    className="img-fluid shadow floating"
                    src={hydration}
                  />
                </Col>
                <Col className="order-md-2" md="8">
                  <div className="pr-md-3">
                    <h3>Hydration Timer</h3>
                    <p>
                      The average adult needs to drink 8 cups of water per day. This timer reminds employees to drink a designated amount of water in timed intervals based on the duration of their workday.
                    </p>
                    <div className="d-flex align-items-center">
                            <Button
                                className="mt-4"
                                color="primary"
                                href="http://localhost:3000/Hydration"
                                onClick={e => e.handleClick()}
                            >
                              View
                            </Button>
                        </div>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="3">
                  <img
                    alt="..."
                    className="img-fluid shadow floating"
                    src={gym}
                  />
                </Col>
                <Col className="order-md-2" md="8">
                  <div className="pr-md-3">
                    <h3>Gym Tracker</h3>
                    <p>
                      Did you know Spectrum has a gym in Village Center Station? This app shows users how busy the gym is at a selected time and date. You can even invite your friends to the gym with you!
                    </p>
                    <div className="d-flex align-items-center">
                            <Button
                                className="mt-4"
                                color="primary"
                                href="http://localhost:3000/GymTracker"
                                onClick={e => e.handleClick()}
                            >
                              View
                            </Button>
                        </div>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                      </li>
                    </ul>
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

export default Login;
