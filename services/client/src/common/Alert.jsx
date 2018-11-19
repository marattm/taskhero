
import React, { Fragment, Component } from 'react'
import { Alert } from 'reactstrap'

export default class AlertWhenLogged extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }

        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss() {
        this.setState({ visible: false })
    }

    render() {
        return (
            <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                <p>
                    Succesfully logged.
                    {this.props.username ?
                        ' Welcome back '
                        :
                        null
                    }
                    <strong style={{ textTransform: 'capitalize' }}>{this.props.username}
                    </strong>
                    {this.props.username ?
                        ' !'
                        :
                        null
                    }
                </p>
            </Alert>

        )
    }
}

