import React, { Component, Fragment } from 'react'

import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Carousel from './components/Carousel'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div style={{ backgroundImage: 'https://svgsilh.com/svg_v2/309113.svg' }}>

                    <Hero
                    // formData={this.props.formData}
                    // isAuthenticated={this.props.isAuthenticated}
                    // handleFormChange={this.props.handleFormChange}
                    // handleSubmitForm={this.props.handleSubmitForm}
                    />

                    <Benefits />

                    <Features />

                    {/* <Carousel /> */}

                </div>
            </Fragment>
        )
    }
}

export default Index