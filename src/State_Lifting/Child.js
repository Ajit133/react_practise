export default function Child({text,dataFromChild}){
    const data = "i am from child"
    return(
        
        <div>
            <h1>{dataFromChild(data)}</h1>
            <h1>{text}</h1>
        </div>
    )
}