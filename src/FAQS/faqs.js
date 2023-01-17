import { useState } from "react";
import FaqsData from "./data";
import Style from "../FAQS/faqs.module.css"
import Faq from "./faq";
const FAQS = ()=>{
    const [faqs,setFaqs] = useState(FaqsData);
    return(
        <main className={Style.container}>
            <section className={Style.faqs}>
                <h1>FAQS</h1>
                {faqs.map((faq)=><Faq key={faq.id} {...faq} />)}
            </section>
        </main>
    )
}
export default FAQS;