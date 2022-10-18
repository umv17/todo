import * as React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Start assignment',
  },
  {
    id: 2,
    title: 'Important assignment',
  },
  {
    id: 3,
    title: 'Complete assignment',
  },
];
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) { return <li>key: {item.id} Title: {item.title}</li>; })}
      </ul>
    </div>
  );
}

export default App;
