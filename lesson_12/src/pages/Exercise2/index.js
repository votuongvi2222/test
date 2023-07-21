import React, { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
/**
 * Biến đổi component sao cho khi click button thì Component không bị re-render
 */
const data = [
    {
        id: 1,
        name: 'Button 1'
    },
    {
        id: 2,
        name: 'Button 2'
    },
    {
        id: 3,
        name: 'Button 3'
    }
]
const Item = ({ item, onClick }) => {
    console.log('Re-render! ' + item.name)
    return (
        <button onClick={onClick}>{item.name}</button>
    )
}

const Exercise2 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const updatedCount = count + 1;
        console.log(`Clicked ${updatedCount} times`);
        setCount(updatedCount);
    }

    return (
        <>
        {
            data.map((item) => (
                <Item item={item} onClick={handleClick}/>
            ))
        }
        </>
    )
}

export default Exercise2;