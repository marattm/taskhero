import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'

import History from './components/History';
import About from './components/About';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Logout from './components/Logout';
import UserStatus from './components/UserStatus';
import Count from './components/Count';
import Dashboard from './components/Dashboard';
import LogForm from './components/LogForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            tasks: [],
            username: '',
            email: '',
            active: '',
            admin:'',
            title: 'Task Hero',
            formData: {
                username: '', 
                email: '', 
                password: ''
            },
            isAuthenticated: false,
            pingData: {
                message:'click on the button',
                status:'waiting for a message..'
            },
            task:"empty_dishwasher",
            task_id:''
        };
        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.ping = this.ping.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.handleLogFormChange = this.handleLogFormChange.bind(this);
        this.handleSubmitLogForm = this.handleSubmitLogForm.bind(this);
        this.handleClickDel = this.handleClickDel.bind(this);
    };
    
    componentDidMount() {
        this.getUsers();
        this.getTasks();
        // this.ping();
    };

    getUsers() {
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
            .then((res) => { this.setState({ users: res.data.data.users }); })
            .catch((err) => { console.log(err); });
    };
    addUser(event) {
        event.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email
        };
        axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
            .then((res) => {
                this.getUsers();
                this.setState({ 
                    formData: { username: '', email: '', password: '' },
                    username: '',
                    email: '',
                });
            })
            .catch((err) => { console.log(err); });
    };
    handleSubmitForm(event) {
        event.preventDefault();
        const formType = window.location.href.split('/').reverse()[0];
        let data = {
            email: this.state.formData.email,
            password: this.state.formData.password,
            };
            if (formType === 'register') {
                data.username = this.state.formData.username;
            }
        axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/auth/${formType}`, data)
            .then((res) => {
                this.getUsers();
                this.setState({
                    formData: { username: '', email: '', password: '' },
                    username: this.state.formData.username,
                    email: this.state.formData.email,
                    isAuthenticated: true
                });
                // console.log(res.data);
                localStorage.setItem("auth_token", res.data.auth_token);
                // console.log("isAuthenticated: " + this.state.isAuthenticated);
                // console.log(this.state);

            })
            .catch((err) => { console.log(err); });
    };
    ping() {
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users/ping`)
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
            .catch((err) => { console.log(err); });
    };
    logoutUser() {
        window.localStorage.clear();
        this.setState({isAuthenticated: false, username:'', email:''});
        // console.log(this.state);
        
    }
    handleChange(event) {
        const obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    };
    handleFormChange(event) {
        const obj = this.state.formData;
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    };
    handleLogFormChange(event) {
        this.setState({ task: event.target.value });
    };
    handleSubmitLogForm(event) {
        event.preventDefault();
        let data = {
            email: this.state.email,
            task: this.state.task
        }
        return axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/tasks/task_log`, data)
            .then((res) => {
                this.getUsers();
                this.getTasks();
                // console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    getTasks() {
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/tasks`)
            .then((res) => { this.setState({ tasks: res.data.data.tasks }); })
            .catch((err) => { console.log(err); });
    };
    handleClickDel(data) {
        axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/tasks/del`, data)
            .then((res) => {
                this.getUsers();
                this.getTasks();
                // console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <NavBar
                    title={this.state.title}
                    isAuthenticated={this.state.isAuthenticated}
                />
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-6"> <br />
                            <Switch>

                                <Route exact path='/register' render={() => (
                                    <Form
                                        formType={'Register'} 
                                        formData={this.state.formData}
                                        isAuthenticated={this.state.isAuthenticated}
                                        handleFormChange={this.handleFormChange}
                                        handleSubmitForm={this.handleSubmitForm}
                                    />)} 
                                />

                                <Route exact path='/login' render={() => (
                                    <Form
                                        formType={'Login'} 
                                        formData={this.state.formData}
                                        isAuthenticated={this.state.isAuthenticated}
                                        handleFormChange={this.handleFormChange}
                                        handleSubmitForm={this.handleSubmitForm}
                                    />)} 
                                />

                                <Route exact path='/' render={() => (
                                    <div>
                                        <h1>MVP Brat</h1><hr />
                                        <Count
                                            users={this.state.users}
                                        />
                                        <h1>Dashboard</h1><hr/>
                                        { this.state.isAuthenticated &&
                                            <LogForm
                                            value={this.state.task}
                                            handleLogFormChange={this.handleLogFormChange}
                                            handleSubmitLogForm={this.handleSubmitLogForm}
                                            />
                                        }
                                        <br />
                                        <Dashboard
                                            tasks={this.state.tasks}
                                            users={this.state.users}
                                        />
                                        <h1>History</h1><hr/>
                                        <History
                                            tasks={this.state.tasks}
                                            email={this.state.email}
                                            handleClickDel={this.handleClickDel}
                                        />
                                    </div>
                                )} />

                                {/* <Route
                                    exact path='/about' render={() => (
                                        <About 
                                            pingData={this.state.pingData}
                                            ping={this.ping}
                                        />
                                    )}

                                /> */}

                                <Route 
                                    exact path='/logout' render={() => (
                                        <Logout
                                            logoutUser={this.logoutUser}
                                            isAuthenticated={this.state.isAuthenticated}
                                        />)
                                    }
                                />

                                {/* <Route exact path='/status' render={() => (
                                    <UserStatus
                                        isAuthenticated={this.state.isAuthenticated}
                                    />
                                )} /> */}

                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default App;