import React from 'react';
import socket from '../../../../../socket';
import './chat-room.scss';

const ChatRoom = ({ roomId }) => {

    const chooseRoom = (el) => {
        // socket.emit('chooseRoom', el);
        console.log(el);

    }

    return (
        <div>
            <div className='chat__room'>
                {
                    roomId.map((el, index) => {
                        return (
                            <li key={index} onClick={() => chooseRoom(el)}>{el}</li>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ChatRoom;
