import React from 'react';
// import OrderCards from './OrderCards'
import { Card, CardImg, CardTitle, CardSubtitle, CardGroup, Button} from 'reactstrap';

// const order_url = "http://localhost:3000/api/v1/orders";
const KismetBox = (props) => {
    console.log("kismet box", props)

    return (
      <div className="order_page">
     
          {/* <OrderCards cartNew={props.cartNew}/> */}  

        <h2 className="order_header">Review Your Kismet Box Order</h2>
          <br />

        <p className="order_card">

        <p className="solo_order">
        <CardGroup>
        <Card>  
        <CardImg  className="order_img" src= "https://s7d5.scene7.com/is/image/PaperSource/10007174?resMode=sharp2&op_usm=1,1,15,1&fmt=jpg&qlt=80&fit=constrain,1&wid=262&hei=262"/>
        <CardTitle tag="h5"> Your Event: Congrats DC & NYC!</CardTitle> 
        <CardSubtitle tag="h5">Theme: Congratulations</CardSubtitle>
        <CardSubtitle tag="h5">Repeat: Once</CardSubtitle>
        <CardSubtitle tag="h5">$5.46</CardSubtitle>
        <button className="card_button" >Update Card</button> 
        <button className="card_button" >Delete Card</button> 
        </Card>
        </CardGroup>
        </p>

        <p className="solo_order">
        <CardGroup>
        <Card>  
        <CardImg  className="order_img" src= "https://s7d5.scene7.com/is/image/PaperSource/10012818?resMode=sharp2&op_usm=1,1,15,1&fmt=jpg&qlt=80&fit=constrain,1&wid=262&hei=262"/>
        <CardTitle tag="h5"> Your Event: Andrew's Wedding</CardTitle> 
        <CardSubtitle tag="h5">Theme: Wedding</CardSubtitle>
        <CardSubtitle tag="h5">Repeat: Once</CardSubtitle>
        <CardSubtitle tag="h5">$5.07</CardSubtitle>
        <button className="card_button" >Update Card</button> 
        <button className="card_button" >Delete Card</button> 
        </Card>
        </CardGroup>
        </p>

        <p className="solo_order">
        <CardGroup>
        <Card>  
        <CardImg  className="order_img" src= "https://s7d5.scene7.com/is/image/PaperSource/10016545?resMode=sharp2&op_usm=1,1,15,1&fmt=jpg&qlt=80&fit=constrain,1&wid=262&hei=262"/>
        <CardTitle tag="h5"> Your Event: Mom's Birthday</CardTitle> 
        <CardSubtitle tag="h5">Theme: Birthday</CardSubtitle>
        <CardSubtitle tag="h5">Repeat: Every Year</CardSubtitle>
        <CardSubtitle tag="h5">$4.01</CardSubtitle>
        <button className="card_button" >Update Card</button> 
        <button className="card_button" >Delete Card</button> 
        </Card>
        </CardGroup>
        </p>

        <p className="solo_order">
        <CardGroup>
        <Card>  
        <CardImg  className="order_img" src= "https://s7d5.scene7.com/is/image/PaperSource/10008170?resMode=sharp2&op_usm=1,1,15,1&fmt=jpg&qlt=80&fit=constrain,1&wid=262&hei=262"/>
        <CardTitle tag="h5"> Your Event: Aunt Ann's Surgery</CardTitle> 
        <CardSubtitle tag="h5">Theme: Get Well</CardSubtitle>
        <CardSubtitle tag="h5">Repeat: Once</CardSubtitle>
        <CardSubtitle tag="h5">$4.30</CardSubtitle>
        <button className="card_button" >Update Card</button> 
        <button className="card_button" >Delete Card</button> 
        </Card>
        </CardGroup>
        </p>

        <p className="solo_order">
        <CardGroup>
        <Card>  
        <CardImg  className="order_img" src= "https://s7d5.scene7.com/is/image/PaperSource/10012546?resMode=sharp2&op_usm=1,1,15,1&fmt=jpg&qlt=80&fit=constrain,1&wid=262&hei=262"/>
        <CardTitle tag="h5"> Your Event: Theresa's Housewarming Party</CardTitle> 
        <CardSubtitle tag="h5">Theme: Housewarming</CardSubtitle>
        <CardSubtitle tag="h5">Repeat: Once</CardSubtitle>
        <CardSubtitle tag="h5">$4.70</CardSubtitle>
        <button className="card_button" >Update Card</button> 
        <button className="card_button" >Delete Card</button> 
        </Card>
        </CardGroup>
        </p>

        <p className="solo_order">
        <CardGroup>
        <Card>  
        <CardImg  className="order_img" src= "https://papersource.resultspage.com/thumb.php?f=https%3a%2f%2fs7d5.scene7.com%2fis%2fimage%2fPaperSource%2f3929991343&s=300&quality=70"/>
        <CardTitle tag="h5"> Your Event: My Birthday Party</CardTitle> 
        <CardSubtitle tag="h5">Theme: Invitation</CardSubtitle>
        <CardSubtitle tag="h5">Repeat: Every Year</CardSubtitle>
        <CardSubtitle tag="h5">$5.53</CardSubtitle>
        <button className="card_button" >Update Card</button> 
        <button className="card_button" >Delete Card</button> 
        </Card>
        </CardGroup>
        </p>

        <p className="solo_order">
        <CardGroup>
        <Card>  
        <CardImg  className="order_img" src= "https://s7d5.scene7.com/is/image/PaperSource/10016796?resMode=sharp2&op_usm=1,1,15,1&fmt=jpg&qlt=80&fit=constrain,1&wid=262&hei=262"/>
        <CardTitle tag="h5"> Your Event: John's Graduation</CardTitle> 
        <CardSubtitle tag="h5">Theme: Graduation</CardSubtitle>
        <CardSubtitle tag="h5">Repeat: Once</CardSubtitle>
        <CardSubtitle tag="h5">$5.07</CardSubtitle>
        <button className="card_button" >Update Card</button> 
        <button className="card_button" >Delete Card</button> 
        </Card>
        </CardGroup>
        </p>
        <br /> 
        <br /> 
        <br /> 
        <br /> 
        <br /> 
        </p>

        <p className="checkout">
        <h3>All set?</h3>
        <h4>Submit your order and receive your Kismet Box in 5-7 business days. 
        <br /> 
        All orders arrive with matching envelopes and U.S. stamps!</h4>
        <br /> 
        <p>
        Subtotal: $34.14
        <br /> 
        Total: $39.99
        </p>
        <p>
        <button className="order_button" onClick={event =>  window.location.href='/orderconfirmation'}>Complete Kismet Order</button> 
        </p>
        </p>
       

      </div>
    )}
        
