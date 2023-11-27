import React from 'react';
import { useState } from 'react';

import './App.css';

import { TodoList } from './TodoList'

import { v1 as uuidv1 } from 'uuid';


export type FilterValueType = 'all' | 'completed' | 'active'; // или 

type todoLists = {
  id: string,
  title: string,
  filter: FilterValueType,
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





  // todoLists!

  const todoListsID_1 = uuidv1()
  const todoListsID_2 = uuidv1()

  const [ todoLists, setTodoLists] = useState<Array<todoLists>>( 
    [ 
      { id: todoListsID_1, title: "What to learn" , filter: "active" },
      { id: todoListsID_2, title: "What to buy" , filter: "completed" }, 
    ] 
  )


  // ассщциативный массив

  const [ allTasksObj, setAllTasksObj ] = useState( {
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

  const changeFilter = ( value: FilterValueType, ID: string ) => {

    let todoListFilter = todoLists.find( e => e.id === ID )

    if (todoListFilter) {
      todoListFilter.filter = value
      setTodoLists( [ ...todoLists ] )
    }
    
  }

  const removeTodoList = (ID: string) => {

    const newTodoLists = todoLists.filter(e => e.id !== ID)

    setTodoLists( newTodoLists )

    // удалить данные о задачах если сам лист удален
    delete allTasksObj[ID]
    setAllTasksObj( { ...allTasksObj } )

  }

  return (
    <div>

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

            changeStatusTask={changeStatusTask}
            changeFilter={changeFilter}
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

export default App;




