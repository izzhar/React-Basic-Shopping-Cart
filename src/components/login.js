import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css'



class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            flag: false
        };

        this.onChange = this.onChange.bind(this);

        this.submitForm = this.submitForm.bind(this);
    }



    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state

        if (this.state.username === "A" && this.state.password === "B") {
            localStorage.setItem("token", "abc")
            this.setState({
                loggedIn: true
            })
        }
        console.log(username, password);

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })


    }

    register = () => {
        this.setState({
            flag: true
        })
    }


    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (

            <div className="full">
                <div className="main">
                    <form onSubmit={this.submitForm}>
                        <h2 className="h2">Login As Admin</h2>
                        <div className="un">
                            <input
                                type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.onChange}
                                name="username"
                            />
                        </div>

                        <div className="pass">
                            <input
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                                name="password"
                            />
                        </div>

                        <input className="submit" type="submit" />

                        <h2 className="new" onClick={this.register} >New User? <a style={{ pointer: 'cursor' }}>Register Here</a> {this.state.flag ? <Redirect to='/register' /> : <Redirect to='/' />}</h2>


                    </form>


                </div>
            </div>
        );
    }
}

export default Login;