import { AnyCnameRecord } from 'dns';
import { LoginAPI } from '../../DAL/DAL'


import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk';

const initial = {
    isAuth: null,
    id: 0,
    data: {
        email: '123',
        login: '123'
    }
}

type objTypeState = {
    email: string,
    login: string
}
type StateType = {
    isAuth: boolean | null,
    id: number,
    data: objTypeState
}




type TypeAuthMe = {
    type: "AUTH-ME"
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
        case "AUTH-ME":
            
            return {
                isAuth: true,
                id: action.id,
                data: {
                    email: action.email,
                    login: action.login
                }
            }

        case "LOG_OUT":

            return {
                ...state,
                isAuth: false,
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
                isAuth: true,
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
    
    return { type: "AUTH-ME", id: obj.id , email: obj.email, login: obj.login }
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

        LoginAPI.login( data.email, data.password, data.rememberMe )
        .then( ( res: any ) => {
            
            if ( res.data.resultCode === 0 ) {
                dispatch( LOGIN_AC( data ) )
            }

        } )

    }
}


export const AUTH_ME_THUNK = (): thunkType => {
    return async (dispatch, getState) => {
        LoginAPI.authMe().then((res: TypeAuthMeResponse ) => {
                if ( res.resultCode === 0) {

                    return dispatch(AUTH_ME_AC(res.data))

                } else if ( res.resultCode === 1 ) {
                    return dispatch( LOG_OUT_AC() )
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

