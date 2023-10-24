import { useState } from 'react';
import { Card, Image } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  return (
        <Card
            onClick={() => setSelected(!selected)}
            style={{
              width: '18rem',
              border: selected ? '3px solid red' : 'none',
            }}
          >
            <Image
              src={book.img}
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

export default SingleBook;
