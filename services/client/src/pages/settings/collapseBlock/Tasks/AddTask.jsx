import React, { Component, Fragment } from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

export default class AddTask extends Component {
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
                <p>
                    Add a task
                          <InputGroup>
                        <Input />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary">Add</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </p>

            </Fragment>

        )
    }
}
