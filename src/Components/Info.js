import "./css/InfoCardStyles.css"
import React from 'react'
import InfoCard from "./InfoCard"
import InfoCardData from "./InfoCardData"

const Info = (props) => {
    return(
        <div className="work-container">
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
                        showButton = { val.showButton }
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Info