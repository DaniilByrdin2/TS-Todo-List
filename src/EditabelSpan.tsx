import React, { ChangeEvent, KeyboardEvent, useState } from "react"

import { TextField } from "@mui/material"


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
        if (title !== "") {
            setEditMode( false )
            props.onChangeTaskTitle( title )
        }
    }

    const onChangeTitleHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
        setTitle( e.currentTarget.value )
    }

    const onKeyPressEnter = ( e: KeyboardEvent<HTMLInputElement>  ) => {
        if (e.charCode === 13 && title !== "") {
            props.onChangeTaskTitle( title )
            setEditMode( false )
        }
    }

    return (
        editMode ? 
        <TextField 
               variant={"filled"}
               value={ title } 
               onChange={ onChangeTitleHandler } 
               onBlur={ activateViewMode }
               onKeyPress = { onKeyPressEnter } 
               autoFocus  
        />
        : <span onClick={ activateEditMode }>{ title }</span>
    )
}


