import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpCase =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoCase =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear =()=>{
        setText('');
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const[text,setText]=useState("");
  return (

    <>
            <div className={`container text-${(props.mode) === 'light'?'dark':'light'}`}>  
                    <h1>{props.heading}</h1>
                    <div className="my-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter the text here'></textarea>
                    </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCase}> Convert To Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoCase}> Convert To Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClear}> Clear</button>
            </div>
            <div className={`container my-4 text-${(props.mode) === 'light'?'dark':'light'}`}>
                <h2>Your text summary</h2>
                <p>{(text.split( " ").length)-1} words and {text.length} characters</p>
                <p>{0.08*text.split(" ").length} minutes to read</p>

                <h2 className='my-3'>Preview</h2>
                <p>{text.length==0?'Enter text to preview here':text}</p>
            </div>
    </>
  )
}
