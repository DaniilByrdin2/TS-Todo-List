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
    title: string,
    tasks: Array<TaskType>,
    filterActiveBtn: FilterValueType,
    changeStatusTask: ( id: string, isDone: boolean  ) => void ,
    addNewTask: ( value: string ) => void
    removeTask: ( value: string ) => void,
    changeFilter: ( value: FilterValueType ) => void //void = ничего не врозвращает
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
    props.addNewTask( textTask )
    setTextTask('')
  }

  const onAllClickHandler = () => props.changeFilter("all") 
  const onActiveClickHandler = () => props.changeFilter("active") 
  const onCompletedClickHandler = () => props.changeFilter("completed") 
  


    return (
      <div>
        <h1>{ props.title } </h1>
  
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
                    const onRemoveHandler = () => props.removeTask( id )

                    const onChangeHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
                      props.changeStatusTask( id, e.currentTarget.checked )
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