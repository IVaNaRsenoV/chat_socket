import React from 'react';

const ChatRoomCreate = ({ setRoom, onMessage }) => {
    return (
        <div className='create-room__box'>
            <h1>Создать комнату</h1>
            <h3>Введите название комнаты</h3>
            <div className='chat__room-form'>
                <input type='text' placeholder='Write name room' onChange={(event) => setRoom(event.target.value)} />
                <button onClick={onMessage}>+</button>
            </div>
        </div>
    );
}

export default ChatRoomCreate;
