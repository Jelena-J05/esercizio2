import { Card, Image, Container, Row, Tab, Tabs } from "react-bootstrap";
import React, { useState } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"
import CommentArea from "./CommentArea";
import ThemeContext from "../contexts/theme";
import { useContext } from 'react';


function SingleBook({ book }) {

  const [selected, setSelected] = useState(false);

  return (
    <>
    <Card
      onClick={() => {
        setSelected(!selected);
      }}
      style={{
        width: '18rem',
        outline: selected ? '3px solid red' : '3px solid transparent',
      }}
    >
      <Image
        src={book.img}
        className="pt-2"
        style={{
          height: "350px",
          variant: "top",
        }}
      />
      <Card.Body>
        <h6 className="text-truncate">{book.title}</h6>
        <span className="badge rounded-pill text-bg-primary">€ {book.price}</span>
      </Card.Body>
    </Card>
    {selected && <CommentArea asin={book.asin} />}
    </>
  )
};

const BooksByGenre = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

 const AllTheBooks = ({query }) => {
  const { theme} = useContext(ThemeContext);
const [selectedGenre, setSelectedGenre] = useState("fantasy");


  const books = BooksByGenre[selectedGenre];

  const booksByQuery = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());


  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className={theme==="light" ? "light my-5": "dark my-5"}
        variant={theme}
        justify
        onSelect={(genre) => setSelectedGenre(genre)}
      >
        {Object.keys(BooksByGenre).map((genre) => (
          <Tab
            eventKey={genre}
            title={<span  className={theme==="light" ? "light": "dark"}
            >{genre.toUpperCase()}</span>}
          />
        ))}
      </Tabs>
      <Row className="row-gap-5 column-gap-5">
        {books.filter(booksByQuery).map((book) => (
          <SingleBook book={book} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
}
export default AllTheBooks


