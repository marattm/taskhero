import React, { Component, Fragment } from 'react'
import { ButtonGroup, Button } from 'reactstrap'

import tasksList from '../../../../services/utils'

export default class TasksList extends Component {
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
                {tasksList().map(task => {
                    return (

                        <div class='row'>
                            <div class='col'>
                                {task.name}
                            </div>
                            <div class='col'>
                                < ButtonGroup >
                                    <Button color='success small' active>On</Button>
                                    <Button color='secondary'>Off</Button>
                                </ButtonGroup>
                            </div>
                            <div class='col'>
                                < ButtonGroup >
                                    <Button color='danger'>Delete</Button>
                                </ButtonGroup>
                            </div>
                        </div>

                    )
                })}
            </Fragment>
        )
    }
}
