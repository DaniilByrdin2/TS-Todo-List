import { createStore, combineReducers , applyMiddleware, compose } from "redux";

import { TodoListReducer  } from '../TodoListReducer/todo-list-reducer'
import { TodoListTaskReducer } from '../TaskTodoListReducer/todo-list-task-reducer'

import {  thunk  } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

 

const Reduceers = combineReducers ( {
    TodoList: TodoListReducer,
    TodoListTask: TodoListTaskReducer
} )

export const State = createStore( 
    Reduceers, 
    compose( 
    applyMiddleware( thunk ))
)


