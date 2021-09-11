import React from 'react';
import './css/TodoCounter.css';

function TodoCounter() {
  return (
    <div className="TodoCounter">
      <h2 className="TodoCounter__title">TO-DO List</h2>
      <span className="TodoCounter__counter">Done 2 of 3 tasks</span>
    </div>
  );
}

export { TodoCounter };