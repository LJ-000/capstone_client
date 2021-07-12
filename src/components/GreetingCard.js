import React, { useState, useEffect }from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardGroup, Button} from 'reactstrap';

const GreetingCard = (props) => {

const [cart, setCart] = useState([]);
const [cardData] = useState([
    {
        card: [],
        img: [],
        price: [],
        userId: [],
        cardId: []
        // theme: [],
        // price: [],
      
    }
]);

    // const sendToKismetBox = (card) => {
    //    let newCart = [...cart];
    //    let itemInCart = newCart.find(
    //        (item) => card.img === item.img 
    //    );
    //    if (itemInCart) {
    //        itemInCart.quantity++;
    //    }
    //    else {
    //        itemInCart = {
    //            ...card, 
    //            quantity: 1,
    //        };
    //        newCart.push(itemInCart);
    //    }
    //    setCart(newCart);
    // };

    useEffect(() => { setCart(props.card)}, [props.card] )

    const sendToKismetBox = cardData => config4 => {
        const userId = cardData.user.id  
        const currentOrder = cardData.user.current_order
        const cardId = cardData.card.id
        let quantity = cardData.card.quantity
        let price = cardData.card.price         
    
        if (currentOrder === null) {
    //         const token = localStorage.token
            let config4 = {
                method: "POST",
                headers: {
                    'Content-Type':'application/json',
    //                 // "Authorization": token,
                    'Accept':'application/json'
                },
                body: JSON.stringify({user_id: userId, card_id: cardId, quantity: quantity, price: price})
            }
            
            fetch("http://localhost:3000/api/v1/orders/neworder", config4)
                .then(rsp => rsp.json())
                .then(cardData => 
                    ({ type: "UPDATE_CURRENT_USER", current_site_user: cardData})  
            
                ) 
        } else {
    //         const token = localStorage.token
                let config3 = {
                    method: "POST",
                    headers: {
                    'Content-Type':'application/json',
    //                 // "Authorization": token,
                    'Accept':'application/json'
                    },
                    body: JSON.stringify({order_id: currentOrder, card_id: cardId, quantity: quantity})
                }
    
                fetch("http://localhost:3000/api/v1/orderitems", config3)
                    .then(rsp => rsp.json())
                    .then(cardData => 
                    ({ type: "UPDATE_CURRENT_USER", current_site_user: cardData}) 
                    ) 
            }
        }
//     const sendToKismetBox = (cardData) => {
// console.log(cardData)
//     }
        return (
            
            <div className="greeting_card">
                <CardGroup className="text-center">
                <Card>  
                <CardImg className="card_img" width="20%" src={props.card.img}/>
                <CardTitle tag="h5">{props.card.theme}</CardTitle> 
                <CardSubtitle tag="h6" className="mb-2 text-muted">${props.card.price}</CardSubtitle>
                </Card>
                </CardGroup>
                <Button className="add-to-cart" onClick={()=>sendToKismetBox(cardData)}>Add to Cart</Button> 
            </div>
            
        )
    }

export default GreetingCard;