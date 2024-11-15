import React, {useState} from 'react'

export default function Form(props) {
   const handleOnChange = (event) =>{
        console.log('changed text')
        setText(event.target.value)
    }
   const handleUpClick = () =>{
      let newText = text.toUpperCase();
      setText(newText);
    }
   const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
    }
   const handleclear = () =>{
    
      setText('');
    }
   const handleSpace = () =>{
    let extraspace = text.replaceAll(' ', '');

      setText(extraspace);
    }

   const handleCopyText = () =>{
         navigator.clipboard.writeText(text);
      alert("Text Copied");
        setText(text);
     
    };
  
    const [text, setText] = useState('Enter Your Text Here')
  return (
    <>
    <div className="container">
       <h2>{props.heading}</h2>
      <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myform" rows="8"></textarea>
    <button className="btn btn-sm btn-primary my-2 mx-2" onClick={handleUpClick}>Click for Uppercase</button>
<button className="btn btn-sm btn-primary my-2 mx-2" onClick={handleLowClick}>Click for Lowercase</button>
<button className="btn btn-sm btn-primary my-2 mx-2" onClick={handleSpace}>Click for Remove Extra Space</button>
<button className="btn btn-sm btn-primary my-2 mx-2" onClick={handleCopyText}>Click for Copy</button>
<button className="btn btn-sm btn-primary my-2 mx-2" onClick={handleclear}>Click for Cleartext</button>
    </div>
    </div>
    
    <div className="container">
<h2>Your Summary</h2>
<p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> character</p>
<p>You Took {0.008 * text.split(" ").length} Minutes To Read</p>
<h3>Preview</h3>
<p>{text}</p>
    </div>
    </>
  )
}
