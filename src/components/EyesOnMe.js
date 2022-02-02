// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function eyesFocus(e) {
        console.log("Good!");
    }
    function eyesBlur(e) {
        console.log("Hey! Eyes on me!");
    }
    return <button onFocus={eyesFocus} onBlur={eyesBlur}>
        Eyes on me</button>;
}

export default EyesOnMe;
