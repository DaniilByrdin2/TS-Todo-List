import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList'

import { TaskType } from "./TodoList";

function App() {

  let tasks1: Array<TaskType> = [
    { id: 1, title: "CSS" , isDone: true },
    { id: 2, title: "JS" , isDone: false },
    { id: 3, title: "HTML" , isDone: true }
  ]

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Terminator" , isDone: true },
    { id: 2, title: "XXX" , isDone: false },
    { id: 3, title: "Jentelmens of fortune" , isDone: true }
  ]


  return (
    <div>
      <TodoList title = { 'What to learn'} tasks = { tasks1 }  />
      <TodoList title = { 'What to learn'} tasks = { tasks2 }  />
      <TodoList title = { 'What to learn'} tasks = { tasks1 }  />
    </div>
  );
}

export default App;




