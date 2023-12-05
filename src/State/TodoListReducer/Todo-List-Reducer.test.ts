import {
    TodoListReducer,

    RemoveTodoList_AC,
    AddTodoList_AC,
    ChangeTitle_AC,
    ChangeFilter_AC,

} from './todo-list-reducer' 

import { v1 as uuidv1 } from 'uuid';

import { 

    TypeStateTodoList,

} from "./todo-list-reducer";

let todoListsID_1 = uuidv1()
let todoListsID_2 = uuidv1()

const startState: TypeStateTodoList  = [ 
    { id: todoListsID_1, title: "What to learn" , filter: "all" },
    { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
]



test( "Todo List reducer remove todo list", () => {

    const endState = TodoListReducer( startState, RemoveTodoList_AC( todoListsID_1 ) )

    expect( endState.length ).toBe( 1 )
    expect( endState[0].id ).toBe( todoListsID_2 )
    
} )

test( "Correct todoList should be added", () => {

    let newTodoListTitle = "New TodoList"

    
    const endState = TodoListReducer( startState, AddTodoList_AC( newTodoListTitle ) )

    expect( endState.length ).toBe( 3 )
    expect( endState[0].title ).toBe( "New TodoList" )
    expect( endState[0].filter ).toBe( "all" )
    
} )

test( "Correct todoList should change its title", () => {

    const NewTittle = "Change NewTittle" 

    const endState = TodoListReducer( startState, ChangeTitle_AC( todoListsID_2,  NewTittle ) )

    expect( endState[0].title ).toBe( "What to learn" )
    expect( endState[1].title ).toBe( NewTittle )
    
} )

test( "Todo List reducer change filter todo list", () => {

    const newFilterCom = "completed"

    const endState1 = TodoListReducer( startState, ChangeFilter_AC(  newFilterCom, todoListsID_1 ) )

    expect( endState1[0].filter ).toBe( newFilterCom )
    expect( endState1[1].filter ).toBe( 'all' )
    
} )




