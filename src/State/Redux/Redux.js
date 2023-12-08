import { createStore, combineReducers , applyMiddleware, compose } from "redux";

import { TodoListReducer  } from '../TodoListReducer/todo-list-reducer'
import { TodoListTaskReducer } from '../TaskTodoListReducer/todo-list-task-reducer'
import { LoginReducer } from '../LoginReduser/LoginReducer'

import {  thunk  } from 'redux-thunk';

import { reducer as formReducer } from 'redux-form'

 

const Reduceers = combineReducers ( {
    TodoList: TodoListReducer,
    TodoListTask: TodoListTaskReducer,
    LoginData: LoginReducer,
    FormLogin: formReducer,
} )

export const store = createStore( 
    Reduceers, 
    compose( 
    applyMiddleware( thunk ))
)


