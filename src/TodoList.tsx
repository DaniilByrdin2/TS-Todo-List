import React, { ChangeEvent, KeyboardEvent, useState } from "react"

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
    removeTodoList: ( idTodoList: string ) =>  void 
    changeStatusTask: ( id: string, isDone: boolean, idTodoList: string ) => void ,
    addNewTask: ( value: string, idTodoList: string ) => void
    removeTask: ( value: string, idTodoList: string ) => void,
    changeFilter: ( value: FilterValueType, todoListId: string ) => void //void = ничего не врозвращает
    // tasks: TaskType[] 
}

// type changeTextTask = string
//<changeTextTask>

export function TodoList( props: PropsType ) {

  const [ textTask, setTextTask ] = useState('')
  const [ error, setError ] = useState<string | null>( null )

  const onNewTitleChangeHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
    setTextTask( e.currentTarget.value )
  }

  const onKeyPressHandler = ( e: KeyboardEvent<HTMLInputElement> ) => {
    setError( null )

    if ( e.charCode === 13) { 
      addTask() 
    }
  }

  const addTask = () => {
    // trim() - обрезает пробелы по краям с 2-ух сторон
    if (textTask.trim() === '') {
      setError( 'Field is required' )
      return
    }
    props.addNewTask( textTask, props.idTodoList )
    setTextTask('')
  }

  const onAllClickHandler = () => props.changeFilter("all", props.idTodoList) 
  const onActiveClickHandler = () => props.changeFilter("active", props.idTodoList) 
  const onCompletedClickHandler = () => props.changeFilter("completed", props.idTodoList) 
  
  const removeAllTodoList = () => {
    props.removeTodoList( props.idTodoList )
  }


    return (
      <div>
        <h1>
          { props.title }
          <button onClick={ removeAllTodoList }>x</button>
        </h1>
  
        <div>
          <input type="text" 
            value={ textTask } 
            onKeyPress = { onKeyPressHandler  } 
            onChange={ onNewTitleChangeHandler }
            className = { error ? "error" : "" } 
          />

          <button onClick={ addTask }>+</button>

          { error && <div className="error-message">{ error }</div> }

        </div>
  
            <ul>
                {props.tasks.map(( { id, title, isDone } ) => {
                    const onRemoveHandler = () => props.removeTask( id, props.idTodoList )

                    const onChangeHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
                      props.changeStatusTask( id, e.currentTarget.checked, props.idTodoList )
                    }

                    return (
                        <li key={ id } className={ !isDone ? "is-done" : "" }>

                            <input type="checkbox" checked={ isDone } 
                                   onChange = { onChangeHandler }
                            />

                            <span>{ title }</span>

                            <button onClick={ onRemoveHandler }>x</button>

                        </li>
                    )
                })}
            </ul>

        <div>
          <button className = { props.filterActiveBtn === 'all' ? "active-filter" : "" } onClick={ onAllClickHandler }>All</button>
          <button className = { props.filterActiveBtn === 'active' ? "active-filter" : "" } onClick={ onActiveClickHandler }>Active</button>
          <button className = { props.filterActiveBtn === 'completed' ? "active-filter" : "" } onClick={ onCompletedClickHandler }>Completed</button>
        </div>
  
      </div>
    )
  }