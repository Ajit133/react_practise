import { useState } from "react";
import { useEffect } from "react";

const DataFetch = ()=>{
    const [todos,setTodos] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
                if(!res.ok){
                    throw Error("Featching is not Successful");
                }else{
                    return res.json()
                }
            })
        .then((data)=>{
           setTodos(data);
           setIsLoading(false)
           setError(null)})
          

        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        });

    },[])
    return(
         <div>
             {todos && todos.map((todo)=>{ return <p key={todo.id}>{todo.title}</p>}) }
             {isLoading && <p>Data is Loading..</p>}
             {error && <p>{error}</p>}
         </div>
    )
}
export default DataFetch;