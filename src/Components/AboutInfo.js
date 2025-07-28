import { Link } from "react-router-dom";
import "./AboutInfoStyles.css"
import React from "react";
import photo2 from "./imgs/paul2.jpg"
import photo3 from "./imgs/paul3.jpg"

const Abouts = [
    {title:'Education', description: 'This is a test, more added later.', imgURL: ''},
    {title: 'Experience', description: 'Another test for formatting', imgURL: ''},
    {title: 'Interests', description:'Third test.', imgURL: ''},
]

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
    </div>
}

export default AboutInfo;