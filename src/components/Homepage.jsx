import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/Homepage.scss";
import images from "./images.png";
import { useNavigate } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { AiOutlineFileDone } from "react-icons/ai";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Container fluid>
        <div
          className="color mt-5"
          style={{
            backgroundImage: `url("	https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/b3294070-4057-49ae-a463-66c62ddce0e8")`,
          }}
        >
          <div className="overlay-effect">
            {" "}
            <h2 className="name">Vijay Govindarajan</h2>
          </div>
        </div>
        <Container className=" mt-3">
          <h2 className="text-center">Our Financial Services</h2>
          <br />
          <Row style={{ justifyContent: "center", margin: "-1%" }}>
            <Card
              className="cardd"
              style={{
                width: "18rem",
                marginRight: "3%",
                backgroundColor: "rgb(0, 113, 174)",
                color: "#fff",
                opacity: "0.8",
              }}
            >
              <Card.Img
                className="d-flex justify-content-center"
                variant="top"
                src="https://cdn.pixabay.com/photo/2019/11/23/09/25/marketing-4646598_960_720.png"
              />
              <Card.Body>
                <Card.Title className="text-center">PURCHASE LOANS</Card.Title>
                <Card.Text className="text-center">We provide loan for purchasing new property.</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">Learn more</Button>
                </div>
              </Card.Body>
            </Card>

            <Card
              className="card tiles-body"
              style={{
                width: "18rem",
                marginRight: "3%",
                backgroundColor: "rgb(0, 113, 174)",
                color: "#fff",
                opacity: "0.8",
              }}
            >
              <div className="ms-4" style={{ width: "84%" }}>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/10/03/11/31/wallet-3721156_960_720.png"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">REFINANCE LOANS</Card.Title>
                <Card.Text className="text-center">We trade your old mortgage with a new one.</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">Learn more</Button>
                </div>
              </Card.Body>
            </Card>
            <Card
              className="card tiles-body"
              style={{
                width: "18rem",
                marginRight: "2%",
                backgroundColor: "rgb(0, 113, 174)",
                color: "#fff",
                opacity: "0.8",
              }}
            >
              <div className="ms-4" style={{ width: "75%", alignItems: "center" }}>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2012/04/13/00/01/dollars-31085_960_720.png"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">CONSTRUCTION LOANS</Card.Title>
                <Card.Text className="text-center">We provide best loans for your construction purposes.</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">Learn more</Button>
                </div>
              </Card.Body>
            </Card>

            {/* <Col className="text-center tiles" style={{width:"20%",height:"350px",marginRight:"5%", backgroundImage: `url("	https://loanscanada.ca/wp-content/uploads/2015/10/hipster_loan-1.jpg	")`
}}><div className="mt-5 text-center"><h5 style={{color:"rgb(0, 113, 174)"}}></h5><p className="text-center" style={{padding:"10%"}}>We trade your old mortgage with a new one</p></div></Col>
        <Col className="text-center tiles" style={{width:"100%%",height:"350px",marginRight:"5%", backgroundImage: `url("	https://loanscanada.ca/wp-content/uploads/2015/10/hipster_loan-1.jpg	")`,
}}><div className="mt-5 text-center"><h5 style={{color:"rgb(0, 113, 174)"}}>REFINANCE LOANS</h5><p className="text-center" style={{padding:"10%"}}>We provide loan for purchasing new property</p></div></Col>
        <Col className="text-center tiles" style={{width:"25%",height:"350px",marginRight:"5%",backgroundImage: `url("	https://loanscanada.ca/wp-content/uploads/2015/10/hipster_loan-1.jpg	")`, 
}}><div className="mt-5 text-center"><h5 style={{color:"rgb(0, 113, 174)"}}>CONSTRUCTION LOANS</h5><p className="text-center" style={{padding:"10%"}}>We provide best loans for constructing purposes</p></div></Col>
         */}
          </Row>
        </Container>
        <Container fluid style={{ width: "95%" }}>
          <div className="mt-4">
            {" "}
            <h5 style={{ color: "rgb(0 113 174)" }}>Get the loan you need</h5>
            <p>
              Getting a loan doesn’t have to be a complicated process filled with headaches and paperwork. At Team USA
              Mortgage, we’re not just committed to finding you the perfect loan, we’re committed to making sure that
              the whole process is 100% pain–and hassle–free. We can qualify you in five minutes with our loan-by-phone
              program.
            </p>
          </div>
          <Row style={{ backgroundColor: "aliceblue" }} className="mt-4 px-4 py-4">
            <Col xs={12} md={6} className="">
              <div className="tech-services">
                <img
                  src="https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/ee63d34d-ff16-45f3-849d-a5e2bdf2460d"
                  alt="image"
                  className="image-content "
                />
              </div>
            </Col>
            <Col className="branch-manager-style">
              <div className="">
                <h4>
                  <text style={{ color: "#194376" }}>Vijay Govindarajan</text>
                </h4>
                <p>Branch Manager</p>
                <p>
                  {" "}
                  <a href="vijay@aviartechservices.com">vijay@aviartechservices.com</a>
                </p>
                <p>
                  Cell: <a href="309-750-1082">309-750-1082</a>{" "}
                </p>
                <p>NMLS #: 1860404</p>
              </div>
            </Col>
          </Row>
          <div className="mt-4">
            <h5 className="mt-4" style={{ color: "rgb(0 113 174)" }}>
              I take care of all details, from application to closing.
            </h5>
            <p>
              We have access to an endless pool of investors, so we can offer you more options with better rates and
              services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to. We’ll make
              sure you’re informed and updated every step of the way.
            </p>
            <h5 className="mt-4" style={{ color: "rgb(0 113 174)" }}>
              Team USA Mortgage’ core philosophy of “customers for Life”
            </h5>
            <p>
              A strong and genuine belief in the “customers for life” principal of doing business is what fuels this
              company. Referrals from previous customers and local real estate professionals have always delivered the
              majority of the company’s production. We believe in doing the job right the first time so our customers
              feel comfortable calling on us the next time.
            </p>
            <div className="d-flex justify-content-center">
              <img src={images} className="width-images mb-4 mt-4" />
            </div>
            <h5 style={{ color: "rgb(0 113 174)" }}>Low rates and fees through knowledge and technology</h5>

            <p>
              We use the most advanced technology available to close loans quickly, and at low cost. Team USA Mortgage
              combines the use of the internet along with advanced processing software and automated underwriting
              systems to find the best loan program for our customers. We’ve essentially taken the mystery out of
              approving and closing a home loan.
            </p>
            <h5 className="mt-4" style={{ color: "rgb(0 113 174)" }}>
              Not just for those with perfect credit
            </h5>
            <p>
              Team USA Mortgage is dedicated in the pursuit of offering competitive rates and terms for our “A” credit
              customers. We are also just as driven to provide customers who may have had credit problems in the past
              with the opportunity to obtain a mortgage. Just ask about our low down payment purchase and FHA programs.
            </p>
            <h5 className="mt-4" style={{ color: "rgb(0 113 174)" }}>
              We Listen… then find the best loan product for you!
            </h5>
            <p>
              Our goal in serving our customers is letting them tell us what they wish to accomplish in the best
              possible scenario. Then we work hard to make that scenario a reality. We are proud of our commitment to
              get the job done right the first time. In times of uncertainty you want a mortgage company that will fight
              for your best interest. At Team USA Mortgage, we are committed to doing what’s best for our customers. Let
              us prove it to you!
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url("https://wallpaperbat.com/img/119262-financial-wallpaper-top-free-financial-background.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="px-5 py-5 mt-4 mb-4"
          >
            <h4 className="text-center" style={{ color: "white" }}>
              About Us
            </h4>
            <p className="px-4" style={{ color: "white" }}>
              Established in 2015 and headquartered in Bloomington, Illinois, we specialize in a broad range of IT
              consulting and staffing solutions. Our solutions can be tailored to match our clients’ needs while
              maintaining the flexibility to adapt to dynamic market and business requirements. We have been providing
              our services to Corporate and small business clients with remarkable results.
            </p>
            <p className="px-4" style={{ color: "white" }}>
              AVIAR Technology Services help our clients derive greater business value through better management of
              technology. We are committed to delivering excellence in creating innovative and flexible solutions for
              our clients.
            </p>
          </div>

          <Row className="mt-4">
            <Col xs={12} md={6}>
              <div>
                <img
                  className="px-4 py-4 doller-amt-image"
                  src="https://cdnapp.indialends.com/illive/images/creative/cr-img.png"
                  alt="gif"
                />
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex align-items-center mt-4 ">
              <div>
                <h3 style={{ color: "#0d81d4" }}>Check your Credit Score in just 1 minute.</h3>
                <p>
                  <b style={{ color: "#adb5bd" }}>It determines your TouchLess loan and credit line eligibility</b>
                </p>
                <div className="d-flex justify-content-center">
                  <Button>Click here</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col md={4}>
              <div>
                <div className="cardimage">
                  <CgNotes size={48} color="#0d81d4" />
                </div>
                <Card.Body>
                  <Card.Title className="cardimage">
                    <b>REGISTER AND APPLY</b>
                  </Card.Title>
                  <Card.Text>Fill in your details and get instant approval on the loan amount</Card.Text>
                </Card.Body>{" "}
              </div>
            </Col>{" "}
            <Col md={4}>
              <div>
                <div className="cardimage">
                  <AiOutlineFileDone size={48} color="#0d81d4" />
                </div>
                <Card.Body>
                  <Card.Title className="cardimage">
                    <b>INSTANT APPROVAL</b>
                  </Card.Title>

                  <Card.Text>Fill in your details and get instant approval on the loan amount</Card.Text>
                </Card.Body>{" "}
              </div>
            </Col>{" "}
            <Col md={4}>
              <div>
                <div className="cardimage">
                  {" "}
                  <Card.Img
                    variant="top"
                    src="https://www.mobikwik.com/assets/images/lending/moneyhand.png"
                    className="w-auto"
                    alt="variant"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="cardimage">
                    <b>BOOST YOUR FINANCES</b>
                  </Card.Title>
                  <Card.Text>The amount will be credited to your wallet in less than 5 minutes</Card.Text>
                </Card.Body>{" "}
              </div>
            </Col>
          </Row>

          <hr />
          <div className="homepage-button mt-5">
            {" "}
            <h5>Apply now for a better mortgage experience through Encompass</h5>
          </div>
          <div className="homepage-button mt-3 mb-5">
            <Button className="px-4 py-2 homepage-btn" onClick={() => navigate("/step-1")}>
              {" "}
              Apply Now
            </Button>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Homepage;
