import { FaLinkedin, FaMailBulk } from "react-icons/fa"
import photo2 from "./imgs/email.png"
import photo1 from "./imgs/linkedin.png"
import photo3 from "./imgs/github.png"

const ContactInfoData = [
 {
    imgsrc: photo2,
    title: "Email",
    text: "If you would like to reach me via email, please click the button below.",
    view: "mailto:pcantave35@gmail.com",
    buttonname: "Contact",
    showButton: true
 },
  {
    imgsrc: photo1,
    title: "LinkedIn",
    text: "If you would like to connect with me on LinkedIn, please click the button below.",
    view: "https://www.linkedin.com/in/paul-cantave/",
    buttonname: "Connect",
    showButton: true
 },
 {
    imgsrc: photo3,
    title: "GitHub",
    text: "To view my projects and contributions on GitHub, please click the button below.",
    view: "https://github.com/EpixPowned",
    buttonname: "View",
    showButton: true
 }
]

export default ContactInfoData