import "./TopPageStyles.css"
import React, { Component } from "react"
   
class TopPage extends Component {
    render(){
        return(<div className="top-page">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    
    </div>);
    }

}


export default TopPage