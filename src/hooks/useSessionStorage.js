import React, { useState, useEffect } from 'react';

const Usesessionstorage = (initialValue, key) => {
    const getValue = () => {
        const storage = sessionStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        }

        return initialValue;
    }

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default Usesessionstorage;
