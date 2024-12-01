
import React, { useState } from 'react';

export default function Input() {
    const handleupcase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handlelowcase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalCase = () => {

        const wordsArray = text.split(/\s+/);
        const capitalizedWords = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));  //map iterate each element of array
        const newText = capitalizedWords.join(" ");
        setText(newText);
    };


    const copytoclipboard = () => {
        let text = document.querySelector("#box");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const clearText = () => {
        setText(" ");
    }

    const handleonchange = (evt) => {
        console.log("up case cazalilcked");
        setText(evt.target.value);                      // to listen any event
    }

    const [text, setText] = useState(" ");
    return (
        <div className='container '>
            <div className="mb-6 my-5 ">
                <h2 htmlFor="exampleFormControlTextarea1 " className="form-label Text-start">Enter Your Text Here</h2>
                <textarea className="form-control" value={text} onChange={handleonchange} id="box" rows="8"></textarea>
                <button type="button" className="btn my-3 btn-primary" onClick={handleupcase}>Convert to uppercase</button>
                <button type="button" className="btn my-3 mx-2 btn-primary" onClick={handlelowcase}>Convert to lowercase</button>
                <button type="button" className="btn my-3 btn-primary" onClick={handleCapitalCase}>Cnvrt 1st ltr capital</button>
                <button type="button" className="btn my-3 mx-2 btn-primary" onClick={copytoclipboard}>copy to clipboard</button>
                <button type="button" className="btn my-3 mx-2 btn-primary" onClick={clearText}>Clear</button>

                <h5 >{text.length - 1} charachters & {text.split(/\s+/).length - 2} wards</h5>
            </div>
        </div>
    )
}
