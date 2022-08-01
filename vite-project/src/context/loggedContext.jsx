import { createContext, useState } from "react";

const LoggedContext = createContext()

const LoggedProvider = ({children}) =>{
    const [logged, setLogged] = useState(false)
    const data = {logged, setLogged};
    return <LoggedContext.Provider value={data}>{children}</LoggedContext.Provider>
}

export {LoggedProvider};
export default LoggedContext;