import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        
            return (
                <div className="login-form">
                <h3 className="login-form__title">Log In</h3>
                <form>
                <label>
                Username:
                <input type="text" name="username" />
                </label>
                <br /><br />
                <label>
                Password:
                <input type="password" name="password" />
                </label>
                <br /><br />
                <button className='loginButton' type="submit">Log In</button> 
                <button className='forgotButton' type='submit'>Forgot Password?</button>
            </form>
            </div>
            );
    }
}