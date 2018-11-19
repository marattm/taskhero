import React, { Component, Fragment } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Redirect } from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import LoginNav from '../pages/auth/login/LoginNav'
import RegisterNav from '../pages/auth/register/RegisterNav'

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.someValue !== this.props.someValue) {
            //Perform some operation
            if (!this.props.isAuthenticated) {
                <Redirect to='/dashboard' />
            }
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Fragment>
                <Navbar expand="md" className='container'>
                    <NavbarBrand href='' >
                        <LinkContainer to="/">
                            <span>{this.props.title}</span>
                        </LinkContainer>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.isAuthenticated &&
                                <Fragment>
                                    <LinkContainer to="/dashboard">
                                        <NavItem>
                                            <NavLink href=''>Dashboard</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                </Fragment>
                            }
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {!this.props.isAuthenticated ? 'Sign In / Up' : this.props.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {!this.props.isAuthenticated &&
                                        <Fragment>
                                            <DropdownItem >
                                                <LoginNav
                                                    buttonLabel='Sign In'
                                                    formData={this.props.formData}
                                                    isAuthenticated={this.props.isAuthenticated}
                                                    handleFormChange={this.props.handleFormChange}
                                                    handleSubmitForm={this.props.handleSubmitForm}
                                                    username={this.props.username}
                                                    logAsGuest={this.props.logAsGuest}
                                                />
                                            </DropdownItem>
                                            <DropdownItem>
                                                <RegisterNav
                                                    buttonLabel='Sign Up'
                                                    formData={this.props.formData}
                                                    isAuthenticated={this.props.isAuthenticated}
                                                    handleFormChange={this.props.handleFormChange}
                                                    username={this.props.username}
                                                    handleSubmitForm={this.props.handleSubmitForm}
                                                    logAsGuest={this.props.logAsGuest}
                                                />
                                            </DropdownItem>
                                        </Fragment>}
                                    {this.props.isAuthenticated &&
                                        <Fragment>
                                            <DropdownItem>
                                                <LinkContainer to="/profile">
                                                    <NavItem >
                                                        <NavLink href='' >Profile</NavLink>
                                                    </NavItem>
                                                </LinkContainer>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <LinkContainer to="/settings">
                                                    <NavItem>
                                                        <NavLink href='' >Settings</NavLink>
                                                    </NavItem>
                                                </LinkContainer>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <LinkContainer to="/logout">
                                                    <NavItem>
                                                        <NavLink href='' >Sign Out</NavLink>
                                                    </NavItem>
                                                </LinkContainer>

                                            </DropdownItem>
                                        </Fragment>}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>
        );
    }
}