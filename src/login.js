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
    this.setState({...this.state,[name]: value});
    console.log (this.state)
}
    reset(){
        window.location.reload(false);
    }

    submit(event){
        if
            (this.state.studentid === x.studentid && this.state.password===x.password)
                { alert(`hello ${x.firstname}`) }
        else { alert('invalid credentials') }
    }

    route(){
        console.log(x)
        alert('Hello ' + x.fn + " " + x.ln)
    }
    render(){
        return(

            <div className="container">
            <form onSubmit={this.submit}>
            <h3>Log In</h3>
            <div className="inputBox">
                <span>Username</span>
                <div className="box">
                <div className="icon">
                    {/* <ion-icon name="person"></ion-icon> */}
                </div>
                <input onChange={this.handleChange} type="text" name="studentid" />

                </div>
            </div>

            <div className="inputBox">
                <span>Password</span>
                <div className="box">
                    <div className="icon">
                    {/* <ion-icon name="lock-closed"></ion-icon> */}
                </div>
                <input onChange={this.handleChange} type="password" name="password"/>
                </div>
            </div>

            <label>
                <input type="checkbox"/>Remember me
            </label>

            <div className="inputBox">
                <div className="box">
                    <input type='submit' value="Login"></input>
                    <input type='button' value="Cancel" onClick={this.reset}></input>
                    <input type='button' value="Register" onClick={()=>this.props.setpage("register")}></input>
                </div>
            </div>

            <a href="#" className="forgot">Forgot the password?</a>


            </form>
            </div>
        )
    }
}

export default Login;

