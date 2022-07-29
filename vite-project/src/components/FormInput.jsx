import { handleChange } from "../utils/form";
import '../styles/input.css';
import '../styles/form.css';


const FormInput = ({ type, text, name, form, setForm }) => {

    return (
        <>
            <input type={type} name={name} placeholder=" " onChange={(e) => handleChange(e, form, setForm)} />
            <label htmlFor={name}>{text}</label>
        </>
    )
}

export default FormInput;