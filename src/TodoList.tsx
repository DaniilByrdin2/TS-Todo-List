import React, { ChangeEvent, KeyboardEvent, useState } from "react"


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
    addNewTask: ( value: string ) => void
    removeTask: ( value: string ) => void,
    changeFilter: ( value: FilterValueType ) => void //void = ничего не врозвращает
    // tasks: TaskType[] 
}

type changeTextTask = string


export function TodoList( props: PropsType ) {

  const [ textTask, setTextTask ] = useState<changeTextTask>('')

  const onNewTitleChangeHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
    setTextTask( e.currentTarget.value )
  }

  const onKeyPressHandler = ( e: KeyboardEvent<HTMLInputElement> ) => {
    if ( e.charCode === 13) { addTask() }
  }

  const addTask = () => {
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
          />
          <button onClick={ addTask }>+</button>

        </div>
  
            <ul>
                {props.tasks.map(( { id, title, isDone } ) => {
                    const onRemoveHandler = () => props.removeTask( id )

                    return (
                        <li key={ id }>

                            <input type="checkbox" checked={ isDone } />
                            <span>{ title }</span>

                            <button onClick={ onRemoveHandler }>x</button>

                        </li>
                    )
                })}
            </ul>

        <div>
          <button onClick={ onAllClickHandler }>All</button>
          <button onClick={ onActiveClickHandler }>Active</button>
          <button onClick={ onCompletedClickHandler }>Completed</button>
        </div>
  
      </div>
    )
  }