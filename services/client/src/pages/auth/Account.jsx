import React, { Component, Fragment } from 'react'
import { Button, Fade, Jumbotron } from 'reactstrap'

import Login from './login/Login'
import Register from './register/Register'
import { Redirect } from 'react-router'

export default class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fadeIn: true,
            // fadeInLogin: true,
            // fadeInRegister: false,
        }
        this.toggleLogin = this.toggleLogin.bind(this)
        this.toggleRegister = this.toggleRegister.bind(this)
    }

    render() {
        if (this.props.isAuthenticated) {
            console.log(this.props.isAuthenticated, 'account');

            // window.location.hash = 'dashboard'
            return <Redirect to='/dashboard' />
        }
        return (
            <Fragment>
                <div class='row'>
                    <div class='col-lg text-center'>
                        <Fade in={!this.state.fadeIn} tag="h5" className="mt-3">
                            {!this.state.fadeIn &&
                                <Register
                                    formType={'Register'}
                                    formData={this.props.formData}
                                    isAuthenticated={this.props.isAuthenticated}
                                    handleFormChange={this.props.handleFormChange}
                                    handleSubmitForm={this.props.handleSubmitForm}
                                />
                            }
                        </Fade>
                        < Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                            {this.state.fadeIn &&
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <Button color="primary" onClick={this.toggleLogin}>Create an account</Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Fade>


                    </div>
                    <div class='col-lg text-center' >

                        <Fade in={!this.state.fadeIn} tag="h5" className="mt-3">
                            {!this.state.fadeIn &&
                                <div class="container" >
                                    <div class="row justify-content-md-center">
                                        <div class="col-12 text-center">
                                            <Button color="primary" onClick={this.toggleRegister}>Already have an account</Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Fade>
                        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                            {this.state.fadeIn &&
                                <Login
                                    formType={'Login'}
                                    formData={this.props.formData}
                                    isAuthenticated={this.props.isAuthenticated}
                                    handleFormChange={this.props.handleFormChange}
                                    handleSubmitForm={this.props.handleSubmitForm}
                                />
                            }
                        </Fade>
                    </div>
                </div>
                <div class='container text-center' >
                    <Jumbotron style={{ backgroundColor: 'transparent' }}>
                        <Button color="info" onClick={this.props.logAsGuest}>Or Sign In as a guest, to try the demo.</Button>
                    </Jumbotron>
                </div>
            </Fragment >
        )
    }

    toggleLogin() {
        this.setState({
            fadeIn: !this.state.fadeIn
        })
    }
    toggleRegister() {
        this.setState({
            fadeIn: !this.state.fadeIn
        })
    }
}