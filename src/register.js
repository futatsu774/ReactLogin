import React from "react";

class Register extends React.Component{
    constructor(props){
    super(props);

    this.state={
        studentid:'',
        ln:'',
        fn:'',
        mn:'',
        college:'',
        progenroll:'',
        yl:'',
        password:'',
        cpassword:''

    };
    

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
}
    

    handleChange(event){
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
        this.setState({[name]: value});
    }
    handleSubmit(event){

        if (this.state.password === this.state.cpassword){
            localStorage.setItem('user',JSON.stringify(this.state))
        }else
        {
            alert('Password not match!!!')
        }    
    }
    reset(){
        window.reload();  
    }
    render(){
        return(

            <div>
                <h1>Register </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Student ID: </label>
                    <input type="text" name="studentid" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Last Name: </label>
                    <input type="text"name="ln" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>First Name: </label>
                    <input type="text" name="fn" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Middle Name: </label>
                    <input type="text" name="mn" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>College: </label>
                    <input type="text" name="college" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Program Enrolled: </label>
                    <input type="text" name="progenroll" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Year Level: </label>
                    <input type="text" name="yl" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Confirm Password: </label>
                    <input type="text" name="cpassword" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <input type='submit' value="Register"></input>
                    <input type='reset' value="Cancel"></input>
                </form>

                
            </div>
        )
    }
}

export default Register