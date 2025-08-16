import React from "react";
import Footer from "./Footer.js"
import TopPage from "./TopPage.js";
import ContactInfo from "./ContactInfo.js";


const Contact = () => {
    return(
        <div>
            <title>Contact Me</title>
            <TopPage heading = "CONTACT ME" text = "Contact me at any of these places!"/>
            <ContactInfo />
            <Footer />
        </div>
    )
}

export default Contact