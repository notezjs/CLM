
import React, { Component } from 'react'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import pimg1 from '../../images/gift/3.png'
// import pimg2 from '../../images/gift/2.png'
// import pimg3 from '../../images/gift/3.png'
// import pimg4 from '../../images/gift/4.png'

import './style.css'

import Calendar from '../Calendar/CalendarComp/CalendarComp'

class PartnerSlider extends Component {
    render() {
        // var settings = {
        //     dots: false,
        //     infinite: true,
        //     speed: 500,
        //     arrows: false,
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     autoplay: false,
        //     margin: 10,
        //     loop: true,
        //     responsive: [
        //         {
        //           breakpoint: 1200,
        //           settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             infinite: true
        //           }
        //         },
        //         {
        //           breakpoint: 991,
        //           settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //           }
        //         },
        //         {
        //           breakpoint: 768,
        //           settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //           }
        //         },
        //         {
        //           breakpoint: 576,
        //           settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //           }
        //         }
        //       ]
        // }
        return (
            // <div className={`partner-sec section-padding ${this.props.partnerclass}`}>
            //     <div className="container">
            //         <div className="partner-sec-details">
            //             <div className="pt-carousel">
            //                 <Slider {...settings}>
            //                     <div className="partner-col">
            //                         <img src={pimg1} alt=""/>
            //                     </div>
            //                     <div className="partner-col">
            //                         <img src={pimg2} alt=""/>
            //                     </div>
            //                     <div className="partner-col">
            //                         <img src={pimg3} alt=""/>
            //                     </div>
            //                     <div className="partner-col">
            //                         <img src={pimg4} alt=""/>
            //                     </div>
            //                     <div className="partner-col">
            //                         <img src={pimg1} alt=""/>
            //                     </div>
            //                     <div className="partner-col">
            //                         <img src={pimg2} alt=""/>
            //                     </div>
            //                     <div className="partner-col">
            //                         <img src={pimg3} alt=""/>
            //                     </div>
            //                     <div className="partner-col">
            //                         <img src={pimg4} alt=""/>
            //                     </div>
            //                 </Slider>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="kalender"  id="kalenderSection">
              <h1 className="kalendertext" >Booking</h1>
              <div className='groupBooking'>
                    <p>Group Booking or Private Treatment</p>
                    <p>If you are a group of 5 or more I can do private treatments for you all. Contact me for more info.</p>
              </div>
              <h1 className='successMsg' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> </h1>
              
              <Calendar />
            </div>
            
            );
        }
    }
    
    export default PartnerSlider;
          
          
          
          
