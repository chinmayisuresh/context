import { TodoItem } from "./Groceryitem";
import { useState } from "react";
import {Todoinput} from "./Groceryinput"
import {nanoid} from "nanoid";
export const Todo=()=>{

    const [list,setList]=useState([]);
     const handleClick=(data)=>{
          console.log(data);

          const payload={
              title:data,
              status:false,
              id:nanoid(7)
          }
          setList([...list,payload]);
     }

     const handleToggle=(id)=>{
         let change=list.filter((e)=>(e.id!==id))
         setList(change);
         console.log(change);
        
     }

    return <>
       <Todoinput  getData={handleClick}/>
       {list.map((e,i)=>(
       <TodoItem key={e.id} {...e} handleToggle={handleToggle}/>))}
    </>
}