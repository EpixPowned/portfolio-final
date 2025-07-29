import { NavLink } from "react-router-dom"
import "./InfoCardStyles.css"
import React from 'react'
import InfoCard from "./InfoCard"
import InfoCardData from "./InfoCardData"

const Info = (props) => {
    return(
        <div className="work-container">
            <h1 className="info-heading"></h1>
            <div className="info-container">
                {InfoCardData.map((val, index) =>{
                    return(
                        <InfoCard 
                        key = {index}
                        imgsrc = { val.imgsrc }
                        title = { val.title }
                        text = { val.text }
                        view= { val.view }
                        buttonname = {val.buttonname}
                        showbutton = { val.showbutton }
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Info