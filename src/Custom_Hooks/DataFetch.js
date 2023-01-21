import useFetch from "./useFetch";

const DataFetch = ()=>{
    const {todos,isLoading,error}=useFetch("https://jsonplaceholder.typicode.com/todos")  
    const loadingMessage = <p>Data is Loading...</p>
    const errorMessage = <p>{error}</p> 
    return(
         <div>
             {todos && todos.map((todo)=>{ return <p key={todo.id}>{todo.title}</p>}) }
             {isLoading && loadingMessage}
             {error && errorMessage}
         </div>
    )
}
export default DataFetch;