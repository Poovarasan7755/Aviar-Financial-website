import React from 'react';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import Calculator from './calculator';
import Footer from '../../comman/footer';

function armorization() {
    const loginPageStyle = {
        margin: "32px",
        maxWidth: "530px",
        background: "#fff",
        padding: "30px",
        
        borderRadius: "10px",
        // boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
      }
  return (
    <div>
    <Container fluid>
         <div
        className="color mt-5"
        style={{
          backgroundImage: `url("https://asset-service-bucket-prod.s3.amazonaws.com/f0544e8f-5a69-480f-b1de-156918163c82")`,
          
        }}
      >
        <div className="overlay-text-text">
          {" "}<div className='page-name'>
          <h2>PAYMENT AMORTIZATION CALCULATOR</h2></div>
        </div>
        </div>
        {/* <Row style={loginPageStyle}>
            <Col>
            <Form class>
        <h5>Payment/Amortization Calculator</h5>
        <p>Calculate your monthly payment for fixed rate or adjustable rate loans.</p>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter username" id="username" name="username" />
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id="password" name="password" placeholder="Password" />
        </Form.Group>
        <div class="custom-control custom-checkbox mt-3">
        <Form.Check
        
        type="checkbox"
        label= "Remember me"
      />
    
  </div>
        <Form.Group className='mt-3'>
          <Button className='button_1'>Log In</Button>
        </Form.Group>
      
      <p>Forgot your username or password?</p>
      <br/>
      <p>Don't have an account? Create Account.</p>
      
   
      </Form>
      
            </Col>
        </Row> */}
    </Container>
    <Footer/>
    </div>
  )
}

export default armorization