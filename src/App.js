import Child from "./State_Lifting/Child";
function App() {
  const text = "I am from App Component";
  const dataFromChild =(data) =>{
      console.log(data) 
      // data from child ..This is State lifting 
  }
  return(
   <div>
  <Child text={text} dataFromChild ={dataFromChild} /> 
  </div>
  )
}
export default App;
