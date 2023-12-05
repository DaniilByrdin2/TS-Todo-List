import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { v1 as uuidv1 } from 'uuid';


// import {ActionAddTodoListCopy} from './todo-list-task-reducer'

const REMOVE_TODO_LIST = "REMOVE_TODO_LIST"
const __ADD_TODO_LIST = "__ADD_TODO_LIST"
const CHANGE_FILTER_TODO_LIST = "CHANGE_FILTER_TODO_LIST"
const CNAGE_TODO_LIST_TITLE = "CNAGE_TODO_LIST_TITLE" 



export const todoListsID_1 = uuidv1()
export const todoListsID_2 = uuidv1()

export type FilterValueType = 'all' | 'completed' | 'active';

type TypeRemoveTodoList_AC = {
    type: "REMOVE_TODO_LIST",
    idTodoList: string,
}

type TypeAddTodoList_AC = {
    type: "__ADD_TODO_LIST",
    newTitle: string,
    idTodoList: string
}

type TypeChangeTitle_AC = {
    type: "CNAGE_TODO_LIST_TITLE",
    idTodoList: string,
    newTitle: string
}


type TypeChangeFilter_AC = {
    type: "CHANGE_FILTER_TODO_LIST",
    idTodoList: string,
    newFilter: FilterValueType,
}

// union type
export type ActionsTypes = TypeRemoveTodoList_AC | TypeAddTodoList_AC | TypeChangeTitle_AC | TypeChangeFilter_AC 









type TodoList = {
    id: string,
    title: string,
    filter: string
}  

export type TypeStateTodoList = Array<TodoList>


const InitialState: TypeStateTodoList = [ 
    { id: todoListsID_1, title: "What to learn" , filter: "all" },
    { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
  ] 


export const TodoListReducer = ( state: TypeStateTodoList = InitialState, action: ActionsTypes): TypeStateTodoList => {

    switch (action.type) {
        
        case REMOVE_TODO_LIST:

            return [
                ...state.filter(e => e.id !== action.idTodoList)
            ]

        case __ADD_TODO_LIST:
            const newTodoList = { id: action.idTodoList, title: action.newTitle, filter: "all" }    
        
            return [ 
                newTodoList, 
                ...state 
            ]


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
            // throw new Error("Not action type  1231231");
            return state
            
    }
    

}


export const RemoveTodoList_AC = ( idTodoList: string ): TypeRemoveTodoList_AC => {
    return { type: REMOVE_TODO_LIST , idTodoList }
}

export const AddTodoList_AC = ( newTitle: string ): TypeAddTodoList_AC  => {
    return { type: __ADD_TODO_LIST, newTitle, idTodoList: uuidv1() }
}


export const ChangeTitle_AC = ( idTodoList: string , newTitle: string ): TypeChangeTitle_AC => {
    return { type: CNAGE_TODO_LIST_TITLE , idTodoList,  newTitle }
}

export const ChangeFilter_AC = (  newFilter: FilterValueType, idTodoList: string ): TypeChangeFilter_AC => {
    return { type: CHANGE_FILTER_TODO_LIST , newFilter, idTodoList  }
}



// thank

// type getStateType = () => TypeStateTodoList
export type CurrentDispatchType = () => Dispatch<ActionsTypes>


export type thunkType = ThunkAction <Promise<void> , TypeStateTodoList, unknown, ActionsTypes >

export const MyThunk = ( newTitle: string ): thunkType => {

    return async ( dispatch, getState ) => { 

        console.log("123");

        let cpSt = getState()

        console.log( cpSt );
                
        dispatch( AddTodoList_AC( newTitle ) ) 
    }
}