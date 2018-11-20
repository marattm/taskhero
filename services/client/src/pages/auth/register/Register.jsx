import React, { Component, Fragment } from 'react'
import Form from '../../../common/AuthForm'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                {/* <div class='row' >
                    <div class='col'>

                    </div>
                    <div class='col-md'> */}
                <h1>Register</h1>
                <hr />
                <Form
                    formType={'Register'}
                    formData={this.props.formData}
                    isAuthenticated={this.props.isAuthenticated}
                    handleFormChange={this.props.handleFormChange}
                    handleSubmitForm={this.props.handleSubmitForm}
                />
                {/* </div>
                </div> */}
            </Fragment>
        )
    }
}
