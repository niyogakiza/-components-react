import React, { Component } from 'react'
import './styledCard.css'
import CardContent from "./CardContent";


class CardItem extends Component {
    render() {
        return (
            <div
                id={'card-' + this.props.i}
                className="card-flex-item"
            >
                <CardContent
                    imgSrc="src/img/ad.jpeg"
                    headerText="Hello"
                    url=""
                />

            </div>
        )
    }
}

export default CardItem;