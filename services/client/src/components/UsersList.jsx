import React from 'react';

const UsersList = (props) => {
    return (
        <div>
            {
                props.users.map((user) => {
                    return (
                        <h4
                            key={user.id}
                            className="card card-body bg-light"
                        >{user.username}, {user.email}, {user.first_name}, {user.last_name}, {user.bio}, {user.gender}, {user.created}
                        </h4>
                    )
                })
            }
        </div>
    )
};

export default UsersList;
