import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentid: '',
            ln: '',
            fn: '',
            mn: '',
            college: '',
            progenroll: '',
            yl: '',
            password: '',
            cpassword: ''

        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {

        if (this.state.password === this.state.cpassword) {
            localStorage.setItem('user', JSON.stringify(this.state))
        } else {
            alert('Password not match!!!')
        }
    }
    reset() {
        window.reload();
    }
    render() {
        return (

            <div className="container">
                <form onSubmit={this.submit}>
                    <h3>Log In</h3>
                    <div className="inputBox">
                        <span>Username/StudentIDnumber</span>
                        <div className="box">
                            <input type="text" name="studentid" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>LastName</span>
                        <div className="box">
                            <input type="text" name="ln" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>FirstName</span>
                        <div className="box">
                            <input type="text" name="fn" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>MiddleName</span>
                        <div className="box">
                            <input type="text" name="mn" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>College</span>
                        <div className="box">
                            <input type="text" name="college" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>ProgramEnrolled</span>
                        <div className="box">
                            <input type="text" name="progenroll" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>YearLevel</span>
                        <div className="box">
                            <input type="text" name="yl" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>Password</span>
                        <div className="box">
                            <input type="password" name="password" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <span>ConfirmPassword</span>
                        <div className="box">
                            <input type="text" name="cpassword" onChange={this.handleChange} />
                        </div>
                    </div>


                    <div className="inputBox">
                        <div className="box">
                            <input type='submit' value="Register"></input>
                            <input type='reset' value="Cancel"></input>
                            <input type='button' value="Login" onClick={()=>this.props.setpage("login")}></input>
                        </div>
                    </div>


                </form>
            </div>
        )
    }
}

export default Register


