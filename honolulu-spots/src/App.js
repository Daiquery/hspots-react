import { Navbar, Nav, Container, Row, Card, Col, CardGroup } from 'react-bootstrap';

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
      <Container fluid>
      <div className='py-5'>
          <div className="px-5 my-5">
            <Row className="gx-5">
              <Col lg={4} className="mb-5 mb-lg-0">
                <h2 className='fw-bolder mb-0'>Beaches</h2>
              </Col>
              <Col lg={8}>
                <Row className="gx-5 row-cols-1 row-cols-md-2">
                {Array.from({ length: 4 }).map((_, idx) => (
      <Card style={{ padding: '10px' }}>
        {/* <Card.Img variant="top" src="https://via.placeholder.com/100x160" /> */}
        <Card.Body>
          <Card.Title>Beach {idx + 1}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nulla sit amet vehicula consequat. Quisque dapibus elementum leo vitae cursus. Etiam ac sollicitudin nisl, et aliquet neque. Aenean ac dapibus elit. Aliquam sed nisi vel est gravida fermentum quis vitae risus. Integer sed lectus scelerisque, imperdiet eros quis, accumsan massa.
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>

        <div className='py-5'>
          <div className="px-5 my-5">
            <Row className="gx-5">
              <Col lg={4} className="mb-5 mb-lg-0">
                <h2 className='fw-bolder mb-0'>Restaurants</h2>
              </Col>
              <Col lg={8}>
                <Row className="gx-5 row-cols-1 row-cols-md-2">
                {Array.from({ length: 4 }).map((_, idx) => (
      <Card style={{ padding: '10px' }}>
        {/* <Card.Img variant="top" src="https://via.placeholder.com/100x160" /> */}
        <Card.Body>
          <Card.Title>Restaurant {idx + 1}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nulla sit amet vehicula consequat. Quisque dapibus elementum leo vitae cursus. Etiam ac sollicitudin nisl, et aliquet neque. Aenean ac dapibus elit. Aliquam sed nisi vel est gravida fermentum quis vitae risus. Integer sed lectus scelerisque, imperdiet eros quis, accumsan massa.
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>

        <div className='py-5'>
          <div className="px-5 my-5">
            <Row className="gx-5">
              <Col lg={4} className="mb-5 mb-lg-0">
                <h2 className='fw-bolder mb-0'>Venues</h2>
              </Col>
              <Col lg={8}>
                <Row className="gx-5 row-cols-1 row-cols-md-2">
                {Array.from({ length: 4 }).map((_, idx) => (
      <Card style={{ padding: '10px' }}>
        {/* <Card.Img variant="top" src="https://via.placeholder.com/100x160" /> */}
        <Card.Body>
          <Card.Title>Venue {idx + 1}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nulla sit amet vehicula consequat. Quisque dapibus elementum leo vitae cursus. Etiam ac sollicitudin nisl, et aliquet neque. Aenean ac dapibus elit. Aliquam sed nisi vel est gravida fermentum quis vitae risus. Integer sed lectus scelerisque, imperdiet eros quis, accumsan massa.
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>


        </Container>
    </div>
 
  );
}

export default App;

 
