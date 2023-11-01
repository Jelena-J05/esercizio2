import ThemeContext from "../contexts/theme";
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-book.png';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const NavBar = ({ query, setQuery}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Navbar expand="lg" className={theme==="light" ? "light": "dark"}
    variant={theme}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center me-1">
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
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Col md={3}>
        <Form.Group>            
              <Form.Control
                type="text"
                placeholder="Search for a book"
                className="text-center"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            </Col>
            <button className={theme==="light" ? "light ms-5 border border-none px-4 py-1 rounded-1": "dark ms-5 border border-none px-4 py-1 rounded-1"} onClick= {()=> setTheme (theme==="light" ? "dark": "light")} >
              {theme}
            </button>
      </Container>
    </Navbar>
  );
}

export default NavBar;