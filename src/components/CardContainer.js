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

    const [cart, setCart] = useState([]);
    const getCartTotal = () => {
        return cart.reduce(
          (sum, { quantity }) => sum + quantity,
          0
        );
      };

        return (
            <div>
                <h3>Kismet Greeting Cards</h3>
                <button onClick={event =>  window.location.href='/kismetbox'}> ({getCartTotal}) Checkout</button>
                <ThemeSearch filterChange = {filterChange} />
                <AudienceSearch filterAudience = {filterAudience} />
                {/* <ContentSearch/> */}
                <p>
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