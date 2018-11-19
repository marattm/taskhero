import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import Form from '../../../common/AuthForm'
import LoginModal from '../../auth/login/LoginModal'


export default class RegisterModal extends Component {
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
                <a color="primary" class={this.props.class} onClick={this.toggle}>{this.props.buttonLabel}</a>


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

                    {/* <ModalFooter>
                        <LoginModal
                            buttonLabel='Already have an account'
                            onClick={this.toggle}

                            formType={'Login'}
                            formData={this.props.formData}
                            isAuthenticated={this.props.isAuthenticated}
                            handleFormChange={this.props.handleFormChange}
                            handleSubmitForm={this.props.handleSubmitForm}
                        />
                    </ModalFooter> */}
                </Modal>
            </Fragment>
        )
    }
}