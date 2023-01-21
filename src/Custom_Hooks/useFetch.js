import { useState,useEffect } from "react";
const useFetch = (url)=>{
    const [todos,setTodos] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    
    
    useEffect(()=>{
        fetch(url)
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

    },[url])
    return {todos,isLoading,error}
}
export default useFetch;