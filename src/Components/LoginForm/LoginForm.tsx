// import React from 'react'

// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { TroubleshootRounded } from '@mui/icons-material';


import { InputForm } from './InputForm/InputForm'
import  CircularIndeterminate from './LoadingForm/LoadingForm' 



import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';


import { LOGIN_THUNK } from '../../State/LoginReduser/LoginReducer'


const ContainerLoginForm = ( props: any ) => {

  const [open, setOpen] = React.useState( true );
  const [ loading, setLoading ] = React.useState( false );

  const [ userData, setUserData ] = React.useState( false )

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (  ) => {
    setLoading(true)
    // запрос

  };


  React.useEffect( () => {


    if (props.isAuth === true) {
      setUserData( true )      
    }


  }, [props.isAuth] )

  return (
    <React.Fragment>

      { userData && <Navigate to="/" replace={true} /> }

      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          { loading === true ? "Loading" : "Log in" }  
        </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                { loading === true ? <CircularIndeterminate/> : <InputForm LOGIN_THUNK = { props.LOGIN_THUNK } handleClose = { handleClose } /> }
              </DialogContentText>
            </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const mapStateToPRops = ( state: any ) => {
  return {
    isAuth: state.LoginData.isAuth
  }
}

type TypeLoginData = {
  email: string,
  password: string,
  rememberMe: boolean
}

const mapDispatchToPRops = ( dispatch: any ) => {
  return {
    LOGIN_THUNK: ( data: TypeLoginData ) => dispatch( LOGIN_THUNK( data ) )
  }
}

export default connect( mapStateToPRops, mapDispatchToPRops )(ContainerLoginForm)