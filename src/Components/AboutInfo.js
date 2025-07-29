import { Link } from "react-router-dom";
import "./AboutInfoStyles.css"
import React from "react";
import photo2 from "./imgs/paul2.jpg"
import photo3 from "./imgs/paul3.jpg"
import AboutInfoData from "./AboutInfoData.js"
import InfoCard from "./InfoCard.js"

const AboutInfo = () => {
    return <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>This is who I am. I am me and me am I.</p>
        <Link to="/contact"></Link>
        <button className="btn">Contact</button>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stacktop">
                    <img src={photo2} className="img" alt="true"/>
                </div>
                <div className="img-stacktop">
                    <img src={photo3} className="img" alt="true"/>
                </div>
            </div>
        </div>
        <div className="work-container">
            <h1 className="info-heading"></h1>
            <div className="info-container">
                {AboutInfoData.map((val, index) =>{
                    return(
                        <InfoCard 
                        key = {index}
                        imgsrc = { val.imgsrc }
                        title = { val.title }
                        text = { val.text }
                        view = { val.view }
                        buttonname = { val.buttonname }
                        showButton = { val.showButton }
                        />
                    )
                }
                )}
            </div>
        </div>

    </div>
}

export default AboutInfo;