import React, { useState } from 'react';
import './chat-filter-messages.scss';

const FilterMessages = ({ messagesFilter }) => {

    const [indexElem, setIndexElem] = useState(1);

    const removeItem = (elem) => {
        setIndexElem(indexElem * elem);
        console.log(indexElem);
    }

    return (
        <div className='chat__messages'>
            {
                messagesFilter.map((el, index) => {
                    return (
                        <ul key={index}>
                            {
                                el.map((elem, i) => {
                                    return (
                                        <li key={i + 1}>
                                            <a href='#' alt='msg'>{elem.message}</a>
                                            <span key={i} onClick={() => removeItem(i)}>&times;</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }
        </div>
    );
}

export default FilterMessages;
