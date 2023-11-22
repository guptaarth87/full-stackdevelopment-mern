import React, {useState} from 'react'

export default function TernaryOperator() {
   
    const [age , setAge] = useState(21);
    const [popup , setPopup] = useState(false);

    const handlePopup=()=>{
         setPopup(true); 
    }

    const handleChangeAge=()=>{
        if (age==21){
            setAge(17)
        }else{
            setAge(21)
        }
    }

  return (
   <>
   <h1>Use of ternary operator</h1>
     {
        (age>18 || age==18)?
        <h1>He can vote</h1>
        :
        <h1>He cannot vote</h1>
     }
     <button onClick={handleChangeAge}>ChangeAge</button>
     <hr></hr>
     {
        (popup == true)
        ?
        <div class="popup-container">
        <div class="popup">
        <div class="popup-content">
            this is a pop up 
        <hr></hr>
        <button onClick={()=>{setPopup(false)}}>Close popup</button>
     </div>
     </div>
     </div>
     :
       <button onClick={handlePopup}>Open pop up</button>
     }
     

    


   </>
  )
}

//ternary operator
// const age=19;

// if (age>18 || age==18){
//     console.log("he can vote")
// }else{
//     console.log("he cannot vote")
// }

// (age>18 || age==18)?
// console.log("he can vote")
// :
// console.log("he cannot vote")