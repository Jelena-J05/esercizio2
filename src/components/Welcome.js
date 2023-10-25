import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <Container>
        <Alert variant="secondary text-dark mt-5">
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