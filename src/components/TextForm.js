import React, { useState } from 'react'

const TextForm = (props) => {

    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Text changed to UPPERCASE")
        props.showAlert("Text change to UPPERCASE", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        console.log("Text changed to LOWERCASE");
        props.showAlert("Text changed to LOWERCASE", "success");
    }

    const handleClear = ()=>{
        let clearText = "";
        setText(clearText);
        props.showAlert("Text cleared", "success");
    }

    const handleColClick = () => {
        // Array of predefined colors
        let colors = ["red", "blue", "green", "purple", "orange", "yellow", "pink"];
        // Get a random index from the colors array
        let randomIndex = Math.floor(Math.random() * colors.length);
        // Get the random color from the colors array
        let randomColor = colors[randomIndex];
        // Get the element by its ID
        let textColor = document.getElementById("mybox");
        // Change the color property
        textColor.style.color = randomColor;
        console.log("Text color is changed");
        props.showAlert("Text color is changed", "success");
    }

    const removeExtraSpaces = ()=>{
        let removeSpace = text.split(/[" "]+/);
        setText(removeSpace.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handlecopyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied yo clipboard", "success");
      }

    const handleOnChange = (e) => {
        setText(e.target.value);
        console.log("user typing...")
    }


    return (
        <>
            <div className='container' style={{color : props.mode === "dark"?"white" : "black"}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id='mybox' rows="8" value={text} style={{backgroundColor : props.mode === "dark"?"grey" : "white", color : props.mode === "dark" ? "white" : "black"}} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleColClick}>Change Text Color</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handlecopyText}>Copy Text </button>
                <button className='btn btn-primary mx-2 my-2' onClick={removeExtraSpaces}>Remove Extra Spaces </button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} words , {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}

export default TextForm
