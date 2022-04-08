import { Navbar, Nav, Container, Row, Card, Col } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Honolulu Hot Spots</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="turo">Car Rentals</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/100x160" />
        <Card.Body>
          <Card.Title>Restaurant Title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nulla sit amet vehicula consequat. Quisque dapibus elementum leo vitae cursus. Etiam ac sollicitudin nisl, et aliquet neque. Aenean ac dapibus elit. Aliquam sed nisi vel est gravida fermentum quis vitae risus. Integer sed lectus scelerisque, imperdiet eros quis, accumsan massa.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


    </div>
  );
}

export default App;
