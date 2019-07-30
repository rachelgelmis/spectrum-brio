import React from "react";
import pom from "../assets/img/brand/pom.png";

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

class Profile extends React.Component {
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
                          <span>Mental Health</span>
                        </h1>
                        <p className="lead text-white">
                          Mental illnesses such as depression and anxiety have a negative impact on employees' personal and professional lives. Brio's goal
                          is to reduce the effects that workplace stress have on mental health by creating features that encourage productivity and communication
                          in the workplace. We would also like to recommend support training for managers to recognize symptoms of mental illness in their employees and offer help if needed.
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
                    src={pom}
                  />
                </Col>
                <Col className="order-md-2" md="8">
                  <div className="pr-md-3">
                    <h3>Pomodoro Timer</h3>
                    <p>
                      The Pomodoro Timer Technique is designed to encourage productivity by allowing for 5 minute breaks for every 25 minute interval of work. 
                      This process encourages not only productivity, but discourages burnout and employee stress. For every 4 intervals, take a 10 minute long break, and reset.
                    </p>
                    <div className="d-flex align-items-center">
                            <Button
                                className="mt-4"
                                color="primary"
                                href="http://localhost:3000/Pomodoro"
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
            <section className="section section-sm section-shaped pb-250">
                <div className="shape shape-style-1 shape-primary">
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="10">
                        <h1 className="display-1 text-white">
                          {" "}
                          <span>Hotlines</span>
                        </h1>
                        <p className="lead text-white">
                          Suicide Hotline: 800-273-8255
                        </p>
                        <p className="lead text-white">
                        Anxiety and Depression Association of America (ADAA): 240-485-1001 
                        </p>
                        <p className="lead text-white">
                        Depression and Bipolar Support Alliance (DBSA): 800-826-3632
                        </p>
                        <p className="lead text-white">
                        National Center of Excellence for Eating Disorders (NCEED): 800-931-2237
                        </p>
                        <p className="lead text-white">
                        Schizophrenia and Related Disorders Alliance of America (SARDAA): 240-423-9432
                        </p>
                        <p className="lead text-white">
                        The National Domestic Violence Hotline: 800-799-7233
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="10">
                        <h1 className="display-1 text-white">
                          {" "}
                          <span>Training Resources</span>
                        </h1>
                        <p className="lead text-white">
                          Mental Health First Aid: An 8-hour course that teaches you how to help someone who may be experiencing a mental health or substance use challenge. The training helps you identify, understand and respond to signs of addictions and mental illnesses
                        </p>
                        <p className="lead text-white">
                        Mental Health America: Supports include a discussion about challenges and options targeting the intersection of workplace culture and mental health. Commonly explored topics include understanding and supporting mental health concerns among staff, mental health crisis management, employee engagement including burnout, stress, absenteeism, productivity, and mental health benefits and how to best support staff
                        </p>
                        <p className="lead text-white">
                          Workplace Strategies for Mental Health: Training on conflict resolution, return to work planning, accommodation, performance management and managing emotions
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </section>
          </main>
        </>
    );
  }
}

export default Profile;
