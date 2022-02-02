// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function passHandler(event) {
        console.log("Entering password...")
    }
    return <input type="password" onChange={passHandler}></input>;
}


export default Keypad;
