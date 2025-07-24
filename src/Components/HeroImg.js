import { Link } from "react-router-dom"
import "./HeroImgStyles.css"
import backgroundImage from "./imgs/paul1.JPG"
import React from "react"

const HeroImg = () => {
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                src={backgroundImage} alt="backgroundImage"/>
            </div>
            <div className="content">
                <p>Welcome to my website!</p>
                <h1>Prospective Software Engineer</h1>
                <div>
                    <Link to="/Projects"
                    className="btn">Projects
                    </Link>
                    <Link to="/Contact"
                    className="btn btn-light">Contact Me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg