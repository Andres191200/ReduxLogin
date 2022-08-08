import { useContext, useState } from "react"
import LoggedContext from "../context/loggedContext"

export const useIsLogged = () =>{
    const {logged, setLogged} = useContext(LoggedContext)

    return {logged, setLogged}
}

export default useIsLogged