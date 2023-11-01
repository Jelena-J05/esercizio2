import './styles.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import ThemeContext from "./contexts/theme";

function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`${theme} App`}>
    <NavBar query={query} setQuery={setQuery}/>
    <Welcome/>
    <Container>
      <h3 className='mt-5 variant={theme}'> All The Books </h3>
      <hr/>
      <AllTheBooks query={query}/>
    </Container>
    <Footer/>
    </div>
    </ThemeContext.Provider>
    </>
  );
};
export default App;
