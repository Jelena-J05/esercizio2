import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';

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
