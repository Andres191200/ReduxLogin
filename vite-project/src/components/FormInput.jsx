import { handleChange } from "../utils/form";
import '../styles/input.css';
import '../styles/form.css';
import { useRef } from "react";
import { useState } from "react";


const FormInput = ({ type, text, name, form, setForm, icon }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const passwordInputRef = useRef();


    const showPassword = () => {
        isPasswordVisible ? setIsPasswordVisible(false) : setIsPasswordVisible(true);
    }

    return (
        <>
            <input ref={icon && passwordInputRef} type={isPasswordVisible ? 'text' : type} name={name} placeholder=" " onChange={(e) => handleChange(e, form, setForm)} />
            <label htmlFor={name}>{text}</label>
            {icon && <svg className="password-eye" onClick={showPassword} width="25" viewBox="0 0 68 80" fill="none">
                <path d="M49 40.5C49 48.3989 42.1729 55 33.5 55C24.8271 55 18 48.3989 18 40.5C18 32.6011 24.8271 26 33.5 26C42.1729 26 49 32.6011 49 40.5Z" stroke="white" strokeWidth="4" />
                <path className={`password-eye-bar ${isPasswordVisible ? 'visible' : 'pw-hidden'}`} d="M57 4L9 77" stroke="white" strokeWidth="8" />
                <path d="M3 39.8092C26.7949 9.36611 52.9145 27.1246 63 39.8092C42.4872 72.7545 14.453 53.5364 3 39.8092Z" stroke="white" strokeWidth="3" />
            </svg>
            }
        </>
    )
}

export default FormInput;