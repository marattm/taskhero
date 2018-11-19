import React, { Component, Fragment } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


import History from '../../common/History'
// import Alert from '../../common/Alert'
import Count from './count/Count'
import LogForm from '../../common/LogForm'
import Dashboard from './dashboard/Dashboard'
import Settings from '../settings/AccountSettings'
import Logs from '../logs/Logs'



export default class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    render() {
        return (
            <Fragment>
                {/* <Alert
                    username={this.props.username}
                /> */}
                <div class='row'>
                    <div class='col'>
                        <h1 class='text-center'>Most Valuable Brat</h1>
                        <h1>
                            <Count
                                users={this.props.users}
                            />
                        </h1></div>
                    {this.props.isAuthenticated &&
                        <div class='col-lg'>
                            <LogForm
                                value={this.props.task}
                                handleLogFormChange={this.props.handleLogFormChange}
                                handleSubmitLogForm={this.props.handleSubmitLogForm}
                            />
                        </div>
                    }
                </div>

                <hr />
                <br />

                <div class='mx-auto' >

                    <div class='mx-auto'>
                        <Nav tabs class='text-center mx-auto'>
                            <NavItem class='text-center mx-auto'>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Overview
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Dashboard
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    History
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '4' })}
                                    onClick={() => { this.toggle('4'); }}
                                >
                                    Settings
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '5' })}
                                    onClick={() => { this.toggle('5'); }}
                                >
                                    Logs
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </div>


                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            {/* <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                </Col>
                            </Row> */}
                            <br />
                            <div class='container'>
                                <div class='row'>
                                    <div class='col-lg'>
                                        <h1>Dashboard</h1><hr />
                                        <Dashboard
                                            tasks={this.props.tasks}
                                            users={this.props.users}
                                        />
                                    </div>
                                    <div class='col-lg'>
                                        <h1>History</h1><hr />
                                        <History
                                            tasks={this.props.tasks}
                                            email={this.props.email}
                                            handleClickDel={this.props.handleClickDel}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabPane>


                        <TabPane tabId="2">
                            {/* <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row> */}
                            <br />
                            <Dashboard
                                tasks={this.props.tasks}
                                users={this.props.users}
                            />
                        </TabPane>

                        <TabPane tabId='3'>
                            <br />
                            <History
                                tasks={this.props.tasks}
                                email={this.props.email}
                                handleClickDel={this.props.handleClickDel}
                            />
                        </TabPane>

                        <TabPane tabId='4'>
                            <br />
                            <Settings
                                tasks={this.props.tasks} />
                        </TabPane>

                        <TabPane tabId='5'>
                            <br />
                            <Logs />
                        </TabPane>


                    </TabContent>
                </div>





            </Fragment>
        )
    }
}
