import { createStore, combineReducers } from "redux";

import { TodoListReducer } from '../TodoListReducer/todo-list-reducer'
import { TodoListTaskReducer } from '../TaskTodoListReducer/todo-list-task-reducer'




const Reduceers = combineReducers ( {
    TodoList: TodoListReducer,
    TodoListTask: TodoListTaskReducer
} )

export const State = createStore( Reduceers )


