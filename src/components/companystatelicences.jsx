import React from "react";
import { Container, Button, Table } from "react-bootstrap";
function companystatelicences() {
  return (
    <div>
      <Container fluid>
        <div
          className="color mt-5"
          style={{
            backgroundImage: `url("https://asset-service-bucket-prod.s3.amazonaws.com/4ea4aad9-5288-4b04-b8a2-fe94da2bf58a")`,
          }}
        >
          <div className="overlay-effect">
            {" "}
            <h2 className="name ml-3">State Licenses</h2>
          </div>
        </div>
        <Container className="ml-3 mt-5" fluid style={{ width: "95%" }}>
          <h5 className="head" style={{ color: "rgb(0, 113, 174)" }}>
            State Licenses
          </h5>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="head">State</th>
                <th className="head">License Number</th>
                <th className="head">License Type</th>
              </tr>
            </thead>
            <tbody className="para_1">
              <tr className="para_1">
                <td className="para_1">Florida</td>
                <td className="para_1">MBR304</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Illinois</td>
                <td className="para_1">MB.6760743</td>
                <td className="para_1">Residential Mortgage License (Brokering Activity)</td>
              </tr>
              <tr>
                <td className="para_1">Indiana</td>
                <td className="para_1">9908</td>
                <td className="para_1">Loan Broker License</td>
              </tr>
              <tr>
                <td className="para_1">Iowa</td>
                <td className="para_1">2007-0141</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Kansas</td>
                <td className="para_1">MC.0001466</td>
                <td className="para_1">Mortgage Company License</td>
              </tr>
              <tr>
                <td className="para_1">Minnesota</td>
                <td className="para_1">MN-MO-20396509</td>
                <td className="para_1">Residential Mortgage Originator License</td>
              </tr>
              <tr>
                <td className="para_1">Missouri</td>
                <td className="para_1">16-1667</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Nebraska</td>
                <td className="para_1">1989</td>
                <td className="para_1">Mortgage Broker</td>
              </tr>
              <tr>
                <td className="para_1">Utah</td>
                <td className="para_1">11032618</td>
                <td className="para_1">Mortgage Entity License</td>
              </tr>
              <tr>
                <td className="para_1">Utah</td>
                <td className="para_1">11032618</td>
                <td className="para_1">Mortgage Entity License</td>
              </tr>
              <tr>
                <td className="para_1">Wisconsin</td>
                <td className="para_1">213484BR</td>
                <td className="para_1">Mortgage Broker License</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default companystatelicences;
