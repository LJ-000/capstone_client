import React, { Component } from 'react';

class KismetBox extends Component {
    
}
// import { connect } from 'react-redux';
// import axios from "axios";

// // Cart Actions
// const ADD_TO_CART = 'ADD_TO_CART';
// const UPDATE_CART = 'UPDATE_CART';
// const REMOVE_ITEM = 'REMOVE_ITEM';
// const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// // Catalog Actions
// const FETCH_ITEMS = 'FETCH_ITEMS';
// const FETCH_ITEMS_FULFILLED = 'FETCH_ITEMS_FULFILLED';
// const FETCH_ITMS_REJECTED = 'FETCH_ITMS_REJECTED';
// const SYNC_QUANTITY = 'SYNC_QUANTITY';

// getData((payload) => {
//     return function(dispatch) {
//       dispatch({ type: FETCH_ITEMS });
//       axios.get("http://localhost:3000/api/v1/subscriptions")
//         .then((response) => {
//           dispatch({type: FETCH_ITEMS_FULFILLED, payload: response.data})
//         })
//         .catch((err) => {
//           dispatch({type: FETCH_ITMS_REJECTED, payload: err})
//         })
//     }
//   })
  
//   export function syncQuantity(payload) {
//     return {
//       type: SYNC_QUANTITY,
//       payload: payload
//     }
//   }

// connect((store) => {   
//   return {
//     subscriptionList: store.cart
//   }
// })

// addToCart((payload) => {
//     return {
//       type: ADD_TO_CART,
//       payload: payload
//     }
//   })
  
// updateCart((payload) => {
//     return {
//       type: UPDATE_CART,
//       payload: payload
//     }
//   })

// removeItem((payload) => {
//     return {
//       type: REMOVE_ITEM,
//       payload: payload
//     }
//   })
  
//  updateQuantity((payload) => {
//     return {
//       type: UPDATE_QUANTITY,
//       payload: payload
//     }
// })

// export default class KismetBox extends Component {

//   _removeFromCart(card) {
//     this.props.dispatch(removeItem(card));
//     this.props.dispatch(syncQuantity({"card": card, "quantity": 0}));
//   }

//   render() {
    
//     const { subscriptionList } = this.props;
//     let subTotals = [];

//     subscriptionList.map((card) => {
//       subTotals.push(card.quantity * card.price);
//     });

//     return (
//       <div className="cart">
//       {subscriptionList.length !== 0 ? (
//         <div>
//           <h3>Review Your Kismet Subscription Box</h3>

//         <div className="cart_overview">
//           <div className="card_count">
//             <span>Card(s) in cart</span>
//             <span className="count_meter">{subscriptionList.length}</span>
//           </div>

//           <div className="grand_total">
//             <span>Total (INR)</span>
//             <span className="total_amount">{subTotals.reduce((accumulator, currentValue) => accumulator + currentValue)}</span>
//           </div>
//         </div>

//         <hr />

//         <div className="cart_header">
//           <div className="cart_item_title">Cards</div>
//           <div className="cart_quantity_title">Quantity</div>
//           <div className="cart_total_title">Total (INR)</div>
//         </div>

//         {subscriptionList && subscriptionList.map((card, i) => (
//           <div className="item_row" key={i}>
//             <div className="cart_item_title">{card.img}<br />{card.card}</div>
//             <div className="cart_quantity_title">{subscription.event_name}</div>
//             <div className="cart_quantity_title">{subscription.date}</div>
//             <div className="cart_quantity_title">{card.theme}</div>
//             <div className="cart_quantity_title">{card.quantity}</div>
//             <div className="cart_total_title">{card.quantity * card.price}</div>
//             <div className="remove_item" onClick={() => {this._removeFromCart(card.card)}}>x</div>
//           </div>
//         ))}
//         </div>
//       ) : (
//         <div className="contains-no-items">
//           <h3>Oops! Your cart is empty!</h3>
//           <h4>Add items to proceed</h4>
//         </div>
//       )}
//       </div>
//     )
//   }
// }

export default KismetBox 