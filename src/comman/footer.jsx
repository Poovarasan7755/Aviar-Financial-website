import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Homepage.scss";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaInvision } from "react-icons/fa";

export default function Footer() {
  return (
    <Container fluid>
      <div className="footer-bottom">
        <Row>
          <Col xs={12} md={6}>
            <Row className="d-flex flex-direction-row">
              <Col xs={12}>
                <div className="footer-page-align">
                  <Link to={{ pathname: "/companystatelicences" }} style={{ fontSize: "15px", textDecoration: "none", marginRight: "3%" }}>
                    COMPANY STATE LICENSES
                  </Link>
                </div>
              </Col>
              <Col xs={12}>
                <div className="footer-page-align">
                  <Link to={{ pathname: "/privacypolicy" }} style={{ fontSize: "15px", textDecoration: "none", marginRight: "3%" }}>
                    PRIVACY POLICY
                  </Link>
                </div>
              </Col>
              <Col xs={12}>
                <div className="footer-page-align">
                  <Link to="/#/footer" style={{ fontSize: "15px", textDecoration: "none", cursor: "pointer" }}>
                    SITE MAP
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page">
              AVIAR Financial Services LLC
            </p>
            <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page-align">
              {" "}
              2103 Eastland Dr, Suite F
            </p>
            <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page-align">
              Bloomington, IL 61704
            </p>
            <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page-align">
              {" "}
              NMLS #: 1860404
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="footer-last-content-page">
              <Link to={"#"} style={{ fontSize: "13px", textDecoration: "none" }}>
                Purchase Loans
              </Link>
              <Link to={"#"} style={{ fontSize: "13px", textDecoration: "none" }} className="px-3">
                Refinance Loans
              </Link>
              <Link to={"#"} style={{ fontSize: "13px", textDecoration: "none" }}>
                Construction Loans
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="footer-last-content">
              <text style={{ fontSize: "13px" }}>
                309-750-1082 |{" "}
                <a href="vijay@aviartechservices.com" style={{ fontSize: "15px" }}>
                  vijay@aviartechservices.com
                </a>
              </text>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="square">
            <FaFacebookSquare className="facebook  " size={40} />

            <FaTwitterSquare className="twitter " size={40} />

            <FaInstagramSquare className="instagram " size={40} />

            <FaInvision className="in" size={40} />
          </div>
        </Row>
        <div className="d-flex justify-content-end mt-3 footer-page-image">
          {" "}
          <img
            alt="home"
            src="	https://asset-service-bucket-prod.s3.amazonaws.com/92f08dc6-86cf-4396-bc20-76d26155e94c"
            sizes="51"
            className="footer-image"
          />
        </div>
      </div>
    </Container>
  );
}
