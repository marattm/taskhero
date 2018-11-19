import React, { Fragment } from 'react'


const Benefits = (props) => {
    return (
        <Fragment>
            <section class="benefits-section py-5">
                <div class="container py-lg-5">
                    <h3 class="mb-5 text-center font-weight-bold">
                        Change the way you clean your house, you're the new Heroes !</h3>
                    <div class="row">
                        <div class="item col-12 col-lg-4">
                            <div class="item-inner text-center p-3 p-lg-5">
                                <img class="mb-3" src="assets/images/icon-target.svg" alt="" />
                                <h5>
                                    <p>Let everyone</p>
                                    <p>knows you're</p>
                                    <p>the Hero !</p>
                                </h5>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div class="item col-12 col-lg-4">
                            <div class="item-inner text-center p-3 p-lg-5">
                                <img class="mb-3" src="assets/images/icon-rocket.svg" alt="" />
                                <h5>
                                    <p>Easy to use</p>
                                    <p>Quick to log</p>
                                    <p>And fun !</p>
                                </h5>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div class="item col-12 col-lg-4">
                            <div class="item-inner text-center p-3 p-lg-5">
                                <img class="mb-3" src="assets/images/icon-cogs.svg" alt="" />
                                <h5>
                                    <p>Customizable</p>
                                    <p>Fully featured</p>
                                    <p>Flexible</p>
                                </h5>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="pt-3 text-center">
                        <a class="btn btn-primary theme-btn theme-btn-ghost font-weight-bold" href="#features-section">Learn More</a>
                    </div> */}
                </div>
            </section>
        </Fragment>
    )
}

export default Benefits