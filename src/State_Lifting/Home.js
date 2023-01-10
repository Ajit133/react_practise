import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const dummyTodos = ["todo1","todo2"];

const Home = () =>{
    const[todos,setTodos] = useState(dummyTodos);
    const handleNewTodo = (newTodo) =>{
        setTodos([...todos,newTodo])
    }
     
    return(
      <>
      <NewTodo newTodo={handleNewTodo} /> 
      {/* Date get from children */}
      {/* When we get to data from children -we make function in parent and give the function in child component and recieve the props and give the data from children */}
      <Todos todos = {todos} />
      </>
    )
}
export default Home;