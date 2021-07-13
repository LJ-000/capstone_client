// import React, { useState, useEffect }from 'react';
// import { Card, CardImg, CardTitle, CardSubtitle, CardGroup, Button} from 'reactstrap';

// const OrderCards = (props) => {
//     const [cardData, setcardData] = useState([
//         {
//             img: "",
//             theme: "",
//             audience: "",
//             price: "",
//             quantity: 0,
//             id: 0
//         }
//     ]);
    
//         const sendToKismetBox = (cardData) => {
//             console.log(props)
//             const img = cardData.img 
//             const theme = cardData.theme
//             const price = cardData.price 
//             const audience = cardData.audience
//             const quantity = cardData.quantity
//             const id = cardData.id
    
    
//             const sendStuff = {
//                 headers: { "Content-Type": "application/json" },
//                 method: "POST",
//                 body: JSON.stringify({ ...cardData })
//             }
    
//             fetch("http://localhost:3000/api/v1/orderitems", sendStuff)
//                 .then(rsp => rsp.json())
//                 .then((setcardData => props.cartNew(setcardData)))
//         }
             

//             return (
//                 <div></div>
//                 <div className="greeting_card">
//                     <CardGroup className="text-center">
//                     <Card>  
//                     <CardImg className="card_img" width="20%" src={props.card.img}/>
//                     <CardTitle tag="h5">{props.card.theme}</CardTitle> 
//                     <CardSubtitle tag="h6" className="mb-2 text-muted">${props.card.price}</CardSubtitle>
//                     </Card>
//                     </CardGroup>
//                     <Button className="add-to-cart" 
//                     onClick={sendToKismetBox(cardData)}>Add to Cart</Button> 
//                 </div>
//             )
//         }
    

// export default OrderCards
