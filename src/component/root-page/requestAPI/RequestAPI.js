import React from 'react';

export default function RequestAPI() {
    const queryData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            
        </div>
    );
}