import React from 'react';

//keyword <name>     extends   
class ComponentMount extends React.Component {
    constructor(){
        super();
        this.state = {name:'',email:''};
        this.UserId = 1;
        this.Price = 1000;
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.UserId}`)
        .then(response=>response.json())
        .then(finalResult=>this.setState(finalResult))
    }

    componentDidUpdate(prevProps, prevState){
        if (this.UserId !== prevState.UserId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.UserId}`)
        .then(response=>response.json())
        .then(finalResult=>this.setState(finalResult))
        }
    }
    render(){
        const handleClick=()=>{
            const newUserState_ = this.UserId +1
            this.UserId = newUserState_
            console.log(this.UserId)
        }
        const handleClick2=()=>{
            const newUserState_ = this.Price +1
            this.Price= newUserState_
            
        }
        return(
            <>
           <h1>Using component did mount method</h1>
          <h1>name of user is ={this.state.name}</h1>
          <h1>email of user is ={this.state.email}</h1>
          <button onClick={handleClick}>Change user Id</button>
          <button onClick={handleClick2}>Change user id btn2</button>
            </>
        )
    }
}

export default ComponentMount;

