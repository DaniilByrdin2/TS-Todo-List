import { TodoListTaskReducer } from './todo-list-task-reducer'

import {  RemoveTask_AC, 
          AddTask_AC,
          ChangeStatusTask_AC,
          ChangeTitleTask_AC,
} from './todo-list-task-reducer'

import { AddTodoList_AC } from '../TodoListReducer/todo-list-reducer'

import { v1 as uuidv1 } from 'uuid';



const todoListsID_1 = uuidv1()
const todoListsID_2 = uuidv1()

const startState =  {
    [ todoListsID_1 ]: [
      { id: '1', title: "CSS" , isDone: true },
      { id: '2', title: "HTML" , isDone: true },
      { id: '3', title: "React" , isDone: true },
      { id: '4', title: "JS" , isDone: false },
    ],

    [ todoListsID_2 ]: [
      { id: '1', title: "Book" , isDone: true },
      { id: '2', title: "Milk" , isDone: true },
    ]


}

test( "test correct shuold be deleted from correct array", () => {

    const action = RemoveTask_AC( '2', todoListsID_1 )


    const endState = TodoListTaskReducer( startState, action )

    expect( endState[ todoListsID_1 ].length ).toBe( 3 )
    expect( endState[ todoListsID_2 ].length ).toBe( 2 )
    expect( endState[ todoListsID_1 ].every( t => t.id !== '2' ) ).toBeTruthy()

    // expect( endState[ todoListsID_1 ][0].id ).toBe( '1' )
    // expect( endState[ todoListsID_1 ][1].id ).toBe( '3' )

} )


test( "test correct shuold be add from correct array", () => {

    const action = AddTask_AC( 'New Title', todoListsID_1 )

    const endState = TodoListTaskReducer( startState, action )

    expect( endState[ todoListsID_1 ].length ).toBe( 5 )
    expect( endState[ todoListsID_2 ].length ).toBe( 2 )

    expect( endState[ todoListsID_1 ][4].title ).toBe( 'New Title' )
    expect( endState[ todoListsID_1 ][4].isDone ).toBe( false )

    expect( endState[ todoListsID_1 ][4].id ).toBeDefined() // id было сгенерировано
} )


test( "test correct change status task", () => {

    const action = ChangeStatusTask_AC( "2", false , todoListsID_1 )

    const endState = TodoListTaskReducer( startState, action )

    expect( endState[ todoListsID_1 ][1].isDone ).toBe( false )
    expect( endState[ todoListsID_1 ][0].isDone ).toBe( true )

    expect( endState[ todoListsID_1 ].length ).toBe( 4 )
    expect( endState[ todoListsID_2 ].length ).toBe( 2 )

    expect( endState[ todoListsID_2 ][1].isDone ).toBe( true )

} )


test( "test correct change title task", () => {

    const action = ChangeTitleTask_AC( "New Title", "2" , todoListsID_1 )

    const endState = TodoListTaskReducer( startState, action )

    expect( endState[ todoListsID_1 ][1].title ).toBe( "New Title" )
    expect( endState[ todoListsID_1 ][0].title ).toBe( "CSS" )

    expect( endState[ todoListsID_2 ][1].title ).toBe( "Milk" )

    expect( endState[ todoListsID_1 ].length ).toBe( 4 )
    expect( endState[ todoListsID_2 ].length ).toBe( 2 )

} )


test( "new property with new array should be added when new todoList is added", () => {

    const action = AddTodoList_AC( "New Todo List" )

    const endState = TodoListTaskReducer( startState, action )


    const keys = Object.keys( endState )

    const newKey = keys.find( el => el != todoListsID_1 && el != todoListsID_2 )

    if ( !newKey ) {
        throw Error("not found keys")
    }

    expect( keys.length ).toBe( 3 )
    expect( endState[ newKey ]).toStrictEqual( [] )

} )