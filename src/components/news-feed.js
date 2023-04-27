import React from 'react';
import LikeButton from './like-button';
import Post from './post';
import LoginButton from './loginButton';
import LoginForm from './loginForm';
import Navigation from './navigation';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container">
                <Post />
                <Post />

                <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Login Form
                </div>
                <div className="card-body">
                    <h3>Log In</h3>      
                </div>
                <div className="card-footer">
                    <Navigation />
                    < LoginForm />
                </div>
                </div>

            </div>


        )
    }
}
