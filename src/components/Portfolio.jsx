import React from "react";
import ceilingB from "../assets/ceilingB.mp4";
import ceilingA from '../assets/ceilingA.mp4';
import BathroomB from '../assets/bathroomB.mp4';
import Stairs from '../assets/stairs.jpg';
import BandD from '../assets/b+downstairs.mp4';
import DryWall from '../assets/IMG_9998.jpg';
import PaintedDryWall from '../assets/IMG_0007.jpg';
import house1B from '../assets/house1B.mp4';
import house1A from '../assets/house1A.mp4';
import house3A from '../assets/house3A.mp4';
import house3 from '../assets/house3.mp4';
import './portfolio.css'



const Portfolio = () => {

    return (
        <div>
            <p id="description">
                Our portfolio showcases a diverse range of home painting projects, emphasizing meticulous attention to detail and exceptional craftsmanship. Whether it's vibrant interiors, durable exteriors, or work at high altitudes up to 40 feet, each project reflects our dedication to transforming spaces with precision. Explore our work to see how we bring color and life to every home, no matter the challenge.</p>
            <div className="portfolio-containers">
                <div className="portfolio-container">
                    <video controls className="portfolio-videos" >
                        <source src={ceilingB} />
                    </video>
                    <video controls className="portfolio-videos" >
                        <source src={ceilingA} />
                    </video>
                </div>
                <div className="portfolio-container">
                    <video controls className="portfolio-videos" >
                        <source src={BathroomB} />
                    </video>
                    <img src={Stairs} className="portfolio-images"></img>
                    <video controls className="portfolio-videos" >
                        <source src={BandD} />
                    </video>
                </div>
                <div className="portfolio-container">
                    <img src={DryWall} className="portfolio-images"></img>
                    <img src={PaintedDryWall} className="portfolio-images"></img>
                </div>
                <div className="portfolio-container">
                    <video controls className="portfolio-videos" >
                        <source src={house1B} />
                    </video>
                    <video controls className="portfolio-videos" >
                        <source src={house1A} />
                    </video>
                </div>
                <div className="portfolio-container">
                    <video controls className="portfolio-videos" >
                        <source src={house3} />
                    </video>
                    <video controls className="portfolio-videos" >
                        <source src={house3A} />
                    </video>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;