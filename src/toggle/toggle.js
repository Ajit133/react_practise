import { useState } from "react";
        
const Toggle = () =>{
    const [toggle,setToggle] = useState(true)
    return(
      <div style={{ border:"5px" ,backgroundColor:"grey"}}>
        <h1>About Programming</h1>
        {toggle && <p>Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).[1][2] The source code of a program is written in one or more languages that are intelligible to programmers</p>}
        <div style={{color:"blue",textAlign:"center"}}>
        <button onClick={()=>{setToggle(!toggle)}}>{toggle? 'hide' : 'show'}</button>
        </div>
        
      </div>
    )
}
export default Toggle;