export default KismetBox; 





// function KismetBox({ cart, setCart }) {
//     const getTotalSum = () => {
//       return cart.reduce(
//         (sum, { price, quantity }) => sum + price * quantity,
//         0
//       );
//     };
  
//     const clearCart = () => {
//       setCart([]);
//     };
  
//     const setQuantity = (card, amount) => {
//       const newCart = [...cart];
//       newCart.find(
//         (item) => item.name === card.name
//       ).quantity = amount;
//       setCart(newCart);
//     };
  
//     const removeFromCart = (cardToRemove) => {
//       setCart(
//         cart.filter((card) => card !== cardToRemove)
//       );
//     };

  
//     return (
//       <>
//         <h1>Cart</h1>
//         {cart.length > 0 && (
//           <button onClick={clearCart}>Clear Cart</button>
//         )}
//         <div className="kismetbox">
//           {cart.map((card, id) => (
//             <div className="checkout" key={id}>
//               <h3>{card.img}</h3>
//               <h4>${card.price}</h4>
//               <input
//                 value={card.quantity}
//                 onChange={(e) =>
//                   setQuantity(
//                     card,
//                     parseInt(e.target.value)
//                   )
//                 }
//               />
//               <button onClick={() => removeFromCart(card)}>
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
  
//         <div>Total Cost: ${getTotalSum()}</div>
//       </>
//     );
//   }





