import { NavLink } from "react-router-dom"
import "./InfoCardStyles.css"
import photo1 from "./imgs/grad.jpg"
import React from 'react'

const InfoCard = (props) => {
    return(
        <div className="info-container">
            <h1 className="info-heading"></h1>
            <div className="info-container">
                <div className="info-card">
                    <img src={props.imgsrc} alt="image" />
                    <h2 className="info-title">{props.title}
                    </h2>
                    <div className="info-details"></div>
                    <p>{props.text}</p>
                    <div className="info-btns">
                        <NavLink to={props.view} className="btn">Github</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard