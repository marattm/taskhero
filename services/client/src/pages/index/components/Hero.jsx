import React, { Component, Fragment } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import LoginModal from '../../auth/login/LoginModal'

export default class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <section class="hero-section" >
                    {/* <section class="hero-section" style={{ backgroundImage: '../../../../public/assets/images/house.svg' }}> */}
                    <div class="container">
                        <div class="row figure-holder">
                            <div class="col-12 col-md-6 pt-3 pt-md-4">
                                <h2 class="site-headline font-weight-bold mt-lg-5 pt-lg-5">
                                    The best way to log household tasks!
                                </h2>
                                <div class="site-tagline mb-3">
                                    Make household tasks fun, and compete with your roommates to be the MVP of the month! Get started now!
                                </div>
                                <LinkContainer to='/account'>
                                    <div class="cta-btns">
                                        <div class="mb-4">
                                            <a
                                                class="btn btn-primary font-weight-bold theme-btn" href="">
                                                Try Task Heroes BETA for FREE
                                            </a>
                                            {/* <LoginModal
                                            buttonLabel='Try Task Heroes BETA for FREE'
                                            class="btn btn-primary font-weight-bold theme-btn"

                                            formType={'Login'}
                                            formData={this.props.formData}
                                            isAuthenticated={this.props.isAuthenticated}
                                            handleFormChange={this.props.handleFormChange}
                                            handleSubmitForm={this.props.handleSubmitForm}
                                        /> */}
                                        </div>
                                    </div>
                                </LinkContainer>

                            </div>
                        </div>
                    </div>

                </section>
            </Fragment>
        )
    }
}

