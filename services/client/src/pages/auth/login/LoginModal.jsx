import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import Form from '../../../common/AuthForm'
import RegisterModal from '../../auth/register/RegisterModal'


export default class LoginModal extends Component {
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
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>

                    <ModalBody>
                        <Form
                            formType={'Login'}
                            formData={this.props.formData}
                            isAuthenticated={this.props.isAuthenticated}
                            handleFormChange={this.props.handleFormChange}
                            handleSubmitForm={this.props.handleSubmitForm}
                        />
                    </ModalBody>

                    {/* <ModalFooter>
                        <RegisterModal
                            buttonLabel='Create an account'
                            onClick={this.toggle}

                            formType={'Register'}
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