import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";
import fire from "../config/firebaseConfig";

import { Dimmer, Loader } from "semantic-ui-react";
class ViewProfile extends React.Component {
  state = { userDetails: null };

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        fire
          .database()
          .ref("users/" + this.props.location.state.uid)
          .on("value", user => {
            const userdata = user.val();
            fire
              .database()
              .ref(`users/${userdata.approver}`)
              .on("value", approver => {
                userdata.approver = approver.val().email;
                this.setState({ userDetails: userdata });
              });
          });
      }
    });
  }

  renderForm() {
    if (this.state.userDetails === null) {
      return (
        <Dimmer active>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      );
    } else {
      return (
        <Form>
          <h6 className="heading-small text-muted mb-4">User information</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    First Name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.firstName}
                    id="name"
                    placeholder="Name"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    Middle Name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.middleName}
                    id="name"
                    placeholder="Name"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    Last Name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.lastName}
                    id="name"
                    placeholder="Name"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-email">
                    Email address
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="email"
                    placeholder="jesse@example.com"
                    type="email"
                    defaultValue={this.state.userDetails.email}
                    readOnly={true}
                  />
                </FormGroup>
              </Col>{" "}
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    Approver
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.approver}
                    id="approver"
                    placeholder="Approver Email Id"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          {/* Address */}
          <h6 className="heading-small text-muted mb-4">
            Personal information
          </h6>
          <div className="pl-lg-4">
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-address">
                    Date of Birth
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.dob}
                    id="dob"
                    placeholder="Date of Birth"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-city">
                    Phone
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.phone}
                    id="phone"
                    placeholder="Phone Number"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-country">
                    Department
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.department}
                    id="department"
                    placeholder="Department"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-country">
                    Seat Preference
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.seatPreference}
                    id="seatpref"
                    placeholder="Seat Preference"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-country">
                    Meal Preference
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="mealpref"
                    placeholder="Meal Preference"
                    type="text"
                    defaultValue={this.state.userDetails.mealPreference}
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          {/* Description */}
          <h6 className="heading-small text-muted mb-4">
            Passport Information
          </h6>
          <div className="pl-lg-4">
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-address">
                    Passport Number
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.passport_number}
                    id="passportno"
                    placeholder="Passport Number"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-city">
                    Date of Issue
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.date_of_issue}
                    id="doi"
                    placeholder="Date of Issue"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-address">
                    Place of Issue
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.place_of_issue}
                    id="poi"
                    placeholder="Place of Issue"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-city">
                    Date of Expiry
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={this.state.userDetails.date_of_expiry}
                    id="doe"
                    placeholder="Date of Expiry"
                    type="text"
                    readOnly={true}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </Form>
      );
    }
  }
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7 align-items-center" fluid>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>{this.renderForm()}</CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ViewProfile;
