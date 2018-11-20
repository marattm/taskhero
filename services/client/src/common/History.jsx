import React from 'react'
import { Table, Button, Popover, OverlayTrigger } from 'react-bootstrap'

const popoverTop = (
    <Popover id="popover-positioned-top">
        <strong>Delete</strong> task.
    </Popover>
)

const UsersList = (props) => {
    return (
        <div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Roomie</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.reverse().map((task) => {
                            return (

                                <tr key={task.user_id} class='text-center'>
                                    <td>{task.date}</td>
                                    <td>{task.username}</td>
                                    <td >
                                        <div class='row'>
                                            <div class='col'>
                                                {task.task}

                                            </div>
                                            <div class='col'>
                                                {task.user_email === props.email &&
                                                    <OverlayTrigger placement="top" overlay={popoverTop}>
                                                        <Button
                                                            bsStyle="danger"
                                                            bsSize="xsmall"
                                                            onClick={props.handleClickDel.bind(this, task)}
                                                            style={{ float: 'right' }}
                                                        >
                                                            Del
                                                        </Button>
                                                    </OverlayTrigger>
                                                }
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default UsersList