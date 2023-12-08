import { IconButton, TextField } from '@mui/material'
import Button from '@mui/material/Button';

import './InputForm.css'
import { useState, ChangeEvent, KeyboardEvent} from 'react';



export const InputForm = ( props: any ) => {

    let [ inpEmail, setInpEmail ] = useState('')
    let [ inpPas, setInpPas ] = useState('')
    
    const onChangeHandlerEmail = ( e: ChangeEvent<HTMLInputElement> ) => {
        setInpEmail( e.currentTarget.value )
    }

    const onChangeHandlerPas = ( e: ChangeEvent<HTMLInputElement> ) => {
        setInpPas( e.currentTarget.value )
    }

    const clearData = () => {
        setInpEmail('')
        setInpPas('')
    }

    const sendData = () => {
        props.handleClose()
        const obj = {
            email: inpEmail,
            password: inpPas,
            rememberMe: false,

        }

        props.LOGIN_THUNK( obj )
    }

    return (
        <div>
            <TextField 
                variant={"outlined"}
                label={"Email"}
                value={inpEmail}
                // onKeyPress={onKeyPressHandler}
                onChange={onChangeHandlerEmail}
                // error={!!error}
                // helperText={error}
                />
            <TextField 
                variant={"outlined"}
                label={"Password"}
                value={inpPas}
                // onKeyPress={onKeyPressHandler}
                onChange={onChangeHandlerPas}
                // error={!!error}
                // helperText={error}
            />
            <Button onClick={ clearData }>Clear</Button>
            <Button onClick={ sendData  } autoFocus>Send</Button>
        </div>
    )
}