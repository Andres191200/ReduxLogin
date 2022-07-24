import { LOGIN, SIGNUP } from "../types"

export const login = (form) => ({type: LOGIN , payload:form})

export const signup = (form) => ({type: SIGNUP , payload: form})