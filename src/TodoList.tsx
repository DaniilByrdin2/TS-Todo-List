import React from "react"


// function ( a: number , b: number ) {
//     return a + b
// }


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
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
          <li>
            <input type="checkbox" checked={ props.tasks[0].isDone } />
            <span>{ props.tasks[1].title }</span>
          </li>
          <li>
            <input type="checkbox" checked={ props.tasks[1].isDone } />
            <span>HTML</span>
          </li>
          <li>
            <input type="checkbox" checked={ props.tasks[2].isDone } />
            <span>JS</span>
          </li>
        </ul>
  
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
  
      </div>
    )
  }