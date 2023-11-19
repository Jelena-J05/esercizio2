import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getComments = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4Mjg0ODc3Y2RhYTAwMTQ2ZGYzOTQiLCJpYXQiOjE2OTk5OTI5OTIsImV4cCI6MTcwMTIwMjU5Mn0.PBxtLZQbrMCXAg8EtZmKNb4eMKdBfYE7vytUnFNcroo',
          },
        }
      );

      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    if (asin) {
      getComments();
    }
  }, [asin]);

  const updateComments = async () => {
    await getComments();
  };

  const removeCommentAndUpdateList = async (asin) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4Mjg0ODc3Y2RhYTAwMTQ2ZGYzOTQiLCJpYXQiOjE2OTk5OTI5OTIsImV4cCI6MTcwMTIwMjU5Mn0.PBxtLZQbrMCXAg8EtZmKNb4eMKdBfYE7vytUnFNcroo',
          },
        }
      );
      if (response.ok) {
        setComments(prevComments =>
          prevComments.filter(comment => comment.asin !== asin)
        );
      } else {
        throw new Error('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };  
  
  return (
    <div className="text-center mb-2">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} updateComments={updateComments} />
      <CommentList
        commentsToShow={comments}
        removeCommentAndUpdateList={removeCommentAndUpdateList}
      />
    </div>
  );
};

export default CommentArea;
