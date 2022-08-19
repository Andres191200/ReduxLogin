import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import '../styles/myUser.css';
import { useDispatch } from "react-redux";
import { logout as LOGOUT} from "../actions";
import useIsLogged from "../customHooks/useIsLogged";


const MyUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setLogged } = useIsLogged();
    const { username } = JSON.parse(window.localStorage.getItem('userInfo'));

    useEffect(() => {
        username || navigate('/', { replace: true })
    }, [username])

    const logout = () =>{
        setLogged(false);
        dispatch(LOGOUT())
    }

    return (
        <div className="my-user-main-container">
            <button onClick={logout}>Logout</button>
            <div className="user-data-container">
                <h1>Hello {username}</h1>
            </div>
        </div>
    )
}

export default MyUser;