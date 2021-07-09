import React, { useState, useEffect }from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardGroup, Button} from 'reactstrap';

const GreetingCard = (props) => {

const [cart, setCart] = useState([]);
const [card] = useState([
    {
        card: [],
        img: [],
        theme: [],
        price: [],
        event_name: [],
        date: []
    }
]);

    const sendToKismetBox = (card) => {
       let newCart = [...cart];
       let itemInCart = newCart.find(
           (item) => card.img === item.img 
       );
       if (itemInCart) {
           itemInCart.quantity++;
       }
       else {
           itemInCart = {
               ...card, 
               quantity: 1,
           };
           newCart.push(itemInCart);
       }
       setCart(newCart);
    };

    useEffect(() => { setCart(props.card)}, [props.card] )


        return (
            <>
            <div className="greeting_card">
                <CardGroup className="text-center">
                <Card>  
                <CardImg className="card_img" width="20%" src={props.card.img}/>
                <CardTitle tag="h5">{props.card.theme}</CardTitle> 
                <CardSubtitle tag="h6" className="mb-2 text-muted">${props.card.price}</CardSubtitle>
                </Card>
                </CardGroup>
                <Button className="add-to-cart" onClick={()=> sendToKismetBox(card)}>Add to Cart</Button> 
            </div>
            </>
        )
    }

export default GreetingCard;