import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../container/Sidebar";

function StepThree() {
  const navigate = useNavigate();
  const [values, setValues] = useState(false);

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Container className="mt-3">
          <Sidebar />

          <Form>
            <div className="px-3">
              <div className=" mb-5">
                <h3 style={{ color: "#0bf" }}>My Loan Application</h3>
              </div>
              <h5>Joint Credit</h5>
              <p>
                Applicants should complete this form as "Borrower" or "Co-Borrower," as applicable. Co-Borrower
                information must also be provided (and the appropriate box checked) when the income or assets of a
                person other than the Borrower (including the Borrower’s spouse) will be used as a basis for loan
                qualification or the income or assets of the Borrower’s spouse or other person who has community
                property or similar rights pursuant to applicable state law will not be used as a basis for loan
                qualification, but his or her liabilities must be considered because the spouse or other person who has
                community property or similar rights and the Borrower resides in a community property state, the
                security property is located in a community property state, or the Borrower is relying on other property
                located in a community property state as a basis for repayment of the loan.{" "}
              </p>
              <Form.Group className="mt-4">
                <Form.Label>Are you applying for joint credit with a co-borrower? </Form.Label>
                <div className="mt-2">
                  <Button className="px-4 mx-4" onClick={() => setValues(true)}>
                    Yes
                  </Button>
                  <Button className="px-4" onClick={() => setValues(false)}>
                    No
                  </Button>
                </div>
              </Form.Group>
              {values === true ? (
                <Form.Group className="mt-4">
                  <Form.Label>How many total borrowers, including yourself, are applying for credit?</Form.Label>
                  <Form.Control type="count" name="number" value={2} className="mt-2" />
                </Form.Group>
              ) : (
                <Form.Group className="mt-4">
                  <Form.Label>How many total borrowers, including yourself, are applying for credit?</Form.Label>
                  <Form.Control type="count" name="number" value={1} className="mt-2" />
                </Form.Group>
              )}
            </div>

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
                <Button className="button-Style next-btn-color" onClick={() => navigate("/step-4")}>
                  Next
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <Container fluid>
        </Container>
      </div>
    </div>
  );
}
export default StepThree;
