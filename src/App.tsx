import React from 'react';

import { connect } from "react-redux"


import { TodoList } from './TodoList'
import { AddItemForm } from './AddItemForm'

import SearchAppBar  from './SearchAppBar'

import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';




import { 
  AddTodoList_AC, 
  RemoveTodoList_AC,
  ChangeTitle_AC,
  ChangeFilter_AC

} from './State/todo-list-reducer'

import {
  ChangeTitleTask_AC,
  RemoveTask_AC,
  AddTask_AC,
  ChangeStatusTask_AC

} from './State/todo-list-task-reducer'


import { FilterValueType } from './State/todo-list-reducer'



// type TypeAppProps = {

// }



export function App( props:any ) {

  return (
    <>
      <div><SearchAppBar /></div>
      <Container fixed>
        <div className='App'>
          <Grid container style={ { padding: "20px" } }>
            <AddItemForm addItem={ props.addTodoList } />
          </Grid>  
          <Grid container spacing={5}>
            {
              props.TodoList.map(( el:any ) => {

                let tasksForTodoList = props.TodoListTask[el.id]
                
                

                if (el.filter === "completed") {
                  tasksForTodoList = tasksForTodoList.filter( ( t:any ) => t.isDone === true) 
                }
                if (el.filter === "active") {
                  tasksForTodoList = tasksForTodoList.filter(( t:any ) => t.isDone === false) 
                }

                return <Grid item><Paper style={{ padding: "10px" }}><TodoList
                  key={el.id}

                  idTodoList={el.id}

                  removeTodoList={props.removeTodoList}
                  changeTodoListTitle={props.changeTodoListTitle}
                  changeFilter={props.changeFilter}

                  
                  changeTitleTask={props.changeTitleTask}
                  removeTask={props.removeTask}
                  addNewTask={props.addTask}
                  changeStatusTask = {props.changeStatusTask}

                  title={el.title}
                  filterActiveBtn={el.filter}

                  tasks={ tasksForTodoList }
                /></Paper></Grid>
              })
            }
          </Grid>
        </div>
      </Container>
    </>
  );
}


const mapStateToProps = ( state:any ) => {
  return {
    TodoList: state.TodoList,
    TodoListTask: state.TodoListTask
  }
}

const mapDispanchToProps = ( dispatch:any ) => {
  return {
    addTodoList: ( newTitle: string ) => dispatch( AddTodoList_AC( newTitle) ),
    removeTodoList: ( idTodoList: string ) => dispatch( RemoveTodoList_AC( idTodoList ) ),
    changeTodoListTitle: ( idTodoList: string , newTitle: string ) => dispatch( ChangeTitle_AC( idTodoList, newTitle ) ),
    changeFilter: (  newFilter: FilterValueType, idTodoList: string ) => dispatch( ChangeFilter_AC(  newFilter, idTodoList ) ),

    changeTitleTask: ( newTitle: string, idTask: string, todoListId: string ) => dispatch( ChangeTitleTask_AC( newTitle, idTask, todoListId ) ),
    removeTask: ( title: string, todoListId: string ) => dispatch( RemoveTask_AC( title, todoListId ) ),
    addTask: ( title: string, todoListId: string ) => dispatch( AddTask_AC( title, todoListId ) ),
    changeStatusTask: ( idTask: string, isDone: boolean, todoListId: string ) => dispatch( ChangeStatusTask_AC( idTask, isDone, todoListId ) )
  }
}

export default connect( mapStateToProps, mapDispanchToProps )( App ) 
