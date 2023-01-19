import { useEffect } from "react";
import { useState } from "react";
const loadingMessage = <p>Todo is Loading....</p>
const DataFetch = ()=>{
    const [todos,setTodos] = useState(null)
    const [isLoading,setIsloading] = useState(true) 
    const [error,setError] = useState(null);
    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>{
                if(!res.ok){
                    throw Error("Fetching is not successful");
                }else{
                return res.json()}
            })
            .then((data)=>{
                setTodos(data);
                setIsloading(false)
                setError(null);
                
            })
            .catch((error)=>{
                setError(error.message);
                setIsloading(false);
            });
    },[]);
    // if (todos) 
    const todoElements = todos && todos.map((todo)=>{
        return <p key={todo.id}>{todo.body}</p>
    })
    return(
         <div>
            {error && <p>{error}</p>}
            {isLoading && loadingMessage}
            {todoElements} 
        </div>
    
    )
}
export default DataFetch;