import React, { useState } from "react";

function Button() {
    const [color, setColor] = useState('blue');

    const handleClick =()=>{
        setColor(color === 'blue' ? 'green' : 'blue')
    }

    return (
        <button style={{
            backgroundColor : color,
            color : 'white',
            padding : '10px 20px',
            border : 'none',
            borderRadius : '5px',
            cursor : 'pointer'
        }}
        onClick={handleClick}>
        Click Me!</button>
    )
}
export default Button;