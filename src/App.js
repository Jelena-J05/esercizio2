import NavBar from './NavBar';
import Welcome from './Welcome';
import Footer from './Footer';
import Fantasy from './Fantasy';
import { Container } from 'react-bootstrap';
import History from './History';
import Horror from './Horror';
import Romance from './Romance';
import Scifi from './Scifi';

function App() {
  return (
    <>
    <NavBar/>
    <Welcome/>
    <Container>
      <h2 className='mt-5'> Latest Releases </h2>
      <hr/>
      <Fantasy/>
      <History/>
      <Horror/>
      <Romance/>
      <Scifi/>
    </Container>
    <Footer/>
      </>
  );
};
export default App;
