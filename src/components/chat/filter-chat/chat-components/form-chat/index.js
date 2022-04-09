import React from 'react';
import Test from '../../../../test/test';
import './form-chat.scss';

const FormChat = ({ setMessage, setRoom, onMessage }) => {

    return (
        <div className='form__chat-container'>
            <Test />
            <input type='text' placeholder='Write a message...' onChange={(event) => setMessage(event.target.value)} />
            <button type='button' onClick={onMessage}>&#10148;</button>
        </div>
    );
}

export default FormChat;