import React, { Fragment } from 'react'


const Header = (props) => {
    return (
        <Fragment>
            <header class="header">
                <div class="branding">
                    <div class="container position-relative">
                        <nav class="navbar navbar-expand-lg">
                            <h1 class="site-logo">
                                <a class="navbar-brand" href="/">
                                    <span class="logo-text">
                                        Task Heroes
                                    </span>
                                </a>
                            </h1>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header