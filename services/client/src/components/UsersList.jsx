import React from 'react';

const UsersList = (props) => {
    return (
        <div>
            <table className='table' responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user) => {
                            return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.active.value}</td>
                                    </tr>
                                    )
                        })
                    }
                </tbody>
            </table>
        </div>

        
    )
};

export default UsersList;


// <h4
//     key={user.id}
//     className="well" >{user.username}
// </h4>