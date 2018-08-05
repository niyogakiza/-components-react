import React, { Component } from 'react'
import './styledCard.css'


class CardContent extends Component {
    render(){
        return(
            <div className="card-flex-wrapper">
                <div className="card-flex-image">
                    <img src={this.props.imgSrc} alt="img placeholder" />
                </div>
                <div className="card-flex-content">
                    <h3>{this.props.headerText}</h3>
                    <a href={this.props.url} className="card-flex-button btn-block"></a>
                </div>
            </div>
        )
    }
}

export default  CardContent;