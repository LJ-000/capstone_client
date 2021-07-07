import React from 'react';
import GreetingCard from './GreetingCard';
import ThemeSearch from './Filters/ThemeSearch';
import AudienceSearch from './Filters/AudienceSearch';
// import ContentSearch from './Filters/ContentSearch'



const CardContainer = (props) => {

        return (
            <div>
                <button onClick={event =>  window.location.href='/kismetbox'}>Checkout</button>
                <ThemeSearch/>
                <AudienceSearch/>
                {/* <ContentSearch/> */}
                {props.card.map(card =>
                <GreetingCard
                card={card}
                key={card.id}
                />)}
            
            </div>
        )
    }

export default CardContainer