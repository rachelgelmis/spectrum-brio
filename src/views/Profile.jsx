import React from "react";
import outlook from "../assets/img/brand/outlook.png";

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
                          <span>Social Health</span>
                        </h1>
                        <p className="lead text-white">
                          Many studies show that socialization is important both at home and in the workplace. Team Brio's proposed features are meant to encourage socialization amongst coworkers, by providing
                          a user-friendly, easy method for planning outings with your coworkers. Team Brio proposes an application, accessible either through the Brio website or Panorama, that
                          makes it easy to create events and invite people, and sends it directly to your Outlook calendar. Events include (but are not limited to): exercise classes, walks, lunches, and other group activities!
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>

              </section>
              <Container>
              <Row className="justify-content-center text-center mb-lg">
                  <Col lg="8">
                    <h2 className="display-2">Sample Event in Outlook</h2>
                    <p className="lead text-muted">
                    With outlook integration you will be able to instantly schedule your walks with friends with a couple clicks and integrate it into your busy work life.                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                      </li>
                    </ul>
                </Col>
              </Row>
            </Container>
          
          
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                      </li>
                    </ul>
                    <Row className ="row-grid align-items-center">
            <Col className="order-md-1" md="15">
            <img
                alt="..."
                className="card-img"
                src={outlook}
            />
            </Col>
            </Row>
          </main>
        </>
    );
  }
}

export default Profile;
