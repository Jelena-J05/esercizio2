import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYTEzOGIzOTczNDAwMTRkNWU3ZmQiLCJpYXQiOjE2OTg2Njg4NTYsImV4cCI6MTY5OTg3ODQs1Nn0.IAoR55f8qCiVkFlMf0Ke8_SRlfERpC3ZVDidqMMP5WQ",
          },
        }
      )
      if (response.ok) {
        alert('Comment has been sent!')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error('There is an error.')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label> Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please add your comment"
            className="text-center"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label> Rating </Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option className='text-center'>1</option>
            <option className='text-center'>2</option>
            <option className='text-center'>3</option>
            <option className='text-center'>4</option>
            <option className='text-center'>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  )
}

export default AddComment