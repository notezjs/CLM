import React, { Suspense, useRef } from 'react'
// import {Link}  from 'react-router-dom';
// import slimg from '../../images/slider/hero-shape2.png'

import './style.css'

import Skeleton from '../Skeleton-test'
import useScrollPosition from "./useScrollPosition";


import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Hero8 = ( props ) => {

       
    const scrollPosition = useScrollPosition();
    
    const scroll = useRef(scrollPosition)

    scroll.current = scrollPosition/200;
    
    return(<>
        <section className="wpo-hero-style-7">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-7 col-md-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">Jag kommer att ta hand om din hälsa</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">Mycket av det dagliga arbetet tar vi förgivet. Lita på våran behandling.</span>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <div className="hero-btn">
                                    {/* <Link to="/about" className="theme-btn">More About</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="slide-img">
                    {/* <img src={slimg} alt=""/>*/}
                    <Canvas className="slide-imgg"
                            shadows
                            raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
                            <ambientLight intensity={1} />
                            <Suspense fallback={null}>
                            <Skeleton scroll={scroll} />
                            <Environment preset="sunset" />
                            </Suspense>
                    </Canvas>
                  
                    
                </div>
                
            </div>
        </section>
        </>
    )
}
export default Hero8;