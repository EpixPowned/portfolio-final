import React from "react";
import Footer from "./Footer.js"
import TopPage from "./TopPage.js";
import AboutInfo from "./AboutInfo.js";


const About = () => {
    return(
        <div>
            <TopPage heading = "ABOUT ME" text = "Here is some information about me!"/>
            <AboutInfo />
            <Footer />
        </div>
    )
}

export default About