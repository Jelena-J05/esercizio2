import { useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import fantasy from './data/fantasy.json'
import SingleBook from './SingleBook'

const AllTheBooks = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Search for a book"
              className="text-center"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-5 mt-5">
        {fantasy
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((book) => {
            return (
              <Col xs={12} md={3} key={book.asin}>
                <SingleBook book={book} />
              </Col>
            )
          })}
      </Row>
    </>
  )
}

export default AllTheBooks
