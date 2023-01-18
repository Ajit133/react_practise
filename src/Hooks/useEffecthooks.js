import { useEffect } from "react";
import { useState } from "react";

const Example = ()=>{
    const [count,setCount]=useState(0);
    const [load,setloading] = useState(false)
    useEffect (()=>{
      console.log("useEffect!!!")
    },[])
    return(
      <div>
      {console.log("Rendering")}
        <p>You Clicked {count} times</p>
        <button onClick={()=>setCount(count=>count+1)}>Click Me</button><br/><br/>
        <button onClick={()=>setloading(!load)}>isLoading</button>
      </div>
    )
}
export default Example;