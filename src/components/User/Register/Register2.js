import React, { Component } from "react";
import "./Register.scss";
import API from '../../../API';
import Footer from "../../Landing-Page/Footer";

class Register2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const newData = {
            [e.target.name]: e.target.value,
        };
        this.setState(newData);
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await API.post('register', this.state);   
            window.location.replace('/login');
        } catch(err) {
            alert('Something went wrong');
        }
    }

    render() {
        return (
            <div id="Register" className=" flex-wrap  ">
                <div className="box d-flex justify-content-around flex-column align-items-center">
                    <div className='login-card'>
                    <div>
                        <h1 className="title text label text-center ">Sign Up</h1>
                    </div>

                    <form className="form " onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                            <label className="form-label text label">
                                username
                            </label>
                            <input className='input'
                                name='username'
                                onChange={this.handleChange}
                                placeholder="username"
                                className="form-control input"
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                className="form-label text label"
                                value={this.state.email}
                                onChange={this.changeInput}
                            >
                                Last name
                            </label>
                            <input
                                placeholder="Last Name.."
                                className="form-control input"
                                name={"last_name"}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text label ">Password</label>
                            <input
                                type="password"
                                placeholder="Your Password.."
                                className="form-control input"
                                name={"password"}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text label ">Repeat Your Password</label>
                            <input
                                type="password"
                                placeholder="Repeat Your Password.."
                                className="form-control input"
                                name={"confirm_password"}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-danger mb-3 ">
                            Submit
                        </button>
                    </form>
                    </div >
                </div>
                <div className='text-center footer'>
                            <Footer/>
                        </div>
            </div>
        );
    }
}

export default Register2;