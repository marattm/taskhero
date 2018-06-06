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
                        >
                        <ul>
                                <li><em>active:</em>{user.active}</li>
                                <li><em>bio:</em>{user.bio}</li>
                                <li><em>change_configuration:</em>{user.change_configuration}</li>
                                <li><em>created:</em>{user.created}</li>
                                <li><em>email:</em>{user.email}</li>
                                <li><em>email_confirmed:</em>{user.email_confirmed}</li>
                                <li><em>first_name:</em>{user.first_name}</li>
                                <li><em>gender:</em>{user.gender}</li>
                                <li><em>id:</em>{user.id}</li>
                                <li><em>last_name:</em>{user.last_name}</li>
                                <li><em>profile_image:</em>{user.profile_image}</li>
                                <li><em>username:</em>{user.username}</li>
                        </ul>
                        </h4>
                    )
                })
            }
        </div>
    )
};

export default UsersList;
