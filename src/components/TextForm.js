import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
//     const handle=(e)=>{
//         setKeyword(e.target.value)
//     }

//     const search=()=>{
//         // setText(<b>{text}</b>)
//   }
    
    // const [keyword,setKeyword]=useState('')

    const [text, setText] = useState(''); 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1 className='mb-4 ' style={{color:props.mode==='light'?"#001b53":'white'}}>{props.heading}</h1>
            {/* <div className="d-flex justify-content-between">
            <h1 className='mb-4 ' style={{color:props.mode==='light'?"#001b53":'white'}}>{props.heading}</h1>
            <div className="input-group " style={{flexBasis:'20%',height:'20px'}}>
               <input type="search" className="form-control rounded " placeholder="Word Search"  value={keyword} onChange={handle} aria-label="Search" aria-describedby="search-addon" />
               <button disabled={keyword.length===0} type="button" className="btn btn-outline-primary" onClick={search}>*</button>
               </div>

            </div> */}
           
            <div className="mb-3"> 
            <textarea className="form-control"  placeholder='Type or Paste your text here :)' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'#d4ffff', color: props.mode==='dark'?'white':'#042743'}} id="inputText" rows="8">{text}</textarea>
            </div>
            <div className="d-flex justify-content-center my-4">
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
