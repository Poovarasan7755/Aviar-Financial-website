import React, { useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Footer from "../../comman/footer";
import Sidebar from "../../container/Sidebar";

const Expense = [
  { label: "Alimony", value: "1" },
  { label: "Child Support", value: "2" },
  { label: "Job Related Expenses", value: "3" },
  { label: "others", value: "4" },
  { label: "Separate Maintenance Expense", value: "5" },
];

function Liabilities() {
  const [ability, setAbility] = useState(false);
  const navigate = useNavigate();
  const [change, setChange] = useState();
  const [formValues, setFormValues] = useState([
    { otherDescripn: "", companyName: "", balance: "", monthLeft: "", monthAmt: "" },
  ]);

  const ExpenseType = (event) => {
    setChange(event.value);
  };

  let handleChange = (e, i) => {
    let newFormvalues = [...formValues];
    newFormvalues[i][e.target.name] = e.target.value;
    setFormValues(newFormvalues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { values: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Sidebar />
        <Container>
          <Form onSubmit={handleSubmit} className="px-3">
            <div className="mt-4">
              <h3 style={{ color: "#0bf" }}>My Loan Application</h3>
            </div>
            <h5 className="mt-5">Manage Other Expenses</h5>
            <div className="employement">
              <h6 className="mt-3 mb-3 ">Other Expense Entry</h6>
              <Button onClick={() => addFormFields()}>Add Expense</Button>
            </div>
            <hr />
            {formValues.map((element, index) => (
              <div key={index}>
                <div>
                  {" "}
                  <div className="d-flex justify-content-end">
                    <Button className="px-3 mt-3" onClick={() => removeFormFields(index)}>
                      Remove
                    </Button>
                  </div>
                  <Form.Group className="mt-4">
                    <Form.Label>Select Type of Expense</Form.Label>
                    <Select name="Select One" options={Expense} onChange={(event) => ExpenseType(event)} />
                  </Form.Group>
                  {console.log("change", change)}
                  {change == 4 ? (
                    <div>
                      <Form.Group className="mt-3">
                        <Form.Label>Other Description</Form.Label>
                        <Form.Control
                          type="string"
                          name="otherDescripn"
                          value={element.otherDescripn || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                      <Row>
                        <Form.Group className="mt-3">
                          <Form.Label>
                            <Form.Label>Company Name or Payable To</Form.Label>
                            <Form.Control
                              type="string"
                              name="companyName"
                              value={element.companyName || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Form.Label>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Balance</Form.Label>
                            <Form.Control
                              type="string"
                              placeholder="$"
                              name="balance"
                              value={element.balance || ""}
                              onChange={(e) => {
                                handleChange(index, e);
                              }}
                            />
                          </Form.Group>
                        </Col>{" "}
                        <Col md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Monthly Amount</Form.Label>
                            <Form.Control
                              type="string"
                              placeholder="$"
                              name="monthAmt"
                              value={element.monthAmt || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Form.Group>
                        </Col>{" "}
                        <Col md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Months Left</Form.Label>
                            <Form.Control
                              type="string"
                              placeholder="$"
                              name="monthLeft"
                              value={element.monthLeft || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  ) : (
                    <div>
                      <Form.Group className="mt-4">
                        <Form.Label>Company Name or Payable To</Form.Label>
                        <Form.Control
                          type="string"
                          name="companyName"
                          value={element.companyName || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                      <Row>
                        <Col md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Balance</Form.Label>
                            <Form.Control
                              type="string"
                              placeholder="$"
                              name="balance"
                              value={element.balance || ""}
                              onChange={(e) => {
                                handleChange(index, e);
                              }}
                            />
                          </Form.Group>
                        </Col>{" "}
                        <Col md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Monthly Amount</Form.Label>
                            <Form.Control
                              type="string"
                              placeholder="$"
                              name="monthAmt"
                              value={element.monthAmt || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Form.Group>
                        </Col>{" "}
                        <Col md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Months Left</Form.Label>
                            <Form.Control
                              type="string"
                              placeholder="$"
                              name="monthLeft"
                              value={element.monthLeft || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Form>
        </Container>
        <Row style={{ margin: "100px 30px 10px 30px" }}>
          <Col>
            <div>
              <Button className="button-Style back-btn-color" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="button-Style save-btn-color me-3">Save</Button>{" "}
            <Button className="button-Style next-btn-color " onClick={() => navigate("/declaration")}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default Liabilities;
