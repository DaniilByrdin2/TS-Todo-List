import React, { ChangeEvent, KeyboardEvent} from "react"

import { useState } from "react"

import { IconButton, TextField } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { thunkType } from '../../State/TodoListReducer/todo-list-reducer'


interface ThunkDispatch {
    (action: any): void;
}
interface ThunkArg {
    dispatch: ThunkDispatch;
}
// type ThunkFunction = (arg: ThunkArg) => void | Promise<void>;

type AddItemFormType = {
    addItem: (title: string) => void,
    myThunkTest: ( newTitle: string ) => thunkType,
}
  
export const AddItemForm = (props: AddItemFormType) => {

    const [textTask, setTextTask] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        // trim() - обрезает пробелы по краям с 2-ух сторон
        if (textTask.trim() === '') {
            setError('Field is required')
            return
        }
        props.addItem( textTask )
        setTextTask('')


        // props.myThunk( "123" )
    }

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTextTask(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)

        if (e.charCode === 13) {
            addTask()
        }
    }



    return (
        <div className="AddItemForm">
            <TextField
                variant={"outlined"}
                label={"Type value"}
                value={textTask}
                onKeyPress={onKeyPressHandler}
                onChange={onNewTitleChangeHandler}
                error={!!error}
                helperText={error}
            />
            <IconButton onClick={addTask} color={"primary"}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    )
}