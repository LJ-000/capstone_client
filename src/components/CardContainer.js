import React, {useState, useEffect} from 'react';
import GreetingCard from './GreetingCard';
import ThemeSearch from './Filters/ThemeSearch';
import AudienceSearch from './Filters/AudienceSearch';

const CardContainer = (props) => {
    const [cards, setCards] = useState(props.card)
    function filterChange(theme) {
        // debugger 
        const filteredCards = props.card.filter(card => card.theme === theme.value)
        // console.log(filteredCards)
            setCards(filteredCards)
            return filteredCards 
    }
    useEffect(() => { setCards(props.card)}, [props.card] )

    function filterAudience(audience) {
        const filteredAudience = props.card.filter(card => card.audience === audience.value)
            setCards(filteredAudience)
            return filteredAudience
    }
    useEffect(() => { setCards(props.card)}, [props.card] )

        return (
            <div className="card_container">
                <br /> 
                <br /> 

                <button className="checkout_button" onClick={event =>  window.location.href='/kismetbox'}> Checkout</button>
                <p className="card_filters">
                <ThemeSearch filterChange = {filterChange} />
                <AudienceSearch filterAudience = {filterAudience} />
                </p>
                <br /> 
                <br /> 
                <br /> 
                <p className="greeting_card">
                {cards.map(card =>
                <GreetingCard
                card={card}
                key={card.id}
                />)}
                </p>
            </div>
        )
    }

export default CardContainer