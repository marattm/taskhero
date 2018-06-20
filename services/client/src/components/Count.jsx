import React from 'react';
import {Badge} from 'react-bootstrap';

const Count  = (props) => {
    return(
        <div>
            <div style={{ textAlign: "center" }}>
                {
                    props.users.map((user) => {
                        return (
                            <Badge key={user.id}>
                                {user.username} {String(user.task_counter)}
                            </Badge>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Count;