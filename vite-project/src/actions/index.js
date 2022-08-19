import { LOGIN, LOGOUT, SIGNUP } from "../types"

export const login = (form) => ({type: LOGIN , payload:form})

export const signup = (form) => ({type: SIGNUP , payload: form})

export const logout = () => ({type: LOGOUT})