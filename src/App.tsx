import React from 'react';
import { useState } from 'react';

import './App.css';

import { TodoList } from './TodoList'

import { TaskType } from "./TodoList";


let InitTasks: Array<TaskType> = [
  { id: 1, title: "CSS" , isDone: true },
  { id: 2, title: "JS" , isDone: false },
  { id: 3, title: "HTML" , isDone: true },
  { id: 4, title: "XHTML" , isDone: true },
]


export type FilterValueType = 'all' | 'completed' | 'active'; // или 


function App() {

  let [ tasks, setTasks ] = useState( InitTasks )
  let [ filter, setFilter ] = useState<FilterValueType>("all")


  const removeTask  = ( id: number ) => {
    setTasks( tasks.filter( e  => id !== e.id  ) )
  }
  const changeFilter = ( value: FilterValueType ) => {
    setFilter( value )
  }


  let tasksForTodoList = tasks

  if (filter === "completed") {
    tasksForTodoList = tasks.filter( t => t.isDone === true ) 
  }
  if (filter === "active") {
    tasksForTodoList = tasks.filter( t => t.isDone === false ) 
  }

  console.log(filter);
  


  return (
    <div>
      <TodoList 
        changeFilter = { changeFilter }
        removeTask = { removeTask } 
        title = { 'What to learn'} 
        tasks = { tasksForTodoList }  
      />
    </div>
  );
}

export default App;




