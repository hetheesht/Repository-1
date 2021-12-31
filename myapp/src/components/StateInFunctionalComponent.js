import React,{useState} from 'react'

export default function StateInFunctionalComponent() {


    let [name,updateName]=useState("Ank");
    let [count,updateCount]=useState("5")
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Ankitha")}} 
                onMouseLeave={()=>{updateName("Ank")}}>
                {name}
            </h1>
            <h1  onMouseOver={()=>updateCount(count-1)}
                onMouseLeave={()=>updateCount(count+1)}>
              {count}
            </h1>
            
        </div>
    )
}
