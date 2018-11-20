import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavItem } from 'reactstrap'

import Form from '../../../common/AuthForm'


export default class RegisterNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <Fragment>
                {/* <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <NavItem color="primary" href='' onClick={this.toggle}>{this.props.buttonLabel}</NavItem>



                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>

                    <ModalBody>
                        <Form
                            formType={'Register'}
                            formData={this.props.formData}
                            isAuthenticated={this.props.isAuthenticated}
                            handleFormChange={this.props.handleFormChange}
                            handleSubmitForm={this.props.handleSubmitForm}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <div class='container text-center' >
                            <Button color="info" onClick={this.props.logAsGuest}>Or Sign In as a guest, to try the demo.</Button>
                        </div>
                    </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
}