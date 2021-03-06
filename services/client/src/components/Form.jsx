import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Form = (props) => {

    if (props.isAuthenticated) {
        return <Redirect to='/' />;
    }

    return (
        <div> 
            <h1>{props.formType}</h1> 
            <br /><br />
            <form onSubmit={(event) => props.handleSubmitForm(event)}> 
                {props.formType === 'Register' &&
                    <div className="form-group"> 
                        <input
                            name="username"
                            className="form-control input-lg" 
                            type="text"
                            placeholder="Enter a username"
                            required 
                            value={props.formData.username} 
                            onChange={props.handleFormChange}
                        />
                    </div>
                }
                
                <div className="form-group"> 
                    <input
                        name="email"
                        className="form-control input-lg" 
                        type="email"
                        placeholder="Enter an email address"
                        required 
                        value={props.formData.email} 
                        onChange={props.handleFormChange}
                    />
                </div>
                
                <div className="form-group"> 
                    <input
                        name="password"
                        className="form-control input-lg"
                        type="password"
                        placeholder="Enter a password"
                        required
                        value={props.formData.password}
                        onChange={props.handleFormChange}
                    />
                </div>
                
                {/* <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    value="Submit"
                /> */}
                <Button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    value="Submit"
                >
                    Submit
                </Button>



            </form>
        </div>)
};

export default Form;