import { NavLink } from "react-router-dom"
import "./css/InfoCardStyles.css"
import photo1 from "./imgs/grad.jpg"
import React from 'react'

const InfoCard = (props) => {
    return(
                <div className="info-card">
                    <img src={props.imgsrc} alt="image" />
                        <h2 className="info-title">{props.title}
                        </h2>
                    <div className="info-details">
                        <p>{props.text}</p>
                    </div>
                    {props.showButton !== false && (
                        <div className="info-btns">
                        <NavLink to={props.view} className="btn">{props.buttonname}</NavLink>
                        </div>
                        )}
                </div> 
    )
}

export default InfoCard