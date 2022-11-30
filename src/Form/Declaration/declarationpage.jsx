import React from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../container/Sidebar";

export default function Declarationpage() {
  const navigate = useNavigate();

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Container>
          <Form>
            <div className="px-4">
              <div className="mt-3">
                <h3 style={{ color: "#0bf" }}>My Loan Application</h3>
              </div>
              <h5 className="mt-5">Borrower Demographic Information</h5>
              <p className="mt-3">
                <b>The purpose of collecting this information </b>is to help ensure that all applicants are treated
                fairly and that the housing needs of communities and neighborhoods are being fulfilled. For residential
                mortgage lending, Federal law requires that we ask applicants for their demographic information
                (ethnicity, sex, and race) in order to monitor our compliance with equal credit opportunity, fair
                housing, and home mortgage disclosure laws. You are not required to provide this information, but are
                encouraged to do so. You may select one or more designations for "ethnicity" and one or more
                designations for "Race." <b>The law provides that we may not discriminate </b> on the basis of this
                information, or on whether you choose to provide it. However, if you choose not to provide the
                information and you have made this application in person, Federal regulations require us to note your
                ethnicity, sex, and race on the basis of visual observation or surname. The law also provides that we
                may not discriminate on the basis of age or marital status information you provide in this application.
                If you do not wish to provide some or all of this information, please check below.
              </p>
              <b className="mt-3">Ethnicity - Check one or more</b>

              <Form.Group className="mt-3">
                <Form.Check type="Checkbox" label="Hispanic or Latino" />
              </Form.Group>
              <Row>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Mexican" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Puerto Rican" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Cuban" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mt-3">
                {" "}
                <Form.Check type="checkbox" label="Other Hispanic or Latino - Enter Origin" />
              </Form.Group>
              <Form.Control className="mt-3" type="string" />
              <p className="mt-3">
                For example: Argentinean, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, and so on.
              </p>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Not Hispanic or Latino" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="I do not wish to provide this information." />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Enter name of enrolled or principal tribe:</Form.Label>
                <Form.Control type="string" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Asian" />
              </Form.Group>
              <Row>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Asian Indian" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Chinese" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Filipino" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Japanese" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Korean" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Vietnamese" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Other Asian - Enter Race:" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Control type="string" />
              </Form.Group>
              <p className="mt-3">For example: Hmong, Laotian, Thai, Pakistani, Cambodian, and so on.</p>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Black or African American" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Native Hawaiian or Other Pacific Islander" />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Native Hawaiian" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Guamanian or Chamorro" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Samoan" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Other Pacific Islander - Enter Race:" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="string" className="mt-3" />
                <p className="mt-2">For example: Fijian, Tongan, and so on.</p>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="White" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="I do not wish to provide this information." />
              </Form.Group>
              <p className="mt-4">
                <b>Sex</b>
              </p>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Male" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="Female" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Check type="checkbox" label="I do not wish to provide this information." />
              </Form.Group>
            </div>
          </Form>
        </Container>
        <Row style={{ margin: "150px 30px 10px 30px" }}>
          <Col>
            <div>
              <Button className="button-Style back-btn-color" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="button-Style save-btn-color me-3">Save</Button>
            <Button className="button-Style next-btn-color " onClick={() => navigate("/forms/summary")}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
