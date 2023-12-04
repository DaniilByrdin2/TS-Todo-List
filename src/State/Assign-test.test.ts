import { TodoListTaskReducer } from './todo-list-task-reducer'
import { TodoListReducer } from './todo-list-reducer'

import {AllTasksObjType} from './todo-list-task-reducer'
import {TypeStateTodoList} from './todo-list-reducer'

import { AddTodoList_AC } from './todo-list-reducer'




test( "ids should be equals", () => {

    const StartTasksState: AllTasksObjType = {}
    const startTodoListsState: TypeStateTodoList = []

    const action = AddTodoList_AC( "New Todo List" )
    

    const endTodoListState = TodoListReducer( startTodoListsState, action )
    
    const endTasksState = TodoListTaskReducer( StartTasksState, action )

    const keys = Object.keys( endTasksState )
    const idFromTasks = keys[0]
    const idFromTodoList = endTodoListState[0].id

    expect( idFromTasks ).toBe( action.idTodoList )
    expect( idFromTodoList ).toBe( action.idTodoList )
} )

