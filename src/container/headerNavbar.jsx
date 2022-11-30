import React from "react";
import { Link } from "react-router-dom";
import "../css/css/style.scss";
import logo from "./logo.png";
import { BsArrowLeftShort, BsList } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function HeaderNavbar() {
  const [show, setShow] = useState(false);
  // const [show, setShow] = useState(false);
  // const [score, setScore] = useState(false);

  // const showDropdown = (e) => {
  //   setShow(!show);
  // };
  // const hideDropdown = (e) => {
  //   setShow(false);
  // };
  // const scoreDropdown = (e) => {
  //   setScore(!show);
  // };
  // const hideScoreDropdown = (e) => {
  //   setScore(false);
  // };

  return (
    <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex align-items-center">
        {/* <h1 className="logo me-auto">
          <a href="index.html">Arsha</a>
        </h1> */}
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <Navbar.Brand href="/#/index">
          <img src={logo} width="180" height="43" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand> */}
        <a href="/" className="logo me-auto">
          <img src={logo} alt="logo" className="img-fluid" />
        </a>

        {/* <nav id="navbar" className="navbar-mobile"> */}
        <nav id="navbar" className={show ? `navbar navbar-mobile` : `navbar `}>
          <ul>
            <li>
              <Link to={{ pathname: "/" }}>YOUR MORTGAGE SPECIALIST</Link>
            </li>
            <li className="dropdown">
              <Link to={{ pathname: "/loanprocess" }}>
                <span>THE LOAN PROCESS</span> <FiChevronDown className="bi bi-chevron-down ms-2 mt-1" size={25} />
              </Link>
              <ul className= "dropdown-active" >
                <li>
                  <Link to={{ pathname: "/homeloan/basics" }}>WHO DOES WHAT ?</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/credit" }}>WHAT IS A CREDIT SCORE</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/brokevsloan" }}>BROKER VS LOAN</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/fico" }}>FICO CREDIT SCORE</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/qualified" }}>GETTING QUALIFIED</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/downpayment" }}>YOUR DOWNPAYMENT</Link>
                </li>
                <li className="dropdown">
                  <a href="/#/closingcost">
                    <BsArrowLeftShort size={20} /> <span>CLOSING COSTS</span>
                  </a>
                  <ul className="dropdown-active">
                    <li>
                      <Link to={{ pathname: "/taxcost" }}>Tax Closing costs</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/loancost" }}>Loan Related cost</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/insurancecosts" }}>Insurance Closing costs</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to={{ pathname: "/calculator" }}>
                <span>CALCULATORS</span> <FiChevronDown className="bi bi-chevron-down ms-2 mt-1" size={25} />
              </Link>
              <ul className="dropdown-active">
                <li>
                  <Link to={{ pathname: "/armorization" }}>PAYMENT AMORTIZATION</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/rentvsown" }}>RENT VS OWN</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/annualpercentage" }}>ANNUAL PERCENTAGE RATE</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/debtconsolidation" }}>DEBT CONSOLIDATION</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/prepaymentsavings" }}>PREPAYMENT SAVINGS</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/earlypayoff" }}>EARLY PAYOFF</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/refinance" }}>REFINANCE BREAK EVEN</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/taxsaving" }}>TAX SAVINGS</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={{ pathname: "/contactus" }}>CONTACT</Link>
            </li>
            <li>
              <Link to={{ pathname: "/login" }}>LOGIN</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle">
            {show ? <MdClose onClick={() => setShow(!show)} /> : <BsList onClick={() => setShow(!show)} />}
          </i>
        </nav>
      </div>
    </header>
    // <Navbar bg="light" expand="lg" fixed="top" className="m-0">
    //   <Container className="m-0">
    //     <Navbar.Brand href="/#/index">
    //       <img src={logo} width="180" height="43" className="d-inline-block align-top" alt="Logo" />
    //     </Navbar.Brand>{" "}
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="navbar ms-5" >
    //         <Nav.Item className="nvaLinks" >
    //           <Nav.Link href="/#/">YOUR MORTGAGE SPECIALIST</Nav.Link>
    //         </Nav.Item>
    //         {/* <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link> */}
    //         <NavDropdown
    //           title="THE LOAN PROCESS"
    //           show={score}
    //           onMouseEnter={scoreDropdown}
    //           onMouseLeave={hideScoreDropdown}
    //           id="basic-nav-dropdown"

    //         >
    //           <div>

    //                           {/* <NavDropdown.Divider></NavDropdown.Divider> */}
    //                           <NavDropdown.Item href="/#/brokevsloan">BROKER VS LOAN</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/credit">WHAT IS A CREDIT SCORE</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/fico">FICO CREDIT SCORE</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/qualified">GETTING QUALIFIED</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/downpayment">YOUR DOWNPAYMENT</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/loanprocess">THE LOAN PROCESS</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/closingcost">CLOSING COSTS</NavDropdown.Item>

    //           <NavDropdown.Divider></NavDropdown.Divider>
    //           <NavDropdown.Item href="/#/taxcost"><p style={{margin:"0"}} className="ms-5">Tax Closing costs</p></NavDropdown.Item>
    //           <NavDropdown.Item href="/#/loancost"><p  style={{margin:"0"}} className="ms-5">Loan Related cost</p> </NavDropdown.Item>
    //           <NavDropdown.Item href="/#/insurancecosts"><p  style={{margin:"0"}} className="ms-5">Insurance Closing costs</p></NavDropdown.Item>
    //           </div>
    //         </NavDropdown>
    //         <NavDropdown
    //           title="CALCULATORS"
    //           id="nav-bar-calculator"
    //           show={show}
    //           onMouseEnter={showDropdown}
    //           onMouseLeave={hideDropdown}
    //         >
    //           <NavDropdown.Item href="/#/calculator">CALCULATORS</NavDropdown.Item>

    //           <NavDropdown.Item href="/#/armorization">PAYMENT AMORTIZATION</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/rentvsown">RENT VS OWN</NavDropdown.Item>
    //           <NavDropdown.Item href="#/annualpercentage">ANNUAL PERCENTAGE RATE</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/debtconsolidation">DEBT CONSOLIDATION</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/prepaymentsavings">PREPAYMENT SAVINGS=</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/earlypayoff">EARLY PAYOFF</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/refinance">REFINANCE BREAK EVEN</NavDropdown.Item>
    //           <NavDropdown.Item href="/#/taxsaving">TAX SAVINGS</NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Item>
    //           <Nav.Link href="/#/contactus">CONTACT US</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="/#/login">LOG IN</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}
