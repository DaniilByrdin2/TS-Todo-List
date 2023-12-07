import axios from "axios"

const instanse = axios.create({
    baseURL: 'https:\\social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "59b26e7a-d283-47fa-8d4c-c3d490590e45"
    }
})




type TypeLoginRes = {
    resultCode: number
    messages: [],
    data: {
      userId: number
    }

}

export const LoginAPI = {

    authMe() {
        return instanse.get(`auth/me`).then( res => {
            return res.data
        })
    },

    login(  email: string, password: string, rememberMe: boolean  ):Promise<TypeLoginRes> {
        return instanse.post('/auth/login', { email, password, rememberMe })
    },

    logOut() {
        return instanse.delete('/auth/login')
    }

}