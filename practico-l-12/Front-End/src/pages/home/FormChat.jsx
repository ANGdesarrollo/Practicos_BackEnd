import {useContext, useRef} from "react";
import {SocketContext} from "../../context/socket-context";

export const FormChat = () => {

    const { onInputChange, sendMessage } = useContext(SocketContext);
    const refInputMessage = useRef()


    return (
        <form className="container p-4" id="js-form-chat" onSubmit={sendMessage}>
            <div className="form-outline">
                <label className="form-label" htmlFor="user-name-chat">Name</label>
                <input onChange={onInputChange} type="text" className="form-control" id="user-name-chat" name="username"
                       placeholder="Enter your name"/>
            </div>
            <div className="form-outline">
                <label className="form-label" htmlFor="user-surname-chat">Surname</label>
                <input onChange={onInputChange} type="text" className="form-control" id="user-surname-chat" name="surname"
                       placeholder="Enter your surname"/>
            </div>
            <div className="form-outline">
                <label className="form-label" htmlFor="user-age-chat">Age</label>
                <input onChange={onInputChange} type="number" className="form-control" id="user-age-chat" name="age"
                       placeholder="Enter your age"/>
            </div>
            <div className="form-outline">
                <label className="form-label" htmlFor="user-alias-chat">Alias</label>
                <input onChange={onInputChange} type="text" className="form-control" id="user-alias-chat" name="alias"
                       placeholder="Enter your Alias"/>
            </div>
            <div className="form-outline">
                <label className="form-label" htmlFor="user-image-chat">Image</label>
                <input onChange={onInputChange} type="url" className="form-control" id="user-image-chat" name="image"
                       placeholder="Enter your Image"/>
            </div>
            <div className="form-outline">
                <label className="form-label" htmlFor="user-email-chat">Email</label>
                <input onChange={onInputChange} type="email" className="form-control" id="user-email-chat" name="email"
                       placeholder="Enter your email"/>
            </div>

            <div className="form-outline">
                <label className="form-label" htmlFor="sendMessage">Message</label>
                <textarea  ref={refInputMessage} onChange={onInputChange} name="message" id="sendMessage" placeholder="Write your message"
                          className="form-control"></textarea>
            </div>
            <div>
                <input id="button" onClick={() => refInputMessage.current.value = ''} type="submit" className="btn btn-primary btn-block mt-4"
                       value="Send Message"></input>
            </div>
        </form>
    )
}
