import Todo from "./Todo";

const Todos = ({todos}) =>{
    return(
        <div>
         {todos.map((todo)=> <Todo todo={todo} />)}
        </div>
    )
}
export default Todos;