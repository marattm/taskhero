import React, { Component, Fragment } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Testimonials extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        const testimonials = [
            {
                title: 'Amazing App!',
                stars: 5,
                critique: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                img: 'assets/images/users/user-1.jpg',
                name: 'Tony Carter',
                city: 'London, UK',
                id: 1
            },
            {
                title: 'Marvellous!',
                stars: 5,
                critique: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                img: 'assets/images/users/user-2.jpg',
                name: 'Helen Owens',
                city: 'New York, US',
                id: 2
            },
            {
                title: 'Actually Impressive!',
                stars: 5,
                critique: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                img: 'assets/images/users/user-3.jpg',
                name: 'Scott Rivera',
                city: 'Florida, US',
                id: 3
            },
            {
                title: 'Total Game Changer!',
                stars: 5,
                critique: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                img: 'assets/images/users/user-4.jpg',
                name: 'Charles Brewer',
                city: 'San Francisco, US',
                id: 4
            },
            {
                title: 'Just Perfect!',
                stars: 5,
                critique: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                img: 'assets/images/users/user-5.jpg',
                name: 'Deborah Reed',
                city: 'Paris, France',
                id: 5
            },
            {
                title: 'Great App!',
                stars: 5,
                critique: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                img: 'assets/images/users/user-6.jpg',
                name: 'Tony Cheng',
                city: 'San Francisco, US',
                id: 6
            },
            {
                title: 'Exceptional!',
                stars: 5,
                critique: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                img: 'assets/images/users/user-7.jpg',
                name: 'Kimberly Wells',
                city: 'London, UK',
                id: 7
            },

        ]

        return (
            <Fragment>
                <section id="quote" class="testimonial-section py-5">
                    <div class="container py-lg-5">
                        <h3 class="mb-1 mb-md-5 text-center">Loved by thousands of app developers like you</h3>

                        <div id="flipster-carousel" class="flipster-carousel pt-md-3">
                            <div class="flip-items pb-5">





                                {testimonials.map(testimonial => {

                                    return (

                                        <div class="flip-item">
                                            <div class="item-inner shadow-lg rounded">
                                                <h5 class="mb-2">{testimonial.title}</h5>
                                                <div class="ratings text-primary mb-3">
                                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                </div>
                                                <div class="mb-3">{testimonial.critique}</div>
                                                <div class="source media ">
                                                    <img class="source-profile rounded-circle mr-3" src={testimonial.img} alt="" />
                                                    <div class="source-info media-body pt-3">
                                                        <div>{testimonial.name}</div>
                                                        <div>{testimonial.city}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                    )
                                })}

                            </div>
                            <div class="pt-5 text-center">
                                <LinkContainer to='/login'>
                                    <p>
                                        <a class="btn btn-primary theme-btn font-weight-bold" href="">Try Task Heroes now !</a>
                                    </p>
                                </LinkContainer>
                            </div>
                        </div>

                    </div>
                </section>
            </Fragment>
        )
    }
}


