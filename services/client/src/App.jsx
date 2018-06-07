import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'

import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import About from './components/About';
import NavBar from './components/NavBar';
import Form from './components/Form';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            username: '',
            email: '',
            title: 'myTrainer.strg',
            formData: {
                username: '', 
                email: '', 
                password: ''
            }
        };
        this.addUser = this.addUser.bind(this);
        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    };

    componentDidMount() {
        this.getUsers();
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
    register(event) {
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
                    username: '',
                    email: '',
                });
                // console.log(this.getUsers());
                console.log(res.data);
            })
            .catch((err) => { console.log(err); });
    };
    ping() {
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users/ping`)
            .then((res) => { console.log(res); })
            .catch((err) => { console.log(err); });
    };
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
    render() {
        return (
            <div>
                <NavBar
                    title={this.state.title}
                />
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-6"> <br />
                            <Switch>

                                <Route exact path='/register' render={() => (
                                    <Form
                                        formType={'Register'} 
                                        formData={this.state.formData}
                                        handleFormChange={this.handleFormChange}                                        
                                        register={this.register}
                                    />)} 
                                />

                                <Route exact path='/login' render={() => (
                                    <Form
                                        formType={'Login'} 
                                        formData={this.state.formData}
                                    />)} 
                                />

                                <Route exact path='/' render={() => (
                                    <div>
                                        <h1>Users</h1> <hr /><br />
                                        <AddUser
                                            username={this.state.username}
                                            email={this.state.email}
                                            handleChange={this.handleChange}
                                            addUser={this.addUser}
                                        /> <br />
                                        <UsersList
                                            users={this.state.users} />
                                    </div>
                                )} />

                                <Route
                                    exact path='/about' component={About}
                                />

                                

                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default App;