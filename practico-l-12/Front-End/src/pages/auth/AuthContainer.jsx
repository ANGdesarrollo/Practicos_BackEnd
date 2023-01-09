import { AuthLayout } from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/index.js";

export const AuthContainer = () => {
    const { formState, onInputChange } = useForm();
    const { userAuth, password } = formState;

    const navigate = useNavigate();

    const handleSubmit = async( e ) => {
        e.preventDefault();
        const formData = {
            userAuth,
            password
        }
        const res = await fetch( 'http://localhost:8080/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( formData ),
        } )

        const data = await res.json();

        if( data.status ) {
            navigate( '/home' )
        } else {
            alert( 'error al iniciar sesion' )
        }

    }
    return (
        <AuthLayout handleSubmit={ handleSubmit } onInputChange={ onInputChange }/>
    )
}
