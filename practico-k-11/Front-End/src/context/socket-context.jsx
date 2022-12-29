import io from 'socket.io-client';
import {SOCKET_URL} from "../config/default";
import {createContext,  useState} from "react";
import {useForm, useFetch, useNormalizr, useCompressed} from "../hooks";

const socket = io(SOCKET_URL, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": ''
    }
});

export const SocketContext = createContext({socket});

export const SocketsProvider = ({children}) => {

    const [ products, setProducts] = useState([]);
    const [newMessage, setNewMessage] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [percentage, setPercentage] =  useState('');
    const [allProducts, setAllProducts] = useState([])

    const { data, isLoading } = useFetch('http://localhost:8080/api/test-products');
    const { denormalizedData } = useNormalizr();
    const { showCompressionPercentage } = useCompressed()

    const {formState, onInputChange, onResetForm} = useForm();

    const {  product, price, thumbnail } = formState;
    const { username, surname, age, alias, image, email , message } = formState;

    const sendProduct = (e) => {
        e.preventDefault();
        socket.emit('productAdded', {product, price, thumbnail});
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const dataMessage = {
            author: {email, username, surname, age, alias, image},
            text: message
        }
        socket.emit('dataMessage', dataMessage)
    }

    socket.on('productAdded', (data) => {
        setProducts([...products, data])
    });

    socket.on('newMessage', (data) => {
        setNewMessage([...newMessage, data])
    });

    socket.on('allChats', (data) => {
        const dataDenormalizada = denormalizedData(data);

        const dataNormalizadaLength = JSON.stringify(data, null, 4).length;
        const dataDenormalizadaLength = JSON.stringify(dataDenormalizada, null, 4).length;
        const dataPercentage = showCompressionPercentage(dataDenormalizadaLength, dataNormalizadaLength);

        setPercentage(dataPercentage)
        setAllMessages(dataDenormalizada.messages);
    });

    socket.on('allProducts', (data) => {
        setAllProducts(data)
    })


    return (
        <SocketContext.Provider value={{
            onInputChange,
            sendProduct,
            data,
            isLoading,
            products,
            sendMessage,
            onResetForm,
            newMessage,
            allMessages,
            percentage,
            allProducts
        }}>
            {children}
        </SocketContext.Provider>
    )
}
