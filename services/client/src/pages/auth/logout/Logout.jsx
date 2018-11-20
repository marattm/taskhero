import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    componentDidMount() {
        this.props.logoutUser();
    }

    render() {
        return (
            <div class='container text-center'>
                <p>You are now logged out. Click <Link to="/account">here</Link> to log back in. </p>
            </div>
        )
    };
};

export default Logout;