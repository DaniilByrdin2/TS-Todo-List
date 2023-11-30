import { v1 as uuidv1 } from 'uuid';



type ActionType = {
    type: string,
    newTitle: string,
    idTask: string,
    idTodoList: string
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type StateType = {
    [ key: string ]: Array<TaskType>
}

const todoListsID_1 = uuidv1()
const todoListsID_2 = uuidv1()

const InitialState =  {
    [ todoListsID_1 ]: [
      { id: uuidv1(), title: "CSS" , isDone: true },
      { id: uuidv1(), title: "HTML" , isDone: true },
      { id: uuidv1(), title: "React" , isDone: true },
      { id: uuidv1(), title: "JS" , isDone: false },
    ],

    [ todoListsID_2 ]: [
      { id: uuidv1(), title: "Book" , isDone: true },
      { id: uuidv1(), title: "Milk" , isDone: true },
    ]


  }

export const TodoListTaskReducer = ( state: StateType, action: ActionType ): StateType => {

    switch (action.type) {
        
            

        default:
            throw new Error( "Not action type" );
    }

}


  // const removeTask  = ( id: string, todoListId: string ) => {
  //   const allTasks = allTasksObj[ todoListId ]

  //   const filteredTasks = allTasks.filter( e  => id !== e.id )

  //   allTasksObj[ todoListId ] = filteredTasks

  //   setAllTasksObj( { ...allTasksObj } )
  // }

  // const addTask = ( title: string, todoListId: string ) => {

  //   // созаем новую task
  //   const newTask = { id: uuidv1(), title, isDone: false }
  //   // находим массив task по id todoList
  //   const allTasks = allTasksObj[todoListId]
  //   // добавляем task в массив
  //   const newArrTask = [ ...allTasks, newTask ]

  //   allTasksObj[todoListId] = newArrTask

  //   setAllTasksObj( { ...allTasksObj,  } )
  // }

  // const changeStatusTask = ( idTask: string, isDone: boolean, idTodoList: string ) => {
    
  //   const arrTasks = allTasksObj[ idTodoList ]

  //   let changeTask = arrTasks.find( e => e.id === idTask )

  //   if(changeTask) {
  //     changeTask.isDone = isDone

  //     allTasksObj[idTodoList] = arrTasks

  //     setAllTasksObj( { ...allTasksObj } )
  //   }

  // }

  // const changeTitleTask = ( newTitle: string, idTask: string, idTodoList: string ) => {

  //   const findChangeTask = allTasksObj[idTodoList].find( el => el.id === idTask )

  //   if(findChangeTask) {

  //     findChangeTask.title = newTitle
  
  //     setAllTasksObj(
  //       {
  //         ...allTasksObj,
  //         [ idTodoList ]: [ ...allTasksObj[ idTodoList ] ]
  //       }
  //     )
  //   }


  // }


