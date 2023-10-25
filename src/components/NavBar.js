import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-book.png';

function NavBar() { 
  return (
    <Navbar expand="lg" className="bg-dark nabvbar-dark">
    <Container>
      <Navbar.Brand href="#"className="text-white fw-bold d-flex align-items-center me-1">
        EpiBooks 
        <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top ms-2"
            alt="Epibook logo"
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">About</Nav.Link>
            <Nav.Link href="#" className="text-white">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;