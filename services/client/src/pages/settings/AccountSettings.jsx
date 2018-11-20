import React, { Component, Fragment } from 'react'
import { Nav, NavItem, NavLink, ListGroup } from 'reactstrap'

import CollapseBlock from './collapseBlock/CollapseBlock'

export default class Settings extends Component {
    render() {
        return (
            <Fragment>

                <ListGroup>
                    <CollapseBlock
                        settingName='Tasks'
                        tasks={this.props.tasks}
                    />
                    {/* <br />
                    <Collapse
                        settingName='Roommates'
                    />
                    <br />
                    <Collapse
                        settingName='Condo'
                    />
                    <br />
                    <Collapse
                        settingName='Other'
                    /> */}
                </ListGroup>
            </Fragment>
        )
    }
}