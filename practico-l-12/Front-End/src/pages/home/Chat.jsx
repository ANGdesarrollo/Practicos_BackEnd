import './chat.css'
import { SocketContext } from "../../context/socket-context.jsx";
import {useContext, useEffect} from "react";

export const Chat = () => {
    const { newMessage, allMessages, percentage } = useContext(SocketContext);

    return (
        <div className="container">
            <div className="d-flex align-items-center"><h2>MESSAGE CENTER</h2> <h4 className="p-4">Percentage Compressed : {percentage}%</h4></div>
            <div id="js-chatRoom" className="container">
                {allMessages  && allMessages.map(el => {
                    const { alias } = el.author
                    return (
                        <p key={el.id}><span className="blue">{alias}</span> <span className="red"> [{el.timestamp}]</span>: {el.text}</p>
                    )
                })}
                {newMessage.map(el => {
                    const { alias } = el.author
                    return (
                        <p key={el.id}><span className="blue">{alias}</span> <span className="red"> [{el.timestamp}]</span>: {el.text}</p>
                    )
                })}
            </div>
        </div>
    )
}
