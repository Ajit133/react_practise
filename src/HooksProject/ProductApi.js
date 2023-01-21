import { useEffect, useState } from "react";

const ProductApi = ()=>{
    const [product,setProduct]= useState(null);
    const [isLoading,setIsloading] = useState(true);
    // const [error,setError] = useState(null)
    const loadMessage = <p>Loading the Data....</p> 
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            if(!res.ok){
                throw Error("Product is not Here");
            }else{
                return res.json();
            }})
        .then((data)=>{
              setProduct(data);
              setIsloading(!true)
              
        })
    },[])
    
    const productElement = product && product.map((product)=>{return <p key={product.id}>{product.title}</p>})

    return(
        <> 
            {isLoading && loadMessage}
            {productElement}
            
        </>
        
    )
}
export default ProductApi;
