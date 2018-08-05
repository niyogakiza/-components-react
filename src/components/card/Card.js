import React, { Component } from 'react'
import CardItem from './CardItem'
import './styledCard.css'




class Card extends Component {
    render() {
        const cards = [];
        for(let i = 1; i <= this.props.numCards; i += 1){
            cards.push(<CardItem key={i} />);
        }
        return (
            <div className="card-flex">
                {cards}
            </div>
        )
    }
}

export default Card;