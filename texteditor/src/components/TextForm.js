import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.displayAlert("Converted to uppercase","success");
    }

    const handleClickLo = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.displayAlert("Converted to lowercase","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const textClearer =()=> {
        setText("");
        props.displayAlert("Removed all texts","success")
    }

    const textToSpeech = () => {
        const Speech= new SpeechSynthesisUtterance();
        const message= text;

        Speech.lang='eng';
        Speech.text= message;
        window.speechSynthesis.speak(Speech);
        props.displayAlert("Speaking !","success")
    }

    const handleCopy =() => {
        let t=document.getElementById("myBox");
        t.select();
        navigator.clipboard.writeText(t.value);
        props.displayAlert("Copied to Clipboard","success")
    }

    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.displayAlert("Extra Spaces Removed","success")
    }
    return ( 
        <>
    <div className='container' style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode === "dark" ? "grey" : "white" , border: "4px solid white"}}></textarea>
        </div>  
        <button className="btn btn-primary mx-2 my-1" onClick={handleClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClickLo}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={textToSpeech}>Hear the text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={textClearer}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-5" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Can be read in {0.010 * text.split(" ").length} minutes</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something Above To Preview It Here"}</p>
    </div>
    </>
  )
}

