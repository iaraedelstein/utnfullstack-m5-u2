import React from 'react';
import Comment from './Comment';

function CommentList() {
  const comments = ['comment1', 'comment2', 'comment3'];

  const handleRemoveComment = () => {
    console.log('Quiero borrar');
  };
  return (
    <>
      {comments.map((it) => (
        <Comment key={it} comment={it} removeComment={handleRemoveComment} />
      ))}
    </>
  );
}

export default CommentList;
