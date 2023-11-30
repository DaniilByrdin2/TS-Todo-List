import {
    TodoListReducer,

    CreatorActionRemoveTodoList,
    CreatorActionAddTodoList,
    CreatorActionChangeTitle,
    CreatorActionChangeFilter,

} from './todo-list-reducer' 

import { 
    todoListsID_1,
    todoListsID_2,

    StateType,

} from "./todo-list-reducer";




test( "Todo List reducer remove todo list", () => {

    const startState: StateType  = [ 
        { id: todoListsID_1, title: "What to learn" , filter: "all" },
        { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
    ]

    const endState = TodoListReducer( startState, CreatorActionRemoveTodoList( todoListsID_1 ) )

    expect( endState.length ).toBe( 1 )
    expect( endState[0].id ).toBe( todoListsID_2 )
    
} )

test( "Correct todoList should be added", () => {

    let newTodoListTitle = "New TodoList"

    const startState: StateType  = [ 
        { id: todoListsID_1, title: "What to learn" , filter: "all" },
        { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
    ]

    const endState = TodoListReducer( startState, CreatorActionAddTodoList( newTodoListTitle ) )

    expect( endState.length ).toBe( 3 )
    expect( endState[0].title ).toBe( newTodoListTitle )
    expect( endState[0].filter ).toBe( "all" )
    
} )

test( "Correct todoList should change its title", () => {

    const startState: StateType  = [ 
        { id: todoListsID_1, title: "What to learn" , filter: "all" },
        { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
    ]

    const NewTittle = "Change NewTittle" 

    const endState = TodoListReducer( startState, CreatorActionChangeTitle( todoListsID_2,  NewTittle ) )

    expect( endState[0].title ).toBe( "What to learn" )
    expect( endState[1].title ).toBe( NewTittle )
    
} )

test( "Todo List reducer change filter todo list", () => {

    const startState: StateType  = [ 
        { id: todoListsID_1, title: "What to learn" , filter: "all" },
        { id: todoListsID_2, title: "What to buy" , filter: "all" }, 
    ]

    const newFilterCom = "completed"

    const endState1 = TodoListReducer( startState, CreatorActionChangeFilter( todoListsID_1, newFilterCom ) )

    expect( endState1[0].filter ).toBe( newFilterCom )
    expect( endState1[1].filter ).toBe( 'all' )
    
} )



