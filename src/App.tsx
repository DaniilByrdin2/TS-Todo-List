import React from 'react';
import { useState } from 'react';

import './App.css';

import { TodoList } from './TodoList'

import { TaskType } from "./TodoList";

import { v1 as uuidv1 } from 'uuid';


// const v1options = {
//   node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
//   clockseq: 0x1234,
//   msecs: new Date('2011-11-01').getTime(),
//   nsecs: 5678,
// };


let InitTasks: Array<TaskType> = [
  { id: uuidv1(), title: "CSS" , isDone: true },
  { id: uuidv1(), title: "HTML" , isDone: true },
  { id: uuidv1(), title: "XHTML" , isDone: true },
  { id: uuidv1(), title: "JS" , isDone: false },
]


export type FilterValueType = 'all' | 'completed' | 'active'; // или 


function App() {

  const [ tasks, setTasks ] = useState( InitTasks )
  const [ filter, setFilter ] = useState<FilterValueType>("all")


  const removeTask  = ( id: string ) => {
    setTasks( tasks.filter( e  => id !== e.id  ) )
  }

  const changeFilter = ( value: FilterValueType ) => {
    setFilter( value )
  }
  
  const addTask = ( title: string ) => {
    setTasks( [ ...tasks, { id: uuidv1(), title, isDone: false }] )
  }


  let tasksForTodoList = tasks

  if (filter === "completed") {
    tasksForTodoList = tasks.filter( t => t.isDone === true ) 
  }
  if (filter === "active") {
    tasksForTodoList = tasks.filter( t => t.isDone === false ) 
  }  


  return (
    <div>
      <TodoList 
        changeFilter = { changeFilter }
        removeTask = { removeTask } 
        addNewTask = { addTask }
        title = { 'What to learn'} 
        tasks = { tasksForTodoList }  
      />
    </div>
  );
}

export default App;




