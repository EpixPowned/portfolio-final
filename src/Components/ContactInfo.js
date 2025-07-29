import ContactInfoData from "./ContactInfoData.js"
import InfoCard from "./InfoCard.js"
import "./InfoCardStyles.css"


const ContactInfo = () => {
   return( <div className="work-container">
            <div className="contact-info-container">
                {ContactInfoData.map((val, index) =>{
                    return(
                        <InfoCard 
                        key = {index}
                        imgsrc = { val.imgsrc }
                        title = { val.title }
                        text = { val.text }
                        view = { val.view }
                        buttonname = { val.buttonname }
                        showButton = { val.showButton }
                        />
                    )
                }
                )}
            </div>
        </div>)
}

export default ContactInfo;