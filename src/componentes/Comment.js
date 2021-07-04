import React from 'react';

function Comment({ comment, removeComment }) {
  return (
    <>
      <p>Prueba Comment {comment}</p>
      <button onClick={() => removeComment()}>x</button>
    </>
  );
}

export default Comment;
