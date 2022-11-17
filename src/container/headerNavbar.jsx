import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "./logo.png";
export default function HeaderNavbar() {
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const scoreDropdown = (e) => {
    setScore(!show);
  };
  const hideScoreDropdown = (e) => {
    setScore(false);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="m-0">
      <Container className="m-0">
        <Navbar.Brand href="/#/index">
          <img src={logo} width="180" height="43" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar ms-5" >
            <Nav.Item className="nvaLinks" >
              <Nav.Link href="/#/">YOUR MORTGAGE SPECIALIST</Nav.Link>
            </Nav.Item>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown
              title="THE LOAN PROCESS"
              show={score}
              onMouseEnter={scoreDropdown}
              onMouseLeave={hideScoreDropdown}
              id="basic-nav-dropdown"
              
            >
              <div>
                              
                              {/* <NavDropdown.Divider></NavDropdown.Divider> */}
                              <NavDropdown.Item href="/#/brokevsloan">BROKER VS LOAN</NavDropdown.Item>
              <NavDropdown.Item href="/#/credit">WHAT IS A CREDIT SCORE</NavDropdown.Item>
              <NavDropdown.Item href="/#/fico">FICO CREDIT SCORE</NavDropdown.Item>
              <NavDropdown.Item href="/#/qualified">GETTING QUALIFIED</NavDropdown.Item>
              <NavDropdown.Item href="/#/downpayment">YOUR DOWNPAYMENT</NavDropdown.Item>
              <NavDropdown.Item href="/#/loanprocess">THE LOAN PROCESS</NavDropdown.Item>
              <NavDropdown.Item href="/#/closingcost">CLOSING COSTS</NavDropdown.Item>
              
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Item href="/#/taxcost"><p style={{margin:"0"}} className="ms-5">Tax Closing costs</p></NavDropdown.Item>
              <NavDropdown.Item href="/#/loancost"><p  style={{margin:"0"}} className="ms-5">Loan Related cost</p> </NavDropdown.Item>
              <NavDropdown.Item href="/#/insurancecosts"><p  style={{margin:"0"}} className="ms-5">Insurance Closing costs</p></NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavDropdown
              title="CALCULATORS"
              id="nav-bar-calculator"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="/#/calculator">CALCULATORS</NavDropdown.Item>
              
              <NavDropdown.Item href="/#/armorization">PAYMENT AMORTIZATION</NavDropdown.Item>
              <NavDropdown.Item href="/#/rentvsown">RENT VS OWN</NavDropdown.Item>
              <NavDropdown.Item href="#/annualpercentage">ANNUAL PERCENTAGE RATE</NavDropdown.Item>
              <NavDropdown.Item href="/#/debtconsolidation">DEBT CONSOLIDATION</NavDropdown.Item>
              <NavDropdown.Item href="/#/prepaymentsavings">PREPAYMENT SAVINGS=</NavDropdown.Item>
              <NavDropdown.Item href="/#/earlypayoff">EARLY PAYOFF</NavDropdown.Item>
              <NavDropdown.Item href="/#/refinance">REFINANCE BREAK EVEN</NavDropdown.Item>
              <NavDropdown.Item href="/#/taxsaving">TAX SAVINGS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/#/contactus">CONTACT US</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#/login">LOG IN</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



