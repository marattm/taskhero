import React, { Component, Fragment } from 'react'
import { Badge } from 'react-bootstrap'

export default class Count extends Component {

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: "center" }}>
                    {
                        this.props.users.map((user) => {
                            return (
                                <Badge key={user.id}>
                                    {user.username} {String(user.task_counter)}
                                </Badge>
                            )
                        })
                    }
                </div>
            </Fragment >
        )
    }
}
