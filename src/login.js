import React from "react";
const x = JSON.parse(localStorage.getItem('user'))
class Login extends React.Component{
    
    constructor(props){
    super(props);

    this.state={
        studentid:'',
        password:''

    };
    this.handleChange= this.handleChange.bind(this);
}

    handleChange(event){
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;
    this.setState({[name]: value});
}
    reset(){
        window.location.reload(false);
    }

    submit(event){
        if(event.studentid==x.studentid){
            alert('ewam')
        }else{
            alert('a')
        }
    }

    route(){
        console.log(x)
        alert('Hello ' + x.fn + " " + x.ln)
    }
    render(){
        return(

            <div>
            <h1>Login </h1>
            <form onSubmit={this.submit}>
                <label>Username: </label>
                <input type="text" name="studentid" />
                <br></br><br></br>
                <label>Password: </label>
                <input type="password" name="password"/>
                <br></br><br></br>
                <input type='submit' value="Login"></input>
                <input type='button' value="Cancel" onClick={this.reset}></input>
                <input type='button' value="Register" onClick={this.route}></input>

            </form>
            </div>
        )
    }
}

export default Login;