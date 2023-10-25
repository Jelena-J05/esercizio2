import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
  return (
    <Container fluid className='bg-dark text-white mt-5'>
      <Row>
        <Col className='my-3 d-flex justify-content-center'> 
        <span> All rights reserved. &copy; EpiBooks</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;