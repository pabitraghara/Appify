'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

export default function Testimonials() {
    return (
        <div id="testimonial" className='bg-[#FDF2F8]  pt-[64px] pb-[64px]'>
            <div className='lg:max-w-[80%] md:max-w-[100%] mx-auto'>
                <h1 className='font-bold text-[35px] text-center px-5 lg:px-0'>
                    What client say about us
                </h1>
                <div className='pt-[64px] max-w-[80%] md:max-w-[90%] lg:max-w-[90%] mx-auto'>
                    <Carousel 
                    arrows={false} 
                    autoPlay={true} 
                    autoPlaySpeed={5000} 
                    infinite={true} 
                    showDots={true} 
                    responsive={responsive} >
                        <Card name='Pabitra Ghara'image='/images/c1.png'  desc='Fullstack Web Developer' />
                        <Card name='Pabitra Ghara'image='/images/c2.png' desc='Fullstack Web Developer' />
                        <Card name='Pabitra Ghara'image='/images/c1.png' desc='Fullstack Web Developer' />
                        <Card name='Pabitra Ghara'image='/images/c2.png' desc='Fullstack Web Developer' />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
