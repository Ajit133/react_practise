import { useState } from "react";
import style from "../FAQS/faq.module.css"
const Faq = ({id,title,des}) =>{
    const[toggle,setToggle] = useState(false)
    return(

          <article className={style.faq}> 
           <div>
            <h4>{title}</h4>
            <button onClick={()=>setToggle(!toggle)}>{toggle?"-":"+"}</button>
           </div>
           {toggle && <p>{des}</p>}
          </article>
    )
}
export default Faq;