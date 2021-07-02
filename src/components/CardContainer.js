import React from 'react';
import GreetingCard from './GreetingCard'

const CardContainer = (props) => {

        return (
            <div>
                {props.card.map(card =>
                <GreetingCard
                card={card}
                key={card.id}
                />)}
            </div>
        )
    }

export default CardContainer