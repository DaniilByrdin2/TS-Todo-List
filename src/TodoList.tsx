import React from "react"


// types
import { FilterValueType } from './App'


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: Function,
    changeFilter: ( value: FilterValueType ) => void //void = ничего не врозвращает
    // tasks: TaskType[] 
}


export function TodoList( props: PropsType ) {
    return (
      <div>
        <h1>{ props.title } </h1>
  
        <div>
          <input type="text" />
          <button></button>
        </div>
  
            <ul>
                {props.tasks.map(( { id, title, isDone } ) => {
                    return (
                        <li key={ id }>

                            <input type="checkbox" checked={ isDone } />
                            <span>{ title }</span>

                            <button onClick={ ( ) => { 

                                props.removeTask( id )

                            } }>x</button>
                        </li>
                    )
                })}
            </ul>

        <div>
          <button onClick={ () => { props.changeFilter("all") } } >All</button>
          <button onClick={ () => { props.changeFilter("active") } } >Active</button>
          <button onClick={ () => { props.changeFilter("completed") } } >Completed</button>
        </div>
  
      </div>
    )
  }