import React, { Component } from 'react';
import GreetingCard from './GreetingCard'

class CardContainer extends Component {

    render() {
        return (
            <div>
                {this.props.card.map(card =>
                <GreetingCard
                card={card}
                key={card.id}
                />)}
            </div>
        )
    }
}

export default CardContainer