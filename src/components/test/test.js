import React from 'react';
import socket from '../../socket';

const Test = () => {

    const click = () => {
        socket.on('message', data => {
            console.log(data)
        });
    }

    return (
        <button onClick={click}>CLICK</button>
    );
}

export default Test;
