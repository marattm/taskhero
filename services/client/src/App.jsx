import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Route, HashRouter as Router } from 'react-router-dom'

import NavBar from './common/NavBar'
import Index from './pages/index'
import Account from './pages/auth/Account'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Logout from './pages/auth/logout/Logout'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Settings from './pages/settings/Settings'
import Footer from './common/Footer'

class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            tasks: [],
            username: '',
            email: '',
            active: '',
            admin: '',
            title: 'Task Heroes',
            formData: {
                username: '',
                email: '',
                password: ''
            },
            isAuthenticated: false,
            pingData: {
                message: 'click on the button',
                status: 'waiting for a message..'
            },
            task: "empty_dishwasher",
            task_id: ''
        }
        // this.addUser = this.addUser.bind(this)
        this.authenticateUser = this.authenticateUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
        this.handleSubmitForm2 = this.handleSubmitForm2.bind(this)
        this.handleFormChange = this.handleFormChange.bind(this)
        this.ping = this.ping.bind(this)
        this.logoutUser = this.logoutUser.bind(this)
        this.handleLogFormChange = this.handleLogFormChange.bind(this)
        this.handleSubmitLogForm = this.handleSubmitLogForm.bind(this)
        this.handleClickDel = this.handleClickDel.bind(this)
        this.logAsGuest = this.logAsGuest.bind(this)
    }

    componentDidMount() {
        this.getUsers()
        this.getTasks()
        // this.authenticateUser()
    }

    authenticateUser() {
        console.log('hello1')
        if (window.localStorage.getItem('auth_token')) {
            console.log('hello2')
            let data = {
                authToken: window.localStorage.getItem('auth_token')
            }
            axios.post(`/user`, data)
                .then(res => {
                    console.log(res);
                })
        } else {
            console.log('noting')
        }
    }

    getUsers() {
        axios.get(`users`)
            .then((res) => { this.setState({ users: res.data.data.users }) })
            .catch((err) => { console.log(err) })
    }

    // addUser(event) {
    //     event.preventDefault()
    //     const data = {
    //         username: this.state.username,
    //         email: this.state.email
    //     }
    //     axios.post(`users`, data)
    //         .then((res) => {
    //             this.getUsers()
    //             this.setState({
    //                 formData: { username: '', email: '', password: '' },
    //                 username: '',
    //                 email: '',
    //             })
    //         })
    //         .catch((err) => { console.log(err) })
    // }

    handleSubmitForm(event) {
        event.preventDefault()
        const formType = window.location.href.split('/').reverse()[0]
        let data = {
            email: this.state.formData.email,
            password: this.state.formData.password,
        }
        if (formType === 'register') {
            data.username = this.state.formData.username
        }
        axios.post(`auth/${formType}`, data)
            .then((res) => {
                this.getUsers()
                this.setState({
                    formData: { username: '', email: '', password: '' },
                    username: this.state.formData.username,
                    email: this.state.formData.email,
                    isAuthenticated: true
                })
                localStorage.setItem("auth_token", res.data.auth_token)
            })
            .catch((err) => { console.log(err) })
    }
    handleSubmitForm2(event, formType) {
        event.preventDefault()
        let data = {
            email: this.state.formData.email,
            password: this.state.formData.password,
        }
        if (formType === 'register') {
            data.username = this.state.formData.username
        }
        axios.post(`auth/${formType}`, data)
            .then((res) => {
                this.getUsers()
                this.setState({
                    formData: { username: '', email: '', password: '' },
                    username: res.data.username,
                    email: res.data.email,
                    isAuthenticated: true
                })
                localStorage.setItem("auth_token", res.data.auth_token)
                window.location.hash = 'dashboard'
            })
            .catch((err) => { console.log(err) })
    }
    ping() {
        axios.get(`users/ping`)
            .then((res) => {
                if (this.state.pingData.status === "success") {
                    this.setState({
                        pingData: {
                            message: 'click on the button',
                            status: 'waiting for a message..'
                        }
                    })
                } else {
                    this.setState({
                        pingData: {
                            message: res.data.message,
                            status: res.data.status
                        }
                    })
                }
            })
            .catch((err) => { console.log(err) })
    }
    logoutUser() {
        window.localStorage.clear()
        this.setState({ isAuthenticated: false, username: '', email: '' })
    }
    handleChange(event) {
        const obj = {}
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }
    handleFormChange(event) {
        const obj = this.state.formData
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }
    handleLogFormChange(event) {
        this.setState({ task: event.target.value })
    }
    handleSubmitLogForm(event) {
        event.preventDefault()
        let data = {
            email: this.state.email,
            task: this.state.task
        }
        return axios.post(`tasks/task_log`, data)
            .then((res) => {
                this.getUsers()
                this.getTasks()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    getTasks() {
        axios.get(`tasks`)
            .then((res) => { this.setState({ tasks: res.data.data.tasks }) })
            .catch((err) => { console.log(err) })
    }
    handleClickDel(data) {
        axios.post(`tasks/del`, data)
            .then((res) => {
                this.getUsers()
                this.getTasks()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    logAsGuest() {
        console.log('logging as guest')
        axios.get(`auth/guest`)
            .then(res => {
                console.log(res)
                this.getUsers()
                this.setState({
                    formData: { username: '', email: '', password: '' },
                    username: res.data.username,
                    email: res.data.email,
                    isAuthenticated: true
                })
                localStorage.setItem("auth_token", res.data.auth_token)
                window.location.hash = 'dashboard'
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Router>
                <div>
                    {/* <button onClick={this.authenticateUser}>
                        Check Id
                    </button> */}
                    <NavBar title={this.state.title}
                        isAuthenticated={this.state.isAuthenticated}
                        username={this.state.username}
                        logAsGuest={this.logAsGuest}
                        formData={this.state.formData}
                        isAuthenticated={this.state.isAuthenticated}
                        handleFormChange={this.handleFormChange}
                        handleSubmitForm={this.handleSubmitForm2}
                    />

                    <div className="container" id='app'>
                        <div className="container">
                            {/* <div className="row"> */}
                            <div className=""> <br />
                                {/* <div className="col-md-6"> <br /> */}

                                <Route exact path='/' render={() => (
                                    <Index
                                        formType={'Login'}
                                        formData={this.state.formData}
                                        isAuthenticated={this.state.isAuthenticated}
                                        handleFormChange={this.handleFormChange}
                                        handleSubmitForm={this.handleSubmitForm2}
                                    />
                                )} />
                                {/* {!this.state.isAuthenticated && */}
                                <Route path='/account' render={() => (
                                    <Account
                                        formData={this.state.formData}
                                        isAuthenticated={this.state.isAuthenticated}
                                        handleFormChange={this.handleFormChange}
                                        handleSubmitForm={this.handleSubmitForm2}
                                        logAsGuest={this.logAsGuest}
                                    />
                                )} />
                                {/* } */}

                                {!this.state.isAuthenticated &&
                                    <Fragment>

                                        <Route path='/register' render={() => (
                                            <Register
                                                formData={this.state.formData}
                                                isAuthenticated={this.state.isAuthenticated}
                                                handleFormChange={this.handleFormChange}
                                                handleSubmitForm={this.handleSubmitForm2}
                                            />
                                        )} />

                                        <Route path='/login' render={() => (
                                            <Login
                                                formData={this.state.formData}
                                                isAuthenticated={this.state.isAuthenticated}
                                                handleFormChange={this.handleFormChange}
                                                handleSubmitForm={this.handleSubmitForm2}
                                            />
                                        )} />
                                    </Fragment>
                                }

                                {this.state.isAuthenticated &&
                                    <Route path='/dashboard' render={() => (
                                        <Home
                                            users={this.state.users}
                                            username={this.state.username}
                                            isAuthenticated={this.state.isAuthenticated}
                                            value={this.state.task}
                                            handleLogFormChange={this.handleLogFormChange}
                                            handleSubmitLogForm={this.handleSubmitLogForm}
                                            tasks={this.state.tasks}
                                            users={this.state.users}
                                            email={this.state.email}
                                            handleClickDel={this.handleClickDel}
                                            tasks={this.state.tasks}
                                        />
                                    )} />
                                }

                                {this.state.isAuthenticated &&
                                    <Route path='/profile' render={() => (
                                        <Profile />
                                    )} />
                                }

                                {this.state.isAuthenticated &&
                                    <Route path='/settings' render={() => (
                                        <Settings />
                                    )} />
                                }

                                <Route
                                    path='/logout' render={() => (
                                        <Logout
                                            logoutUser={this.logoutUser}
                                            isAuthenticated={this.state.isAuthenticated}
                                        />)
                                    }
                                />

                                <Footer />

                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App