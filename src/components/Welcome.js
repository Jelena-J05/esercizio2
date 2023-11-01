import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import ThemeContext from "../contexts/theme";
import { useContext } from 'react';


function Welcome() {
    const { theme} = useContext(ThemeContext);
    return (
        <Container>
        <Alert className={theme==="light" ? "light mt-5": "dark mt-5"}
    variant={theme}>        
            <Alert.Heading> Hey there👋, welcome to our bookstore! </Alert.Heading>
            <p>
                Books can transport you across the world, so it's definitely worth visiting our bookstore to buy one.
            </p>
            <hr />
            <p className="mb-0">
                Below you can find the latest releases of our books.
            </p>
        </Alert>
        </Container>
    );
}

export default Welcome;