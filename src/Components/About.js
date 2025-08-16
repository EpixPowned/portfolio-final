import React from "react";
import Footer from "./Footer.js"
import TopPage from "./TopPage.js";
import AboutInfo from "./AboutInfo.js";


const About = () => {
    return(
        <div>
            <title>About Me</title>
            <TopPage heading = "ABOUT ME" text = "Here is some information about me!"/>
            <AboutInfo />
            <Footer />
        </div>
    )
}

export default About