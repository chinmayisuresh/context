import { useState } from "react";

export const Todoinput=({getData})=>{
  const [text,settext]=useState(" ");
        
    const handlechange=(e)=>{
       settext(e.target.value);
    }
    const handleclick=()=>{
        getData(text)
    }
    return <>
    <input type="text" placeholder="enter an item"  onChange={handlechange}></input>
    <button onClick={handleclick}>Add an Item</button>
    </>
}

