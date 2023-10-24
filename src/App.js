import NavBar from './NavBar';
import Welcome from './Welcome';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import AllTheBooks from './AllTheBooks';

function App() {
  return (
    <>
    <NavBar/>
    <Welcome/>
    <Container>
      <h3 className='mt-5'> All The Books </h3>
      <hr/>
      <AllTheBooks/>
    </Container>
    <Footer/>
      </>
  );
};
export default App;
