import { LoginAPI } from '../../DAL/DAL'


import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk';

const initial = {
    isAutn: undefined,
    id: 0,
    data: {
        email: '',
        login: ''
    }
}

type objTypeState = {
    email: string,
    login: string
}
type StateType = {
    isAutn: boolean | undefined,
    id: number,
    data: objTypeState
}




type TypeAuthMe = {
    type: "AUTN-ME"
    id: number,
    email: string,
    login: string
}

type TypeLogOutMe = {
    type: "LOG_OUT"
}

type TypeLoginUser = {
    type: "LOGIN_USER",
    data: {
        email: string,
        password: string,
        rememberMe: boolean
    }
}


type ActionsTypes = TypeAuthMe | TypeLogOutMe | TypeLoginUser


export const LoginReducer = ( state: StateType = initial, action: ActionsTypes ) => {

    switch (action.type) {
        case "AUTN-ME":
            
            return {
                ...state,
                isAutn: true,
                id: action.id,
            }

        case "LOG_OUT":

            return {
                isAutn: false,
                id: 0,
                data: {
                    email: '',
                    login: ''
                }
            }


        case "LOGIN_USER":

            const { email, password } = action.data
            return {
                ...state,
                isAutn: true,
                data: {
                    email: email,
                    login: password
                }
            }    

    
        default:
            return state
    }

}




export type CurrentDispatchType = () => Dispatch<ActionsTypes>

export type thunkType = ThunkAction <Promise<void> , StateType, unknown, ActionsTypes >

type TypeAuthMeData = {
    id: number,
    email: string,
    login: string
}


export const AUTH_ME_AC = ( obj: TypeAuthMeData ): TypeAuthMe => {
    return { type: "AUTN-ME", id: obj.id , email: obj.email, login: obj.login }
}

export const LOG_OUT_AC = ():TypeLogOutMe => {
    return { type: "LOG_OUT" }
}


type TypeLoginData = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const LOGIN_AC = ( data: TypeLoginData ):TypeLoginUser => {
    return { type: 'LOGIN_USER', data: data }
}

type TypeAuthMeResponse = {
    resultCode: number
    data: {
      id: number,
      email: string,
      login: string
    }
}



export const LOGIN_THUNK = ( data: TypeLoginData ): thunkType => {
    return async ( dispatch, getState ) => {

        LoginAPI.login( data.email, data.password, data.rememberMe ).then( ( res ) => {
            if ( res.resultCode ) {
                dispatch( LOGIN_AC( data ) )

                console.log(getState());
                
            }

        } )

    }
}


export const AUTH_ME_THUNK = (): thunkType => {
    return async (dispatch, getState) => {
        LoginAPI.authMe().then((res: TypeAuthMeResponse ) => {
                if ( res.resultCode === 0) {

                    console.log( res, " auth me ")
                    return dispatch(AUTH_ME_AC(res.data))

                    // console.log( getState() );
                    
                } else {
                    console.log(" запрос отработал: данных нет ");
                    return dispatch(LOG_OUT_AC())
                    
                }
        })
    }
}

export const LOG_OUT_ME_THUNK = ():thunkType => {
    console.log('log out');
    return async ( dispanch, getState ) => {

        LoginAPI.logOut().then( () => {
                dispanch( LOG_OUT_AC() )

                console.log(getState())

        } )
            
    }
}

