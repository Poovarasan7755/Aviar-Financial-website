import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/Homepage.scss";
import map from "./map.png";

export default function IndexPage() {
  return (
    <div>
      <Container fluid>
        <div
          style={{
            backgroundImage: `url("https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/b3294070-4057-49ae-a463-66c62ddce0e8")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 86, 184, 0.75)",
            height: "430px",
            position: "relative",
          }}
          className=" name mt-5 "
        >
          <div className="overlay-texts">
            <h3 class="text-center">Aviar Financial Services and Vijay Govindarajan</h3>
            <p className=" mt-3  " style={{ fontSize: "22px", letterSpacing: "1px" }}>
              Aviar Financial Services LLC is committed to serving customers with respect and attention to detail. Our
              core values of Honesty, Integrity, and Transparency flow from the corporate office down to the Loan
              Officer who will serve you. Contact Vijay today and become a believer.
            </p>
          </div>
        </div>
        <Container>
          <Row className="mt-5  ">
            <Col md={6}>
              <div>
                <h5 className="text-center h3-color">HOME PURCHASING</h5>
                <p className="text-center">
                  Turn the home of your dreams into reality. Whether you are buying your first home, second home, or
                  vacation property.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h5 className="text-center" style={{ color: "#46C6CE" }}>
                  HOME REFINANCING
                </h5>
                <p className="text-center">
                  Save money by taking advantage of the lowest rates available. Whether you are looking to lower your
                  rate, lower your monthly payment, or tap into your home's equity.
                </p>
              </div>
            </Col>
            <div className="d-flex justify-content-center mt-4">
              {" "}
              <Button className="px-3">Apply Now</Button>
            </div>{" "}
          </Row>

          <hr className="mt-5 mb-5 px-5" />
          <div>
            <h4 className="text-center" style={{ color: "#46C6CE" }}>
              We take care of all details, from application to closing.
            </h4>

            <p className="text-center">
              We have access to an endless pool of investors, so we can offer you more options with better rates and
              services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to. We’ll make
              sure you’re informed and updated every step of the way.
            </p>
          </div>
          <hr className="mt-4 mb-4" />

          <div className="d-flex justify-content-center">
            <img
              src="https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/45ae405f-bf98-43ff-85f7-1c06fb93b7c5"
              alt="img"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <hr className="mt-4 mb-5" />
          <div>
            <h3 className="text-center mb-4" style={{ color: "#46C6CE" }}>
              How We Work
            </h3>
          </div>
          <Row>
            <Col md={6}>
              <div>
                <h5 className="text-center" style={{ color: "#46C6CE" }}>
                  Get the loan you need
                </h5>
                <p className="text-center">
                  Getting a loan doesn’t have to be a complicated process filled with headaches and paperwork. At Team
                  USA Mortgage, we’re not just committed to finding you the perfect loan, we’re committed to making sure
                  that the whole process is 100% pain–and hassle–free. We can qualify you in five minutes with our
                  loan-by-phone program.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <h5 className="text-center" style={{ color: "#46C6CE" }}>
                We take care of all details, from application to closing.
              </h5>
              <p className="text-center">
                We have access to an endless pool of investors, so we can offer you more options with better rates and
                services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to. We’ll
                make sure you’re informed and updated every step of the way.
              </p>
            </Col>
          </Row>
          <hr className="mt-5 mb-3" />
          <Row>
            <Col md={6}>
              <h4 className="mb-5" style={{ color: "#46C6CE" }}>
                Aviar Financial Services LLC{" "}
              </h4>
              <h5 className="mb-3">Vijay Govindarajan</h5>
              <h5 className="mb-3">Branch Manager/Mortgage L oan Officer</h5>
              <h5 className="mb-3">NMLS #: 1860505</h5>
              <a className="mb-3" href="309-750-1082">
                Cell: 309-750-1082
              </a>
              <h6 className="mt-5" style={{ color: "#46C6CE" }}>
                --STATE OF ILLINOIS COMMUNITY REINVESTMENT NOTICE--
              </h6>
              <p>
                The Department of Financial and Professional Regulation (Department) evaluates our performance in
                meeting the financial services needs of this community, including the needs of low-income to
                moderate-income households. The Department takes this evaluation into account when deciding on certain
                applications submitted by us for approval by the Department. Your involvement is encouraged. You may
                obtain a copy of our evaluation. You may also submit signed, written comments about our performance in
                meeting community financial services needs to the Department. We will update this notice when our first
                evaluation has been issued.
              </p>
            </Col>
            <Col md={6}>
              <div>
                <img src={map} alt="map" className="index-page-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
