import React,{useState} from 'react'

 
 

export default function Textform(props) {
    const handleupclick=()=>{
        console.log("uppercase was clicked "  + text)
        let newText =text.toUpperCase();
        setText(newText)
    }
    const handleloclick=()=>{
        console.log("uppercase was clicked "  + text)
        let newText =text.toLowerCase();
        setText(newText)
    }
    const handleonchange=(event)=>{

        console.log(" on change")
        setText(event.target.value)
    }
    const handleCleaclick=()=>{
      console.log("uppercase was clicked "  + text)
      let newText =" ";
      setText(newText)
  }
    const [text, setText] = useState('Enter text here');
  
  return (
    <>
   <div className="container" style={{color:props.mode==='dark' ?'white':'black'}}>
    <h1>{props.heading} </h1>
      
      <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark' ?'grey':'white', color:props.mode==='dark' ?'white':'black'}} id=" my box" rows="8"></textarea>
</div>
<button className="btn-primary mx-2 my-1" onClick={handleupclick}>convert to uppercase</button>
<button className="btn-primary mx-2 my-1  const handleupclick=()=>{
    " onClick={handleloclick}>convert to lowercase</button>
    <button className="btn-primary mx-2 my-1" onClick={handleCleaclick}>remove</button>
     </div>
     <div className="container my-3 my-1"   style={{color:props.mode==='dark' ?'blue':'black'}}>
        <h1>Your summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} charcter</p>
        <p>{0.008* text.split(" ").length}  Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
     </div>
     </>
  )
}
