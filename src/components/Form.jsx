import { useContext, useState } from "react"
import { LoginContext } from "../context/Logincontext";

export const Form = () =>{
    const [form,setForm]=useState({
        email:" ",
        password:" ",
    });

 const {handlelogin ,auth} = useContext(LoginContext)

    const handleChange=(e)=>{
            const {name,value}=e.target;

            setForm({
                ...form,
                [name]:value,
            })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        handlelogin(form)

    }

   
    return <form   onSubmit={handleSubmit}>
        <input onChange={handleChange}  name='email' type="text" placeholder="enter email"></input>
        <input onChange={handleChange} name='password' type="text" placeholder="enter password"></input>
      
        <input type='submit' value='submit'></input>

        {auth? <h4>{auth}</h4> : null}
    </form>
}