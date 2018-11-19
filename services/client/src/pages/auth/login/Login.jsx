import React, { Component, Fragment } from 'react'
import Form from '../../../common/AuthForm'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div >

                    {/* <div class='row' >
                    <div class='col-md'> */}
                    <h1>Login</h1>
                    <hr />
                    <Form
                        formType={'Login'}
                        formData={this.props.formData}
                        isAuthenticated={this.props.isAuthenticated}
                        handleFormChange={this.props.handleFormChange}
                        handleSubmitForm={this.props.handleSubmitForm}
                    />
                    {/* </div>
                    <div class='col'></div>
                </div> */}
                </div>
            </Fragment>
        )
    }
}
