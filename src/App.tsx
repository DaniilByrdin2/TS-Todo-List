import React from 'react';
import { useState } from 'react';

import { TodoList } from './TodoList'
import { AddItemForm } from './AddItemForm'

import { v1 as uuidv1 } from 'uuid';

import { TaskType } from './TodoList'
<<<<<<< HEAD

import './App.css';
=======
import SearchAppBar  from './SearchAppBar'

import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
>>>>>>> 9711cb8 (working with Material UI)


export type FilterValueType = 'all' | 'completed' | 'active'; // или 

type todoLists = {
  id: string,
  title: string,
  filter: FilterValueType,
}

type AllTasksObjType = {
  [ key: string ]: Array<TaskType>
}



function App() {


  const removeTask  = ( id: string, todoListId: string ) => {
    const allTasks = allTasksObj[ todoListId ]

    const filteredTasks = allTasks.filter( e  => id !== e.id )

    allTasksObj[ todoListId ] = filteredTasks

    setAllTasksObj( { ...allTasksObj } )
  }

  const addTask = ( title: string, todoListId: string ) => {

    // созаем новую task
    const newTask = { id: uuidv1(), title, isDone: false }
    // находим массив task по id todoList
    const allTasks = allTasksObj[todoListId]
    // добавляем task в массив
    const newArrTask = [ ...allTasks, newTask ]

    allTasksObj[todoListId] = newArrTask

    setAllTasksObj( { ...allTasksObj,  } )
  }

  const changeStatusTask = ( idTask: string, isDone: boolean, idTodoList: string ) => {
    
    const arrTasks = allTasksObj[ idTodoList ]

    let changeTask = arrTasks.find( e => e.id === idTask )

    if(changeTask) {
      changeTask.isDone = isDone

      allTasksObj[idTodoList] = arrTasks

      setAllTasksObj( { ...allTasksObj } )
    }

  }

  const changeTitleTask = ( newTitle: string, idTask: string, idTodoList: string ) => {

    const findChangeTask = allTasksObj[idTodoList].find( el => el.id === idTask )

    if(findChangeTask) {

      findChangeTask.title = newTitle
  
      setAllTasksObj(
        {
          ...allTasksObj,
          [ idTodoList ]: [ ...allTasksObj[ idTodoList ] ]
        }
      )
    }


  }

  // todoLists!
  const todoListsID_1 = uuidv1()
  const todoListsID_2 = uuidv1()


  const [ todoLists, setTodoLists] = useState<Array<todoLists>>( 
    [ 
      { id: todoListsID_1, title: "What to learn" , filter: "all" },
      { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
    ] 
  )

  // ассщциативный массив
  const [ allTasksObj, setAllTasksObj ] = useState<AllTasksObjType> ( {
    [ todoListsID_1 ]: [
      { id: uuidv1(), title: "CSS" , isDone: true },
      { id: uuidv1(), title: "HTML" , isDone: true },
      { id: uuidv1(), title: "React" , isDone: true },
      { id: uuidv1(), title: "JS" , isDone: false },
    ],

    [ todoListsID_2 ]: [
      { id: uuidv1(), title: "Book" , isDone: true },
      { id: uuidv1(), title: "Milk" , isDone: true },
    ]


  } )


  
  const removeTodoList = (ID: string) => {
    
    const newTodoLists = todoLists.filter(e => e.id !== ID)
    
    setTodoLists( newTodoLists )
    
    // удалить данные о задачах если сам лист удален
    delete allTasksObj[ID]
    setAllTasksObj( { ...allTasksObj } )
    
  }
  
  const addTodoList = ( title: string ) => {
    
    const newTodoList: todoLists = {
      id: uuidv1(),
      title,
      filter: 'all',
    }
    
    setTodoLists( [ newTodoList, ...todoLists ] )
    
    setAllTasksObj(
      { ...allTasksObj,
        [ newTodoList.id ] : [ { id: uuidv1(), title, isDone: false } ]
      }  
      )
      
    }
    
  const changeFilter = (value: FilterValueType, ID: string) => {

    let todoListFilter = todoLists.find(e => e.id === ID)

    if (todoListFilter) {
      todoListFilter.filter = value
      setTodoLists([...todoLists])
    }

  }

  const changeTodoListTitle = (title: string, idTodoList: string) => {

    const changeTodoList = todoLists.find(el => el.id === idTodoList)

    if (changeTodoList) {

      changeTodoList.title = title

      setTodoLists([ ...todoLists ])
    }

  }

<<<<<<< HEAD



  return (
    <div className='App'>
      <AddItemForm addItem = { addTodoList }  />
      { 
        todoLists.map( ( el ) => { 

          let tasksForTodoList = allTasksObj[ el.id ]

          if (el.filter === "completed") {
            tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true)
          }
          if (el.filter === "active") {
            tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false)
          }  

          return <TodoList
            key={ el.id }

            idTodoList = { el.id }

            removeTodoList = { removeTodoList }
            changeTodoListTitle = { changeTodoListTitle }
            
            changeStatusTask={changeStatusTask}
            changeFilter={changeFilter}
            changeTitleTask = { changeTitleTask }
            
            removeTask={removeTask}
            addNewTask={addTask}

            title={ el.title }
            filterActiveBtn={el.filter}

            tasks={tasksForTodoList}
          />
        } )
      }

    </div>
  );
}

=======
  return (
    <>
      <div><SearchAppBar /></div>
      <Container fixed>
        <div className='App'>
          <Grid container style={ { padding: "20px" } }>
            <AddItemForm addItem={addTodoList} />
          </Grid>  
          <Grid container spacing={10}>
            {
              todoLists.map((el) => {

                let tasksForTodoList = allTasksObj[el.id]

                if (el.filter === "completed") {
                  tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true)
                }
                if (el.filter === "active") {
                  tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false)
                }

                return <Grid item><Paper style={ { padding: "10px" } }><TodoList
                  key={el.id}

                  idTodoList={el.id}

                  removeTodoList={removeTodoList}
                  changeTodoListTitle={changeTodoListTitle}

                  changeStatusTask={changeStatusTask}
                  changeFilter={changeFilter}
                  changeTitleTask={changeTitleTask}

                  removeTask={removeTask}
                  addNewTask={addTask}

                  title={el.title}
                  filterActiveBtn={el.filter}

                  tasks={tasksForTodoList}
                /></Paper></Grid>
              })
            }
          </Grid>
        </div>
      </Container>
    </>
  );
}


>>>>>>> 9711cb8 (working with Material UI)
export default App;