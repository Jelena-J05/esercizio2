import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYTEzOGIzOTczNDAwMTRkNWU3ZmQiLCJpYXQiOjE2OTg2Njg4NTYsImV4cCI6MTY5OTg3ODQ1Nn0.IAoR55f8qCiVkFlMf0Ke8_SRlfERpC3ZVDidqMMP5WQ',
          },
        }
      )
      if (response.ok) {
        alert('Comment has been deleted!')
      } else {
        throw new Error('Comment has not been deleted!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment