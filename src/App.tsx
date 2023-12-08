import React, { useEffect, useState } from 'react';

import { connect } from "react-redux"

import { Navigate } from "react-router-dom";

import { TodoList } from './Components/TodoList/TodoList'
import { AddItemForm } from './Components/AddItemForm/AddItemForm'
import SearchAppBar  from './Components/SearchBar/SearchAppBar'
import  SimpleBottomNavigation   from './Components/BottomNavigation/BottomNavigation'
import { Loading } from './Components/Loading/Loading'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import { 
  AddTodoList_AC, 
  RemoveTodoList_AC,
  ChangeTitle_AC,
  ChangeFilter_AC,
} from './State/TodoListReducer/todo-list-reducer'

import {
  ChangeTitleTask_AC,
  RemoveTask_AC,
  AddTask_AC,
  ChangeStatusTask_AC

} from './State/TaskTodoListReducer/todo-list-task-reducer'

import { AUTH_ME_THUNK, LOG_OUT_ME_THUNK } from './State/LoginReduser/LoginReducer'


import { FilterValueType } from './State/TodoListReducer/todo-list-reducer'


import './App.css';





// type TypeAppProps = {

// }


export function App( props:any ) {

  let [ loginPage, setLoginPage ] = useState( false )
  let [ loading, setLoading ] = useState( true )
  

  useEffect( () => {

    if( props.isAuth === null ) {
      props.AUTH_ME_THUNK()
    }

    if( props.isAuth === false ) {
      setLoginPage( true )
    } else if( props.isAuth === true ) {
      setLoginPage( false )
      setLoading( false )
    }
  } , [ props.isAuth ] )


  return (
    <div>

      { loginPage && <Navigate to="/Login" replace={true} /> }


      { loading === true ? <Loading/> :  
      <div>
        <SearchAppBar isAuth = { props.isAuth } />
        <main>
          <Container fixed>
            <div className='App'>
              <Grid style={{ marginTop: "30px" }} >
                <AddItemForm addItem={props.AddTodoList_AC} />
              </Grid>
              <Grid >
                {
                  props.TodoList.map((el: any) => {

                    let tasksForTodoList = props.TodoListTask[el.id]

                    if (el.filter === "completed") {
                      tasksForTodoList = tasksForTodoList.filter((t: any) => t.isDone === true)
                    }
                    if (el.filter === "active") {
                      tasksForTodoList = tasksForTodoList.filter((t: any) => t.isDone === false)
                    }

                    return <Grid item><Paper  ><TodoList
                      key={el.id}

                      idTodoList={el.id}

                      removeTodoList={props.RemoveTodoList_AC}
                      changeTodoListTitle={props.ChangeTitle_AC}
                      changeFilter={props.ChangeFilter_AC}


                      changeTitleTask={props.ChangeTitleTask_AC}
                      removeTask={props.RemoveTask_AC}
                      addNewTask={props.AddTask_AC}
                      changeStatusTask={props.ChangeStatusTask_AC}

                      title={el.title}
                      filterActiveBtn={el.filter}

                      tasks={tasksForTodoList}

                    /></Paper></Grid>
                  })
                }
              </Grid>
            </div>
          </Container>
        </main>
        <footer><SimpleBottomNavigation /></footer>
      </div>          
      }
    </div>
  );
}




const mapStateToProps = ( state:any ) => {
  return {
    TodoList: state.TodoList,
    TodoListTask: state.TodoListTask,
    isAuth: state.LoginData.isAuth
  }
}

const mapDispanchToProps = ( dispatch:any ) => {
  return {

    AUTH_ME_THUNK: () => dispatch( AUTH_ME_THUNK() ) ,
    // LOG_OUT_ME_THUNK: () => dispatch( LOG_OUT_ME_THUNK() ),

    AddTodoList_AC: ( newTitle: string ) => dispatch( AddTodoList_AC( newTitle) ),
    RemoveTodoList_AC: ( idTodoList: string ) => dispatch( RemoveTodoList_AC( idTodoList ) ),
    ChangeTitle_AC: ( idTodoList: string , newTitle: string ) => dispatch( ChangeTitle_AC( idTodoList, newTitle ) ),
    ChangeFilter_AC: (  newFilter: FilterValueType, idTodoList: string ) => dispatch( ChangeFilter_AC(  newFilter, idTodoList ) ),

    ChangeTitleTask_AC: ( newTitle: string, idTask: string, todoListId: string ) => dispatch( ChangeTitleTask_AC( newTitle, idTask, todoListId ) ),
    RemoveTask_AC: ( title: string, todoListId: string ) => dispatch( RemoveTask_AC( title, todoListId ) ),
    AddTask_AC: ( title: string, todoListId: string ) => dispatch( AddTask_AC( title, todoListId ) ),
    ChangeStatusTask_AC: ( idTask: string, isDone: boolean, todoListId: string ) => dispatch( ChangeStatusTask_AC( idTask, isDone, todoListId ) )
  }
}


export default  connect( mapStateToProps, mapDispanchToProps )( App ) 


