import React from "react";
import Footer from "./Footer.js"
import TopPage from "./TopPage.js";
import AboutInfo from "./AboutInfo.js";


const Abouts = [
    {title:'Education', description: 'This is a test, more added later.', imgURL: ''},
    {title: 'Experience', description: 'Another test for formatting', imgURL: ''},
    {title: 'Interests', description:'Third test.', imgURL: ''},
]


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