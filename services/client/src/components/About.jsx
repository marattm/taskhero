import React, { Component } from 'react';

class About extends Component {

    componentDidMount() {
        this.props.ping();
    }

    render() {
        return (
            <div>
                <button 
                    className="btn btn-info btn-lg"
                    onClick={(event) => this.props.ping(event)}
                >
                    Ping!
                </button>
                <br /><br />
                <p>{this.props.pingData.status}</p>
                <p>{this.props.pingData.message}</p>
            </div>
        )
    };
}




export default About;