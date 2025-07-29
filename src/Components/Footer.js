import "./FooterStyles.css"
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <h4>
                        <FaHome size={20} style= {{color: "#fff", marginRight: "2rem"}}/>
                            New Jersey / New York
                        </h4>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style= {{color: "#fff", marginRight: "2rem"}}/>
                        908-279-4020
                        </h4>  
                    </div>
                    <div className="mail">
                        <h4>
                        <FaMailBulk size={20} style= {{color: "#fff", marginRight: "2rem"}}/>
                        pcantave35@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                <div className="social">
                    <a href="https://www.linkedin.com/in/paul-cantave/"  target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style= {{color: "#fff", marginRight: "1rem"}}/>
                    </a>
                    <a href="https://www.instagram.com/paulcantave"  target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} style= {{color: "#fff", marginRight: "1rem"}}/>
                    </a>
                    <a href="https://github.com/EpixPowned"  target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} style= {{color: "#fff", marginRight: "1rem"}}/>
                    </a>
                </div>
            
                </div>
            </div>
        </div>
    )
}

export default Footer