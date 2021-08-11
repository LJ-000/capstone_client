import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardGroup, Button} from 'reactstrap';

const GreetingCard = (props) => {
// const [cardData, setcardData] = useState([
//     {
//         // card: [],
//         img: "",
//         theme: "",
//         audience: "",
//         price: "",
//         quantity: 0,
//         id: 0
//     }
// ]);
             
return (      
    <div>
        <CardGroup>
        <Card>  
        <CardImg className="card_img" width="20%" src={props.card.img}/>
        <CardTitle className="card_title" tag="h5">{props.card.theme}</CardTitle> 
        <CardSubtitle tag="h5" className="card_price">${props.card.price}</CardSubtitle>
        <Button className="add_to_cart" onClick={event =>  window.location.href='/kismetbox'}>Add to Cart</Button> 
        </Card>
        </CardGroup>
    </div>
)
}

export default GreetingCard;

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

    // useEffect(() => { setCart(props.card)}, [props.card] )

    // const sendToKismetBox = (cardData) => {
    //     console.log(props)
    //     const img = cardData.img 
    //     const theme = cardData.theme
    //     const price = cardData.price 
    //     const audience = cardData.audience
    //     const quantity = cardData.quantity
    //     const id = cardData.id


    //     const sendStuff = {
    //         headers: { "Content-Type": "application/json" },
    //         method: "POST",
    //         body: JSON.stringify({ ...cardData })
    //     }

    //     fetch("http://localhost:3000/api/v1/orderitems", sendStuff)
    //         .then(rsp => rsp.json())
    //         .then((setcardData => props.cartNew(setcardData)))
    // }
      


    // const sendToKismetBox = (cardData) => {
    //     const userId = cardData.user.id  
    //     const currentOrder = cardData.user.current_order
    //     const cardId = cardData.card.id
    //     let quantity = cardData.card.quantity
    //     let price = cardData.card.price         
    
        // if (currentOrder === null) {
    //         const token = localStorage.token
            // const sendStuff = {
            //     headers: { "Content-Type": "application/json" },
            //     method: "POST",
            //     body: JSON.stringify({ reminder_date: this.state.reminder_date, mail_by: this.state.mail_by, event_name: this.state.event_name, repeat: this.state.repeat, reminder_method: this.state.reminder_method, date: this.state.date })
    //             headers: {
    //                 'Content-Type':'application/json',
    // //                 // "Authorization": token,
    //                 'Accept':'application/json'
            //     },
            //     body: JSON.stringify({user_id: userId, card_id: cardId, quantity: quantity, price: price})
            // }
            
         
//     const sendToKismetBox = (cardData) => {
// console.log(cardData)
//     }
