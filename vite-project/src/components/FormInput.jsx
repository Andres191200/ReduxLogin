import { handleChange } from "../utils/form";
import '../styles/input.css';
import '../styles/form.css';


const FormInput = ({ type, name, form, setForm }) => {

    return (
        <>
            <input type={type} name={name} placeholder=" " onChange={(e) => handleChange(e, form, setForm)} />
            <label htmlFor={name}>{name}</label>
        </>
    )
}

export default FormInput;