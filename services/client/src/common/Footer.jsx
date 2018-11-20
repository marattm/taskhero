import React, { Component, Fragment } from 'react'


export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <footer class="footer theme-bg-primary" style={{ backgroundColor: 'transparent' }}>
                    <div class="footer-bottom text-center pb-5">
                        <small class="copyright">
                            <hr />

                            Made with <i class="fas fa-heart" style={{ color: "#fb866a" }}></i> by <a href='https://github.com/marattm'>Marat T Monnié</a> • <a href="https://github.com/marattm/taskhero"> <i class="fab fa-github-square" style={{ color: "#722F8D" }}></i> Source </a>

                            {/* • <i class="fas fa-pencil-alt" style={{ color: "green" }}></i><a href="https://themes.3rdwavemedia.com" target="_blank"> Xiaoying Riley </a> */}

                            • <a href=''> <i class="fas fa-at" style={{ color: "orange" }}></i> task.heroes.app@gmail.com</a>

                        </small>
                    </div>
                </footer>
            </Fragment>
        )
    }
}