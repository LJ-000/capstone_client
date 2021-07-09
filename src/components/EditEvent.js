// import Modal from "./modal";
// import { Component } from "react";
// import { useState, useEffect } from "react";
// import "react-datepicker/dist/react-datepicker.css";

// const subscription_url = "http://localhost:3000/api/v1/subscriptions";

// const EditEvent = (props) => {

//     const [event_name, card, theme, audience] = useState("")
//     const [date, reminder_date, mail_by] = useState([])

//     function editDates(date, reminder_date, mail_by)

  
//     render() {
//     return (
//       <div>
//         <Link to={`${this.props.match.subscription_url}/edit`}>Edit Profile</Link>

//         <Route
//           path={`${this.props.match.subscription_url}/edit`}
//           render={() => {
//             return (
//               <Modal
//                 onClick={() => {
//                   this.props.history.push(this.props.match.subscription_url);
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}
//                 >
//                   Edit this Event
//                 </div>
//               </Modal>
//             );
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default EditEvent; 