import "./FooterStyles.css"
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style= {{color: "#fff", marginRight: "2rem"}}/>
                        <div><p>New Jersey/New York</p></div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style= {{color: "#fff", marginRight: "2rem"}}/>
                        <div><p>908-279-4020</p></div>
                        </h4>  
                    </div>

                    <div className="mail">
                        <h4>
                        <FaMailBulk size={20} style= {{color: "#fff", marginRight: "2rem"}}/>
                        <div><p>pcantave35@gmail.com</p></div>
                        </h4>
                        
                    </div>
                </div>
                <div className="right">

                <div className="social">
                    <FaLinkedin size={30} style= {{color: "#fff", marginRight: "1rem"}}/>
                    <FaInstagram size={30} style= {{color: "#fff", marginRight: "1rem"}}/>
                    <FaGithub size={30} style= {{color: "#fff", marginRight: "1rem"}}/>
                </div>
            
                </div>
            </div>
        </div>
    )
}

export default Footer