import React, { Component, Fragment } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Form extends Component {

    redirect() {
        // return <Redirect to='/dashboard' />
        window.location.hash = 'dashboard'
        console.log('redirect');
    }



    render() {

        // if (!this.props.isAuthenticated) {
        //     <Redirect to='/dashboard' />
        // }

        return (
            <Fragment>
                {/* <h1>{this.props.formType}</h1>
                    <br /><br /> */}
                <form onSubmit={(event) => this.props.handleSubmitForm(event, this.props.formType.toLowerCase())}>
                    {this.props.formType === 'Register' &&
                        <div className="form-group">
                            <input
                                name="username"
                                className="form-control input-lg"
                                type="text"
                                placeholder="Enter a username"
                                required
                                value={this.props.formData.username}
                                onChange={this.props.handleFormChange}
                            />
                        </div>
                    }

                    <div className="form-group">
                        <input
                            name="email"
                            className="form-control input-lg"
                            type="email"
                            placeholder="Enter an email address"
                            required
                            value={this.props.formData.email}
                            onChange={this.props.handleFormChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            name="password"
                            className="form-control input-lg"
                            type="password"
                            placeholder="Enter a password"
                            required
                            value={this.props.formData.password}
                            onChange={this.props.handleFormChange}
                        />
                    </div>
                    {/* <LinkContainer to='/dashboard'> */}
                    <Button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                        value="Submit"
                        onClick={this.redirect.bind(this)}
                    >
                        Submit
             {/* <Redirect to='/dashboard' /> */}

                    </Button>
                    {/* </LinkContainer> */}
                </form>
            </Fragment>
        )
    }
    // }
}
