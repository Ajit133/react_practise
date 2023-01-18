import { useEffect } from "react";
import { useState } from "react";

const DataFetch = ()=>{
    const [todos,setTodos] = useState(null)
    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setTodos(data);
                
            })
    },[]);
    if (todos) 
    return(
         <div>
            {todos.map((todo)=>{
                    return <p key={todo.id}>{todo.body}</p>
                })}
        </div>
    
    )
}
export default DataFetch;