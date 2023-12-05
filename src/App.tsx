import React from 'react';
import { useState } from "react"

import { connect } from "react-redux"



import { TodoList } from './Components/TodoList/TodoList'
import { AddItemForm } from './Components/AddItemForm/AddItemForm'
import SearchAppBar  from './Components/SearchBar/SearchAppBar'


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import './App.css';



import  SimpleBottomNavigation   from './Components/BottomNavigation/BottomNavigation'


import { 
  AddTodoList_AC, 
  RemoveTodoList_AC,
  ChangeTitle_AC,
  ChangeFilter_AC

} from './State/TodoListReducer/todo-list-reducer'

import {
  ChangeTitleTask_AC,
  RemoveTask_AC,
  AddTask_AC,
  ChangeStatusTask_AC

} from './State/TaskTodoListReducer/todo-list-task-reducer'


import { FilterValueType } from './State/TodoListReducer/todo-list-reducer'



// type TypeAppProps = {

// }



export function App( props:any ) {


  let [ AppBar, setSearchAppBar ] = useState( false );


  return (
    <div>
      <SearchAppBar />
        <main>
          <Container fixed>
            <div className='App'>
              {/* container style={ { padding: "20px" } } */}
              <Grid style={{ marginTop: "30px" }} >
                <AddItemForm addItem={props.addTodoList} />
              </Grid>
              {/* container spacing={ 5 } style={ { paddingTop: "10px" } } */}
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

                    // style={{ padding: "20px" } }
                    return <Grid item><Paper  ><TodoList
                      key={el.id}

                      idTodoList={el.id}

                      removeTodoList={props.removeTodoList}
                      changeTodoListTitle={props.changeTodoListTitle}
                      changeFilter={props.changeFilter}


                      changeTitleTask={props.changeTitleTask}
                      removeTask={props.removeTask}
                      addNewTask={props.addTask}
                      changeStatusTask={props.changeStatusTask}

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



// свурху слева аватар
// настройка цвета аватара если нет фото

// темная тема

// добавить react router и сделать навигацию ностройек и тд


// сделать календарь
// сделать кнопку ref чтобы перекл с конца сразу к верхн таске
// сделать футер( настройки календарь сегоднящние таски )
// сделать поиск по таскам (по тайлту)
// сделать логинизацию с сторонний API

// написать на все тесты 
// сделать полную типизацию проекта

// после этого туду лист готов 