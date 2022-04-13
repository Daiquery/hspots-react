import { Navbar, Nav, Container, Row, Card, Col, CardGroup } from 'react-bootstrap';
import BeachesList from '../components/beacheslist';

export default function Beaches() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Honolulu Hot Spots</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="turo">Car Rentals</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <h1 style={{ justifyContent: "center"}}>Beaches</h1>
        <BeachesList />
      </div>
   
    );
  }
