import React, { ChangeEvent } from "react"

import { AddItemForm } from './AddItemForm'
import { EditabelSpan } from './EditabelSpan'

import './App.css'

// types
import { FilterValueType } from './App'


export type TaskType = {
  id: string,
  title: string,
  isDone: boolean,
}

type PropsType = {
  idTodoList: string,
  title: string,
  tasks: Array<TaskType>,
  filterActiveBtn: FilterValueType,
  
  removeTodoList: (idTodoList: string) => void
  changeTodoListTitle: ( title: string, idTodoList: string ) => void
  changeFilter: (value: FilterValueType, todoListId: string) => void //void = ничего не врозвращает

  addNewTask: (value: string, idTodoList: string) => void
  removeTask: (value: string, idTodoList: string) => void,
  changeStatusTask: (id: string, isDone: boolean, idTodoList: string) => void,
  changeTitleTask: ( newTitle: string, idTask: string, idTodoList: string ) => void
  // tasks: TaskType[] 
}

export function TodoList (props: PropsType) {

  const onAllClickHandler = () => props.changeFilter("all", props.idTodoList)
  const onActiveClickHandler = () => props.changeFilter("active", props.idTodoList)
  const onCompletedClickHandler = () => props.changeFilter("completed", props.idTodoList)

  const removeAllTodoList = () => {
    props.removeTodoList(props.idTodoList)
  }

  const changeTodoListTitle = ( newTitle: string ) => {
    props.changeTodoListTitle( newTitle, props.idTodoList )
  }

  const addTask = (title: string) => {
    props.addNewTask(title, props.idTodoList)
  }

  
  return (
    <div>
      <h1>
      <EditabelSpan 
              onChangeTaskTitle = { changeTodoListTitle } 
              title = { props.title }  
      />

        <button onClick={removeAllTodoList}>x</button>
      </h1>

      <AddItemForm addItem={addTask} />

      <ul>
        {props.tasks.map(({ id, title, isDone }) => {
          const onRemoveHandler = () => props.removeTask(id, props.idTodoList)

          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatusTask(id, e.currentTarget.checked, props.idTodoList)
          }

          const onChangeTaskTitle = ( newTitle: string ) => {
            props.changeTitleTask( newTitle, id , props.idTodoList )
          }

          return (
            <li key={id} className={!isDone ? "is-done" : ""}>

              <input type="checkbox" checked={isDone}
                onChange={onChangeHandler}
              />

              <EditabelSpan 
                    onChangeTaskTitle = { onChangeTaskTitle } 
                    title = { title }  
              />

              <button onClick={onRemoveHandler}>x</button>

            </li>
          )
        })}
      </ul>

      <div>
        <button className={props.filterActiveBtn === 'all' ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>
        <button className={props.filterActiveBtn === 'active' ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>
        <button className={props.filterActiveBtn === 'completed' ? "active-filter" : ""} onClick={onCompletedClickHandler}>Completed</button>
      </div>

    </div>
  )
}

