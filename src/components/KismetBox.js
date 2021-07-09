import React from 'react';
// import { Card, CardImg, CardTitle, CardSubtitle, CardGroup, Button} from 'reactstrap';
import CardContainer from './CardContainer'

function KismetBox({ cart, setCart }) {
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

}
export default KismetBox; 



