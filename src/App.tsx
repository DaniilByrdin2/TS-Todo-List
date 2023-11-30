import React, { useState } from 'react';

import { TodoList } from './TodoList'
import { AddItemForm } from './AddItemForm'

// import { v1 as uuidv1 } from 'uuid';

import { TaskType } from './TodoList'

import SearchAppBar  from './SearchAppBar'

import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



export type FilterValueType = 'all' | 'completed' | 'active'; // или 

type todoLists = {
  id: string,
  title: string,
  filter: FilterValueType,
}

type AllTasksObjType = {
  [ key: string ]: Array<TaskType>
}

// 


function App() {

  // return (
  //   <>
  //     <div><SearchAppBar /></div>
  //     <Container fixed>
  //       <div className='App'>
  //         <Grid container style={ { padding: "20px" } }>
  //           <AddItemForm addItem={addTodoList} />
  //         </Grid>  
  //         <Grid container spacing={5}>
  //           {
  //             todoLists.map((el) => {

  //               let tasksForTodoList = allTasksObj[el.id]

  //               if (el.filter === "completed") {
  //                 tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true)
  //               }
  //               if (el.filter === "active") {
  //                 tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false)
  //               }

  //               return <Grid item><Paper style={{ padding: "10px" }}><TodoList
  //                 key={el.id}

  //                 idTodoList={el.id}

  //                 removeTodoList={removeTodoList}
  //                 changeTodoListTitle={changeTodoListTitle}

  //                 changeStatusTask={changeStatusTask}
  //                 changeFilter={changeFilter}
  //                 changeTitleTask={changeTitleTask}

  //                 removeTask={removeTask}
  //                 addNewTask={addTask}

  //                 title={el.title}
  //                 filterActiveBtn={el.filter}

  //                 tasks={tasksForTodoList}
  //               /></Paper></Grid>
  //             })
  //           }
  //         </Grid>
  //       </div>
  //     </Container>
  //   </>
  // );
}

export default App;