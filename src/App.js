import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidenav from "../src/Components/sidenav";
import Port from "../src/Components/portfolio";

function App() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={3} lg={2} className="px-0 bg-light">
          <Sidenav />
        </Col>
        <Col md={9} lg={10} className="px-3 py-4">
          <Port />
        </Col>
      </Row>
    </Container>
  );
}

export default App;