import React from 'react';
import Comment from './Comment';

function CommentList() {
  const comments = ['comment1', 'comment2', 'comment3'];
  return (
    <>
      {comments.map((it) => (
        <Comment key={it} comment={it} />
      ))}
    </>
  );
}

export default CommentList;
