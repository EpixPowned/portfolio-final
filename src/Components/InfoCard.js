import { NavLink } from "react-router-dom"
import "./InfoCardStyles.css"
import photo1 from "./imgs/grad.jpg"
import React from 'react'

const InfoCard = () => {
    return(
        <div className="info-container">
            <h1 className="info-heading">Projects</h1>
            <div className="info-container">
                <div className="info-card">
                    <img src={photo1} alt="image" />
                    <h2 className="info-title">Project title
                    </h2>
                    <div className="info-details"></div>
                    <p>This is text</p>
                    <div className="info-btns">
                        <NavLink to="https://www.linkedin.com/in/paul-cantave/" className="btn">Github</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard