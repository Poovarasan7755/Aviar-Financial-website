import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Qualified() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Container fluid>
          <div
            className="color mt-5"
            style={{
              backgroundImage: `url("https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/c69f8cc3-f96c-4844-be70-8cfd22c9002f")`,
            }}
          >
            <div className="overlay-effect">
              {" "}
              <h2 className="name">Get Qualified</h2>
            </div>
          </div>
        </Container>
        <Container fluid style={{ width: "90%" }}>
          <h4 className="text-center mt-5 mb-2" style={{ color: "rgb(0 155 223)" }}>
            Why Pre-Qualification is Important
          </h4>
          <p className="para">
            It's important to bring in your mortgage professional early — even before you've started researching
            neighborhoods. What for? Perhaps it's difficult to understand the way we could help even before you start to
            negotiate.
          </p>
          <h5 className="head" style={{ color: "rgb(0 155 223)" }}>
            We Will Help You Pre-Qualify
          </h5>
          <p className="para">
            When we pre-qualify you, we help you determine the amount in mortgage payments you can afford, and the size
            of loan you can qualify for. We accomplish this by reviewing your debts and income, your employment and
            housing circumstances, your available funds for a down payment, required reserves, and other financial
            considerations. It's quick and to the point; We take pride in keeping the paperwork light.
          </p>
          <p className="para">
            Once you qualify, we present to you a Pre-Qualification Letter (your real estate agent may refer to it as a
            "pre-qual"), that states that we are helping you to find the ideal loan to meet your situation and that we
            are confident you will qualify for a mortgage loan for up to a certain amount.
          </p>
          <h5 className="head" style={{ color: "rgb(0 155 223)" }}>
            Pre-Qualification Power
          </h5>
          <p className="para">
            When you locate the house that is ideal for you, and you decide to put together an offer, being
            pre-qualified for a loan will do several things. The first is that you will know what you can afford when
            putting together the offer. Being pre-qualified also will make your offer look even better to the seller,
            like you were bringing them a suitcase of cash! They won't have to worry that that they are wasting their
            time if you will not be able to qualify for a high enough mortgage. The seller of the home won't be
            concerned that he can't trust you to qualify for your loan.Your qualifying for your needed loan amount won't
            cause them concern. You can have the clout of a buyer ready to make the deal on the spot!
          </p>
          <h5 className="head" style={{ color: "rgb(0 155 223)" }}>
            We help with your pre-qualification
          </h5>
          <p className="para">
            We can help you find out how much of a loan you can qualify for and the mortgage payment amount you can
            afford by helping you pre-qualify. In the process, we look at your borrowing capacity - looking at your
            earning status, available money for down payment, debts, income, and other areas. It's a quick, thorough
            process with minimal risks for papercuts.
          </p>
          <h5 className="head" style={{ color: "rgb(0 155 223)" }}>
            One-on-One
          </h5>
          <p className="para">
            It's vital to sit down and talk with us, even though you are free to also try the helpful mortgage loan
            calculator tools on this website. For one thing, you'll need a Pre-Qualification Letter! Next, we can
            consider your mortgage program options and be sure you are in the right one. We're waiting to hear from you:
            call us at 218-237-5128.
          </p>
          <p className="pt-3">
            Have questions about the loan process? Call Vijay at{" "}
            <a className="contact" href="309-750-1082">
              309-750-1082
            </a>
            . We answer questions about the loan process every day.
          </p>
          <div className="homepage-button mt-5 mb-5">
            <Button className="px-4 py-2 homepage-btn" onClick={() => navigate("/step-1")}>
              {" "}
              Apply Now
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Qualified;
