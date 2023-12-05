import { v1 as uuidv1 } from 'uuid';

import  { todoListsID_1 }  from '../TodoListReducer/todo-list-reducer'
import { todoListsID_2 }from '../TodoListReducer/todo-list-reducer'

const __TODO_LIST_TASK__REMOVE_TASK = "__TODO_LIST_TASK__REMOVE_TASK"
const __TODO_LIST_TASK__ADD_TASK = "__TODO_LIST_TASK__ADD_TASK"
const __TODO_LIST_TASK__CHANGE_STATUS_TASK = "__TODO_LIST_TASK__CHANGE_STATUS_TASK"
const __TODO_LIST_TASK__CHANGE_TITLE_TASK = "__TODO_LIST_TASK__CHANGE_TITLE_TASK"
const __TODO_LIST_TASK_ADD_TASK_EMPTY = "__ADD_TODO_LIST"



type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type AllTasksObjType = {
  [ key: string ]: Array<TaskType>
}


// const todoListsID_1 = uuidv1()
// const todoListsID_2 = uuidv1()

const InitialState =  {
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

  }


export type TypeRemoveTask_AC = {
  type: "__TODO_LIST_TASK__REMOVE_TASK",
  idTask: string,
  todoListId: string,
}  

export type TypeAddTask_AC = {
  type: "__TODO_LIST_TASK__ADD_TASK",
  newTitle: string,
  todoListId: string
}

export type TypeChangeStatusTask_AC = {
  type: "__TODO_LIST_TASK__CHANGE_STATUS_TASK",
  idTask: string,
  isDone: boolean,
  todoListId: string
}

export type TypeChangeTitleTask_AC = {
  type: "__TODO_LIST_TASK__CHANGE_TITLE_TASK"
  newTitle: string,
  idTask: string,
  todoListId: string
}

export type TypeAddTodoList_AC = {
  type: "__ADD_TODO_LIST",
  newTitle: string,
  idTodoList: string   
}



export type ActonsTypeTasks = TypeAddTodoList_AC | TypeChangeTitleTask_AC | TypeChangeStatusTask_AC | TypeAddTask_AC | TypeRemoveTask_AC

export const TodoListTaskReducer = ( state: AllTasksObjType = InitialState, action: ActonsTypeTasks ): AllTasksObjType => {

    switch (action.type) {
      
        
      case __TODO_LIST_TASK__REMOVE_TASK:

        const arrTasks = [...state[action.todoListId]]
        const arrFilter = arrTasks.filter(el => el.id !== action.idTask)

        return {
          ...state,
          [action.todoListId]: arrFilter
        }

      case __TODO_LIST_TASK__ADD_TASK:

        const newTask = { id: uuidv1(), title: action.newTitle, isDone: false }
        const arrTask = [ ...state[ action.todoListId ] ]

        return {
          ...state,
          [ action.todoListId ]: [ ...arrTask, newTask ]
        }

      case __TODO_LIST_TASK__CHANGE_STATUS_TASK:

        const newArrTask = [ ...state[ action.todoListId ] ]

        const objTask = newArrTask.find( e => e.id === action.idTask )
        
        if (objTask) {
          objTask.isDone = action.isDone
        }
        
        return { 
          ...state,
          [action.todoListId ]: [ ...newArrTask]
        }

      case __TODO_LIST_TASK__CHANGE_TITLE_TASK:
        
        const arrTaskChangeTitle = [ ...state[ action.todoListId ] ]
        const taskSearch = arrTaskChangeTitle.find( el => el.id === action.idTask )

        if (taskSearch) {
          taskSearch.title = action.newTitle
        }
      
        return {
          ...state,
          [action.todoListId]: arrTaskChangeTitle
        }

      case __TODO_LIST_TASK_ADD_TASK_EMPTY: 
        const stateCopy = { ...state }

        stateCopy[ action.idTodoList ] = [] 
        // console.log('123');
        
        
        return stateCopy  

      
        


      default:
          // throw new Error( "Not action type    123213" );
          return state
    }


}

export const RemoveTask_AC = ( idTask: string, todoListId: string ): TypeRemoveTask_AC => {
  return { type: __TODO_LIST_TASK__REMOVE_TASK, idTask, todoListId }
}

export const AddTask_AC = ( newTitle: string, todoListId: string ): TypeAddTask_AC => {
  return { type: __TODO_LIST_TASK__ADD_TASK, newTitle, todoListId }
}

export const ChangeStatusTask_AC = ( idTask: string, isDone: boolean, todoListId: string ): TypeChangeStatusTask_AC => {
  return { type: __TODO_LIST_TASK__CHANGE_STATUS_TASK, idTask, isDone: isDone, todoListId}
}

export const ChangeTitleTask_AC = ( newTitle: string, idTask: string, todoListId: string ): TypeChangeTitleTask_AC => {
  return { type: __TODO_LIST_TASK__CHANGE_TITLE_TASK,  newTitle, idTask, todoListId}
}



