import React, { useState } from 'react';
import { ChatRoom, ChatMessages, FilterMessages, FormChat, ChatRoomCreate } from './chat-components';
import socket from '../../../socket';
import './filter-chat.scss';

const FilterChat = ({ roomId, messages, messagesFilter, test }) => {

    const [message, setMessage] = useState('');
    const [room, setRoom] = useState(1);

    const onMessage = () => {
        socket.emit('message', { room, message, actionName: 'ADD' });
    }

    return (
        <div className='chat__wrapper'>
            <div className='create-room__container'>
                <ChatRoomCreate setRoom={setRoom} onMessage={onMessage} />
                <ChatRoom roomId={roomId} />
            </div>
            <div className='chat__output__container'>
                <ChatMessages messages={messages} test={test} />
                {/* <FilterMessages messagesFilter={messagesFilter} /> */}
                <FormChat setMessage={setMessage} setRoom={setRoom} onMessage={onMessage} />
            </div>
        </div>
    );
}

export default FilterChat;
