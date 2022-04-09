import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../socket';
import { messageActionCreator, roomActionCreator, styleMessageActionCreator } from '../../redux/action-creators';

import { FilterChat } from '../../components';

import './messages.scss';

const Messages = () => {

    const [messagesFilter, setMessagesFilter] = useState([]);

    const dispatch = useDispatch();

    const roomId = useSelector(state => state.room);
    const messages = useSelector(state => state.messages);
    const arr = useSelector(state => state);

    const [test, setTest] = useState('');

    useMemo(() => {
        socket.on('message', rooms => {
            console.log(rooms);
            dispatch(messageActionCreator(rooms));
        });
        socket.on('room', room => {
            dispatch(roomActionCreator(room));
        });
        socket.on('chooseRoom', data => {
            setMessagesFilter([...messagesFilter, data]);
        });
        socket.on('style', data => {
            dispatch(styleMessageActionCreator(data));
        })
        socket.on('filter', ({ rooms, arr }) => {
            console.log(arr, ' filter');
            console.log(rooms, 'messages');

            const newArr = arr.forEach((el, i) => {

            })
            setTest('data-test');
            dispatch({ type: 'REMOVED_POSITION_MESSAGE', payload: 'data' })
        })
    }, [])

    return (
        <div className='chat__container'>
            <FilterChat
                roomId={roomId}
                messages={messages}
                messagesFilter={messagesFilter}

                test={test}

            />
        </div>
    );
}

export default Messages;
