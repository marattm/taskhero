import React, { Component, Fragment } from 'react'
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap'

import TasksBlock from './Tasks/TasksBlock'

export default class CollapseBlock extends Component {
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
                <ListGroupItem>
                    <a color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.settingName}</a>
                    <Collapse isOpen={this.state.collapse}>
                        <hr />

                        <TasksBlock
                            tasks={this.props.tasks}
                        />

                    </Collapse>
                </ListGroupItem>
            </Fragment>

        )
    }
}
