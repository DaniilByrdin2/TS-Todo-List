import React, { ChangeEvent, KeyboardEvent, useState } from "react"


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
        setEditMode( false )
        props.onChangeTaskTitle( title )

    }

    const onChangeTitleHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
        setTitle( e.currentTarget.value )
    }

    const onKeyPressEnter = ( e: KeyboardEvent<HTMLInputElement>  ) => {
        if (e.charCode === 13) {
            props.onChangeTaskTitle( title )
            setEditMode( false )
        }
    }

    return (
        editMode ? 
        <input value={ title } 
               onChange={ onChangeTitleHandler } 
               onBlur={ activateViewMode }
               onKeyPress = { onKeyPressEnter } 
               autoFocus 
               type="text" 
        />
        : <span onDoubleClick={ activateEditMode }>{ title }</span>
    )
}


