import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginAPI } from '../../services/userLoginService';


class Login extends Component {
    constructor(props) {
        super(props);
        // this.btnLogin = React.createRef();
        this.state = {
            username: '',
            password: '',
            errCode: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errCode: ''
        })

        let email = this.state.username;
        let password = this.state.password;
        try {
            let data = await handleLoginAPI(email, password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errCode: data.message
                })
            }
            else if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
            }

        } catch (error) {
            if (error) {
                if (error.response && error.response.data && error.response.data.errCode) {
                    this.setState({
                        errCode: error.response.data.message
                    })
                }
            }
        }

    }


    render() {
        return (
            <div className="bodyLogin">
                <div id="loginForm">
                    <h2 id='headerTitle'>Login</h2>
                    <div className="row">
                        <label>Username</label>
                        <input type='text'
                            placeholder='Enter your username'
                            value={this.state.username}
                            onChange={(e) => this.handleOnChangeUsername(e)}
                        />
                    </div>

                    <div className="row">
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password'
                            value={this.state.password}
                            onChange={(e) => this.handleOnChangePassword(e)}
                        />
                    </div>

                    <div className="errorLogin">
                        {this.state.errCode}
                    </div>

                    <div id="buttonLogIn" className="row">
                        <button onClick={() => this.handleLogin()}>Log in</button>
                    </div>

                    <div id="alternativeLogin">
                        <label>Or sign in with:</label>
                        <div id="iconGroup">
                            <i className="fab fa-facebook" id="facebookIcon"></i>
                            <i className="fab fa-twitter" id="twitterIcon"></i>
                            <i className="fab fa-google" id="googleIcon"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}




const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
