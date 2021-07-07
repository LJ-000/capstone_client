// import { Component } from 'react'
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

//   class ContentSearch extends Component {

//     state = {
//         content: []
//     }

//     handleEvent(date) {
//         this.setState({
//         event_date: date
//       })
//     }

//     handleChange = (e) => {
//         let updatedValue = e.currentTarget.value;
    
//         if (updatedValue === "true" || updatedValue == "false") {
//             updatedValue = JSON.parse(updatedValue);
//         }
    
//         const updatedItem = {
//             ...this.props.content,
//             [e.currentTarget.content]: updatedValue
//         }
    
//         this.props.updateItem(this.props.index, updatedItem);
//     }

//     render() {
//         return (
//         <div className="content_search">
//         <h3>Message on the inside?</h3>
//         <Dropdown  value={this.props.content.isAvailable}
//     onChange={this.handleChange}/>
//         </div>
//         )
//     }
// }

// export default ContentSearch