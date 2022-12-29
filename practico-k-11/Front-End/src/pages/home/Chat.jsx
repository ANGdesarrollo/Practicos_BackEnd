import './chat.css'
import { SocketContext } from "../../context/socket-context.jsx";
import {useContext, useEffect} from "react";

export const Chat = () => {
    const { newMessage, allMessages } = useContext(SocketContext);

    return (
        <div className="container">
            <div><h2>MESSAGE CENTER</h2></div>
            <div id="js-chatRoom" className="container">
                {allMessages.length > 0 && allMessages.map(el => {
                    const { _doc } = el;
                    return (
                        <p key={_doc._id}>{_doc.text}</p>
                    )
                })}
                {newMessage.map(el => {
                    return (
                        <p key={el._id}>{el.text}</p>
                    )
                })}
            </div>
        </div>
    )
}
