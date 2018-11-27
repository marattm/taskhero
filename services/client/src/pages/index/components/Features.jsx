import React, { Fragment } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Features = (props) => {
    return (
        <Fragment>
            <section id='features-section' class="features-section py-5">
                <div class="container py-lg-5">
                    <h1 class="mb-3 text-center font-weight-bold section-heading">
                        Features Highlights</h1>
                    <br />
                    <hr />
                    <br />




                    {/* <div class="row pt-5 mb-5">
                        <div class="col-12 col-md-6 col-xl-5 offset-xl-1 d-none d-md-block">
                            <img class="product-figure product-figure-1 img-fluid" src="assets/images/login.png" alt="" />
                        </div>
                        <div class="col-12 col-md-6 col-xl-5 pr-xl-3 pt-md-3">
                            <div class="card rounded border-0 shadow-lg  mb-5">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="far fa-chart-bar mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>
                                        Secure authentication
                                    </h5>
                                    <p class="card-text">List one of your product's main features here. Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                                    <a href="#">Learn more <span class="more-arrow">&rarr;</span></a>
                                </div>
                            </div>
                            <div class="card rounded border-0 shadow-lg mb-5">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="fas fa-laptop-code mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Seamless
								application</h5>
                                    <p class="card-text">List one of your product's main features here. Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim.</p>
                                    <a href="#">Learn more <span class="more-arrow">&rarr;</span></a>
                                </div>
                            </div>
                            <div class="card rounded border-0 shadow-lg">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="far fa-calendar-alt mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>SSO feature</h5>
                                    <p class="card-text">List one of your product's main features here. Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                    <a href="#">Learn more <span class="more-arrow">&rarr;</span></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                        */}


                    <div class="row">
                        <div class="col-12 col-md-6 col-xl-5 order-md-2 pr-xl-3 d-none d-md-block">
                            <img class="product-figure product-figure-2 img-fluid" src="assets/images/dashboard.png" alt="" />
                        </div>
                        <div class="col-12 col-md-6 col-xl-5 order-md-1 offset-xl-1 pt-xl-5">
                            <div class="card rounded border-0 shadow-lg  mb-5">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="fas fa-microphone-alt mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Take the lead &amp; Cooperate</h5>
                                    <p class="card-text"> Accomplishing household tasks has never been so fun and rewarding. Revisit the way you and your roommates interact with your house chores, now you can compete and set monthly rewards but you can also ask for help greater chores. Your great deeds won't be unheard!</p>
                                    {/* <a href="#">Learn more <span class="more-arrow">&rarr;</span></a> */}
                                </div>
                            </div>

                            <div class="card rounded border-0 shadow-lg  mb-5">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="fas fa-laptop-code mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i> Log any tasks anytime</h5>
                                    <p class="card-text"> It has never been easier to log tasks. Task Heroes integrates our ultimate house chores list, but of course, every household is different, so you can fully customize your dashboard to fit your need.</p>
                                    {/* <a href="#">Learn more <span class="more-arrow">&rarr;</span></a> */}
                                </div>
                            </div>

                            <div class="card rounded border-0 shadow-lg">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="far fa-calendar-alt mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Plan weekly and monthly schedule goals</h5>
                                    <p class="card-text">Doing house chores don't need to be overwhelming! Once you break down the tasks into daily, weekly, monthly, and seasonal goals, you'll see how little time it actually takes to keep your house clean. Task Heroes got your back, it allows you to take advantage of a seamless place to plan and log your household tasks.</p>
                                    {/* <a href="#">Learn more <span class="more-arrow">&rarr;</span></a> */}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row pt-5 mb-5">

                        <div class="col-12 col-md-6 col-xl-5 offset-xl-1 d-none d-md-block">
                            <img class="product-figure product-figure-1 img-fluid" src="assets/images/history.png" alt="" />
                        </div>

                        <div class="col-12 col-md-6 col-xl-5 pr-xl-3 pt-md-3">
                            <div class="card rounded border-0 shadow-lg  mb-5">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="fas fa-people-carry mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i> Fairness &amp; Motivation</h5>
                                    <p class="card-text">Who loves having a clean house? Pretty much everyone, but who wants to be a chore for everyone? Fortunately, we got your back, each task is logged and can be checked by every household member in the history tab.</p>
                                    {/* <a href="#">Learn more <span class="more-arrow">&rarr;</span></a> */}
                                </div>
                            </div>

                            <div class="card rounded border-0 shadow-lg mb-5">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="far fa-chart-bar mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Check amazing stats about your house!
							</h5>
                                    <p class="card-text">You can check your household's history, weekly, monthly and yearly stats. You will be amazed at how great you are! </p>
                                    {/* <a href="#">Learn more <span class="more-arrow">&rarr;</span></a> */}
                                </div>
                            </div>
                            <div class="card rounded border-0 shadow-lg">
                                <div class="card-body p-4">
                                    <h5 class="card-title"><i class="far fa-calendar-alt mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Easy management</h5>
                                    <p class="card-text"> We now every household is a living place where each of his members follows his passion and dream, allowing newcomers to be part of your amazing households. Hopefully, with Task Heroes you can invite new household members and add them into your household’s dashboard, as well as disable previous members.</p>
                                    {/* <a href="#">Learn more <span class="more-arrow">&rarr;</span></a> */}
                                </div>
                            </div>
                        </div>


                    </div>



                    <div class="pt-5 text-center">
                        <LinkContainer to='/account'>
                            <p>
                                <a class="btn btn-primary theme-btn theme-btn-ghost font-weight-bold" href="#">Get Started for FREE !</a>
                            </p>
                        </LinkContainer>
                    </div>



                </div>

            </section>
        </Fragment>
    )
}

export default Features