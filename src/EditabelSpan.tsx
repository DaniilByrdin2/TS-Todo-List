import React, { ChangeEvent, KeyboardEvent, useState } from "react"

<<<<<<< HEAD
=======
import { TextField } from "@mui/material"

>>>>>>> 9711cb8 (working with Material UI)

type EditabelSpanType = {
    title: string,
    onChangeTaskTitle: ( newTitle: string ) => void
}

export const EditabelSpan = (props: EditabelSpanType) => {

    const [ editMode, setEditMode ] = useState( false )
    const [ title, setTitle ] = useState( props.title )

    const activateEditMode = () => {
        setEditMode( true )
        setTitle( props.title )
    }

    const activateViewMode = () => {
<<<<<<< HEAD
        setEditMode( false )
        props.onChangeTaskTitle( title )
=======
        if (title !== "") {
            setEditMode( false )
            props.onChangeTaskTitle( title )
        }
>>>>>>> 9711cb8 (working with Material UI)

    }

    const onChangeTitleHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
        setTitle( e.currentTarget.value )
    }

    const onKeyPressEnter = ( e: KeyboardEvent<HTMLInputElement>  ) => {
<<<<<<< HEAD
        if (e.charCode === 13) {
=======
        if (e.charCode === 13 && title !== "") {
>>>>>>> 9711cb8 (working with Material UI)
            props.onChangeTaskTitle( title )
            setEditMode( false )
        }
    }

    return (
        editMode ? 
<<<<<<< HEAD
        <input value={ title } 
               onChange={ onChangeTitleHandler } 
               onBlur={ activateViewMode }
               onKeyPress = { onKeyPressEnter } 
               autoFocus 
               type="text" 
        />
        : <span onDoubleClick={ activateEditMode }>{ title }</span>
=======
        <TextField 
               variant={"filled"}
               value={ title } 
               onChange={ onChangeTitleHandler } 
               onBlur={ activateViewMode }
               onKeyPress = { onKeyPressEnter } 
               autoFocus  
        />
        : <span onClick={ activateEditMode }>{ title }</span>
>>>>>>> 9711cb8 (working with Material UI)
    )
}


