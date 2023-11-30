import { v1 as uuidv1 } from 'uuid';



const REMOVE_TODO_LIST = "REMOVE_TODO_LIST"
const ADD_TODO_LIST = "ADD_TODO_LIST"
const CHANGE_FILTER_TODO_LIST = "CHANGE_FILTER_TODO_LIST"
const CNAGE_TODO_LIST_TITLE = "CNAGE_TODO_LIST_TITLE" 


export const todoListsID_1 = uuidv1()
export const todoListsID_2 = uuidv1()

import { FilterValueType } from '../App'

type ActionRemoveTodoList = {
    type: "REMOVE_TODO_LIST",
    idTodoList: string,
}

type ActionAddTodoList = {
    type: "ADD_TODO_LIST",
    newTitle: string
}

type ActionChangeTitle = {
    type: "CNAGE_TODO_LIST_TITLE",
    idTodoList: string,
    newTitle: string
}

type ActionChangeFilter = {
    type: "CHANGE_FILTER_TODO_LIST",
    idTodoList: string,
    newFilter: FilterValueType
}

// union type
type ActionsTypes = ActionRemoveTodoList | ActionAddTodoList | ActionChangeTitle | ActionChangeFilter

type TodoList = {
    id: string,
    title: string,
    filter: string
}  

export type StateType = Array<TodoList>


const InitialState: StateType = [ 
    { id: todoListsID_1, title: "What to learn" , filter: "all" },
    { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
  ] 


export const TodoListReducer = ( state: StateType = InitialState, action: ActionsTypes): StateType => {

    switch (action.type) {
        
        case REMOVE_TODO_LIST:

            return [
                ...state.filter(e => e.id !== action.idTodoList)
            ]

        case ADD_TODO_LIST:      
            return [ {   id: uuidv1(), title: action.newTitle, filter: "all" }, ...state ]


        case CNAGE_TODO_LIST_TITLE:

            const copyState = [...state]
            
            const todoList = copyState.find(e => e.id === action.idTodoList)

            if (todoList) {
                todoList.title = action.newTitle
            } 
            return [
                ...copyState,
            ]
        
        
        case CHANGE_FILTER_TODO_LIST:

            let copySt = [...state]

            let todoListFilter = copySt.find( e => e.id === action.idTodoList )

            if (todoListFilter) {
                todoListFilter.filter = action.newFilter
            }

            return [ ...copySt ]

        default:
            throw new Error("Not action type");
    }

}



export const CreatorActionRemoveTodoList = ( idTodoList: string ): ActionsTypes => {
    return { type: REMOVE_TODO_LIST , idTodoList }
}

export const CreatorActionAddTodoList = ( newTitle: string ): ActionsTypes => {
    return { type: ADD_TODO_LIST , newTitle  }
}

export const CreatorActionChangeTitle = ( idTodoList: string , newTitle: string ): ActionsTypes => {
    return { type: CNAGE_TODO_LIST_TITLE , idTodoList: idTodoList,  newTitle }
}

export const CreatorActionChangeFilter = ( idTodoList: string, newFilter: FilterValueType): ActionsTypes => {
    return { type: CHANGE_FILTER_TODO_LIST , idTodoList, newFilter  }
}