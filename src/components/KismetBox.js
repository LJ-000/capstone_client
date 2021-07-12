import React, { Component } from 'react';

// const KismetBox = data => dispatch => {
//     const userId = data.user.id  
//     const currentOrder = data.user.current_order
//     const cardId = data.card.id
//     let quantity = data.quantity        

//     if (currentOrder === null) {
//         const token = localStorage.token
//         let config4 = {
//             method: "POST",
//             headers: {
//                 'Content-Type':'application/json',
//                 "Authorization": token,
//                 'Accept':'application/json'
//             },
//             body: JSON.stringify({user_id: userId, card_id: cardId, quantity: quantity})
//         }
        
//         fetch("http://localhost:3000/api/v1/orders/neworder", config4)
//             .then(rsp => rsp.json())
//             .then(data => {
//                 dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}) 
//             }) 
//     } else {
//         const token = localStorage.token
//             let config3 = {
//                 method: "POST",
//                 headers: {
//                 'Content-Type':'application/json',
//                 "Authorization": token,
//                 'Accept':'application/json'
//                 },
//                 body: JSON.stringify({order_id: currentOrder, card_id: cardId, quantity: quantity})
//             }

//             fetch("http://localhost:3000/api/v1/order_items", config3)
//                 .then(rsp => rsp.json())
//                 .then(data => {
//                     dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}) 
//                 }) 
//         }
//     }

class KismetBox extends Component {

    state = {
        card: [],
        subscription: [],
        reminder_date: [],
        mail_by: [],
      };
    
        componentDidMount() {
            fetch("http://localhost:3000/api/v1/orderitems")
                    .then(res => res.json())
                    .then(data => this.setState({
                    card: data
                    })
                    )
                }

    render() {
        return (
    
    <div>Cart</div>
    )}
    }
        
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





