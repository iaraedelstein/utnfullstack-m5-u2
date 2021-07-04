import './App.css';
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function App() {
  return (
    <div className="card-item">
      <h1>React</h1>
      <div>
        <CommentForm />
        <CommentList />
      </div>
    </div>
  );
}

export default App;
