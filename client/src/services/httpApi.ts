import http from './httpServices'

export const RegisterUser = async (data: object) => {
    try {
        const response = await http.post(`${http.url}/auth/signup`, JSON.stringify(data))
        return response
    } catch (error) {
        console.log(error)
    }
}

export const LoginUser = async(data: object) => {
    try {
        const response = await http.post(`${http.url}/auth/signin`, JSON.stringify(data))
        return response
    } catch (error) {
        console.log(error)
    }
}