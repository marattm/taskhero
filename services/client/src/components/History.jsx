import React from 'react';
import { Table, Button, Popover, OverlayTrigger } from 'react-bootstrap';

const popoverTop = (
    <Popover id="popover-positioned-top">
        <strong>Delete</strong> task.
    </Popover>
    );

const UsersList = (props) => {
    return (
        <div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Brat</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map((task) => {
                            return (
                                <tr key={task.user_id}>
                                    <td>{task.date}</td>
                                    <td>{task.username}</td>
                                    <td>{task.task}</td>
                                        {task.user_email === props.email &&
                                        <td style={{ textAlign: "center" }}>
                                        <OverlayTrigger  placement="top" overlay={popoverTop}>
                                            <Button
                                                bsStyle="danger"
                                                bsSize="xsmall"
                                                onClick={props.handleClickDel.bind(this, task)}
                                            >
                                                Del
                                            </Button>
                                        </OverlayTrigger>
                                        </td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
};

export default UsersList;