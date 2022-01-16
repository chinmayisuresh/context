import {createContext} from "react";
import {useState} from "react";

export const LoginContext=createContext();

export const LoginContextProvider=({children})=>{
    const [auth,setAuth]=useState(false);
    const handlelogin=async(value)=>{

        let data = await fetch('https://reqres.in/api/login',{
            method:'POST',
            body:JSON.stringify(value),
            headers:{
                "content-type":"application/json"
            }

        });

        let ans = await data.json();
        setAuth(ans.token)
        console.log(ans)
         
        
       }
    return <LoginContext.Provider value={{auth , handlelogin}}>{children}</LoginContext.Provider>
};