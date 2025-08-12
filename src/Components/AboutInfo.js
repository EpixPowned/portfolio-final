import { Link } from "react-router-dom";
import "./css/AboutInfoStyles.css"
import React from "react";
import photo2 from "./imgs/paul2.jpg"
import photo3 from "./imgs/paul3.jpg"
import AboutInfoData from "./AboutInfoData.js"
import InfoCard from "./InfoCard.js"

const AboutInfo = () => {
    return <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>If you are looking to contact me, press the button below!</p>
        <Link to="/Contact">
        <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={photo2} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={photo3} className="img" alt="true"/>
                </div>
            </div>
        </div>
        <div className="work-container">
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