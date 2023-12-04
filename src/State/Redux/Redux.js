import { createStore, combineReducers } from "redux";

import { TodoListReducer } from '../todo-list-reducer'
import { TodoListTaskReducer } from '../todo-list-task-reducer'




const Reduceers = combineReducers ( {
    TodoList: TodoListReducer,
    TodoListTask: TodoListTaskReducer
} )

export const State = createStore( Reduceers )


