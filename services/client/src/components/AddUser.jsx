import React from 'react';

const AddUser = (props) => {
    return (
        <form onSubmit={(event) => props.addUser(event)}>
            <div className="form-group">
                <input
                    name="username"
                    className="form-control input-lg"
                    type="text"
                    placeholder="Enter a username"
                    required
                    value={props.username}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    name="email"
                    className="form-control input-lg"
                    type="email"
                    placeholder="Enter an email address"
                    required
                    value={props.email}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    name="first_name"
                    className="form-control input-lg"
                    type="text"
                    placeholder="Enter your first name"
                    required
                value={props.first_name}
                onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    name="last_name"
                    className="form-control input-lg"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    value={props.last_name}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <textarea
                    name="bio"
                    className="form-control input-lg"
                    type="text"
                    placeholder="Enter your bio"
                    required
                    value={props.bio}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    name="gender"
                    className="form-control input-lg"
                    type="text"
                    placeholder="Enter your gender"
                    required
                    value={props.gender}
                    onChange={props.handleChange}
                />
            </div>
            <input
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                value="Submit"
            />
        </form>
    )
};

export default AddUser;
