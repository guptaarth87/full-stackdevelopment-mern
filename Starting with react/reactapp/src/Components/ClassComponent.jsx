import React from 'react';

//keyword <name>     extends   
class ClassComponent extends React.Component {
    render(){
        //declaring a variable
        const sample_name = "mernstack";
        //here you can write your normal javascript
        const handleClick = () =>{
            alert("button clicked");
        }

        return(
            <>
           
           <button onClick={handleClick}>Click me</button>
               <h1>Hello world from component my name is {sample_name}</h1>
            </>
        )
    }
}

export default ClassComponent;