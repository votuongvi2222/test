import React, { useState } from 'react';
/**
 * Biến đổi component sao cho khi click button thì Component không bị re-render
 */
const Exercise1 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const updatedCount = count + 1;
        console.log(`Clicked ${updatedCount} times`);
        setCount(updatedCount);
    };

    console.log("Re-render!");

    return <button onClick={handleClick}>Click me</button>;
}

export default Exercise1;