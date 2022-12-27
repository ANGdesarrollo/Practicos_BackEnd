import io from 'socket.io-client';
import {SOCKET_URL} from "../config/default";
import {createContext, useEffect, useState} from "react";
import {useForm, useFetch} from "../hooks";

const socket = io(SOCKET_URL, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": ''
    }
});

export const SocketContext = createContext({socket});

export const SocketsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const { data, isLoading } = useFetch('http://localhost:8080/api/test-products');

    const {formState, onInputChange} = useForm();

    const {  product, price, thumbnail } = formState;
    const { username, surname, age, alias, image, id , message } = formState;

    const sendProduct = (e) => {
        e.preventDefault();
        socket.emit('productAdded', {product, price, thumbnail});
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const dataMessage = {
            author: {
                id,
                username,
                surname,
                age,
                alias,
                image
            },
            text: message
        }
        socket.emit('dataMessage', dataMessage)
    }

    socket.on('productAdded', (data) => {
        setProducts([...products, data])
    })


    return (
        <SocketContext.Provider value={{
            onInputChange,
            sendProduct,
            data,
            isLoading,
            products,
            sendMessage
        }}>
            {children}
        </SocketContext.Provider>
    )
}
