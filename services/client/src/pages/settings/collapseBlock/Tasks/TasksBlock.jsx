import React, { Component, Fragment } from 'react'
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap'

import AddTask from './AddTask'
import TasksList from './TasksList'

export default class TasksBlock extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = { collapse: false }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        return (

            <Fragment>


                <AddTask />
                <hr />
                <TasksList
                    tasks={this.props.tasks}
                />


            </Fragment>

        )
    }
}
