import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://c1.staticflickr.com/5/4217/34354267604_59f2aca7ed_b.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://c1.staticflickr.com/1/299/31184908704_ce89873b9f_b.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Balea_Lake_Romania_Landscape_Photography_%28226040481%29.jpeg/1024px-Balea_Lake_Romania_Landscape_Photography_%28226040481%29.jpeg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

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


export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        // const slides = testimonials.map(testimonial => {

        //         return (

        //             <div class="flip-item">
        //                 <div class="item-inner shadow-lg rounded">
        //                     <h5 class="mb-2">{testimonial.title}</h5>
        //                     <div class="ratings text-primary mb-3">
        //                         <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        //                     </div>
        //                     <div class="mb-3">{testimonial.critique}</div>
        //                     <div class="source media ">
        //                         <img class="source-profile rounded-circle mr-3" src={testimonial.img} alt="" />
        //                         <div class="source-info media-body pt-3">
        //                             <div>{testimonial.name}</div>
        //                             <div>{testimonial.city}</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div >
        //         )
        //     })

        const slides = testimonials.map(testimonial => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={testimonial.id}
                >
                    <div class="flip-item container">
                        <div class="item-inner shadow-lg rounded">
                            <h5 class="mb-2">{testimonial.title}</h5>
                            <div class="ratings text-primary mb-3">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <div class="mb-3 ">{testimonial.critique}</div>
                            <div class="source media " style={{ align: 'center' }}>
                                <div class="row container">
                                    <div class="col"></div>
                                    <div class="col">
                                        <img class="source-profile rounded-circle mr-3" src={testimonial.img} alt="" />
                                        <br />
                                        <div class="source-info media-body pt-3 text-center">
                                            <div>{testimonial.name}</div>
                                            <div>{testimonial.city}</div>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>
                            </div>
                        </div>
                    </div >
                    {/* <CarouselCaption /> */}
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

