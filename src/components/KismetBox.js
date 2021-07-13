import React from 'react';
import OrderCards from './OrderCards'

// const order_url = "http://localhost:3000/api/v1/orders";
const KismetBox = (props) => {
    console.log("kismet box", props)

    return (
      <div className="order_card">
          {/* <OrderCards cartNew={props.cartNew}/> */}
          <button onClick={event =>  window.location.href='/orderconfirmation'}>Complete Kismet Box Order</button>
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





