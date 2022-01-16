export const TodoItem=({title,id,handleToggle})=>{
               return <>
                  <div>{title}
                  <button onClick={()=>handleToggle(id)}>Delete item</button>
                  </div>
               </>
}