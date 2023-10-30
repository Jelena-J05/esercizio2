import { Card, Image, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import { useState } from "react";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <Card
        onClick={() => setSelected(!selected)}
        style={{
          width: '18rem',
          outline: selected ? '3px solid red' : '3px solid transparent',
        }}
      >
        <Image
          src={book.img}
          className="pt-2"
          style={{
            height:"350px",
            variant: "top",
          }}
        />
        <Card.Body>
          <h6 className="text-truncate">{book.title}</h6>
          <span className="badge rounded-pill text-bg-primary">€ {book.price}</span>
        </Card.Body>
      </Card>
);
};

const BooksByGenre = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

export default function AllTheBooks() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("fantasy");

  const books = BooksByGenre[selectedGenre];

  const booksByQuery = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());

  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="my-3"
        justify
        onSelect={(genre) => setSelectedGenre(genre)}
      >
        {Object.keys(BooksByGenre).map((genre) => (
          <Tab 
          eventKey={genre} 
          title={<span style={{ color: ' #663366' }}>{genre.toUpperCase()}</span>}
          />
        ))}
      </Tabs>
      <Form.Group className="py-4 my-5">
        <Form.Control
          type="text"
          placeholder="Search for a book"
          className="text-center"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
      <Row className="row-gap-5 column-gap-5">
        {books.filter(booksByQuery).map((book) => (
          <SingleBook book={book} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
}


