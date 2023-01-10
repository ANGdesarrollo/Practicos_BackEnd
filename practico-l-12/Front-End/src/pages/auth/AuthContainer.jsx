import { AuthLayout } from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/index.js";
import Axios from 'axios';

Axios.defaults.withCredentials = true

export const AuthContainer = () => {
    const { formState, onInputChange } = useForm();
    const { userAuth, password } = formState;

    const navigate = useNavigate();

    const handleSubmit = async( e ) => {
        e.preventDefault();

        Axios.post( 'http://localhost:8080/api/auth', {
            userAuth,
            password
        } ).then( ( { data } ) => {
            if( data.status ) {
                navigate( '/home' )
            } else {
                alert( 'error al iniciar sesion' )
            }
        } )
    }
    return (
        <AuthLayout handleSubmit={ handleSubmit } onInputChange={ onInputChange }/>
    )
}
