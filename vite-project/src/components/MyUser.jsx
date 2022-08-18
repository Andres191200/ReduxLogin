import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

const MyUser = () => {
    const navigate = useNavigate();
    const {username} = JSON.parse(window.localStorage.getItem('userInfo'))
    useEffect(() => {
        username || navigate('/', { replace: true })
    }, [username])

    return (
        <h1>{username} </h1>  
    )
}

export default MyUser;