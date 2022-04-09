import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../../../../socket';
import './chat-messages.scss';

const ChatMessages = ({ messages, test }) => {

    const removeMsg = useSelector(state => state.messages);
    const styleMessage = useSelector(state => state.style);
    const removedMessage = useSelector(state => state.removedMessage);

    const removeItem = (elem) => {
        socket.emit('message', { actionName: 'DELETE', position: elem });
        // console.log(removeMsg);
        console.log(test);
    }

    return (
        <div className='chat__messages'>
            {
                messages.map((el, index) => {
                    return (
                        <li key={index}>
                            <a href='#' alt='msg' className={`${styleMessage}`}>{el.message} Комната {el.room}</a>
                            <span key={index + 1} onClick={() => removeItem(index)}>&times;</span>
                        </li>
                    )
                })
            }
        </div>
    );
}

export default ChatMessages;
