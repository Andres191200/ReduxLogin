import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import '../styles/myUser.css';

const MyUser = () => {
    const navigate = useNavigate();
    const { username } = JSON.parse(window.localStorage.getItem('userInfo'))
    useEffect(() => {
        username || navigate('/', { replace: true })
    }, [username])

    return (
        <div className="my-user-main-container">
            <div className="user-data-container">
                <h1>Hello {username}</h1>
            </div>
        </div>
    )
}

export default MyUser;