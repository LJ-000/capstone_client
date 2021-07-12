import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const subscription_url = "http://localhost:3000/api/v1/subscriptions";

export default class CreateEvent extends Component {

    state = {
        reminder_date: new Date(),
        mail_by: new Date(),
        event_name: "",
        repeat: [],
        reminder_method: [],
        date: new Date(),
        audience: [],
        theme: [],
        card_id: "",
        openModal : false
    };

    // constructor (props) {
    //       super(props)
    //       this.state = {
    //         date: new Date()
    //       };
    //       this.state = {
    //         reminder_date: new Date()
    //       };
    //       this.state = {
    //         mail_by: new Date()
    //       }

          // this.state = {
          //   audience: audience 
          // }

          // this.state = {
          //   theme: theme
          // }

        //   this.handleEvent = this.handleEvent.bind(this);
        //   this.eventSubmit = this.eventSubmit.bind(this);

        //   this.handleReminder = this.handleReminder.bind(this);
        //   this.reminderSubmit = this.reminderSubmit.bind(this);

        //   this.handleMailBy = this.handleMailBy.bind(this);
        //   this.mailSubmit = this.mailSubmit.bind(this);

        //   this.handleEventName = this.handleEventName.bind(this);
        //   this.eventNameSubmit = this.eventNameSubmit.bind(this);

        //   this.handleTheme = this.handleTheme.bind(this);
        //   this.themeSubmit = this.themeSubmit.bind(this);

        //   this.handleAudience = this.handleAudience.bind(this);
        //   this.audienceSubmit = this.audienceSubmit.bind(this);
  
      
        // }



      requestToServer = (e) => {
        e.preventDefault()
        const reqObj = {}
          reqObj.headers = { "Content-Type": "application/json" }
          reqObj.method = "POST"
          reqObj.body = JSON.stringify({ ...this.state })
        
    
        fetch(subscription_url, reqObj)
          .then(res => res.json())
          .then((newSubscription) => {
            this.props.createNew(newSubscription)
            this.setState({
            reminder_date: [],
            mail_by: [],
            event_name: "",
            repeat: [],
            reminder_method: [],
            date: [],
            audience: [],
            theme: [],
    }) 
      }) 
          }

//       handleEventName(event_name) {
//           this.setState({
//           event_name: event_name
//           })
//     }
      
//       eventNameSubmit(e) {
//           e.preventDefault();
//           console.log(this.state.event_name)
//     }

//       handleEvent(date) {
//         this.setState({
//         date: date
//       })
//     }
  
//       eventSubmit(e) {
//         e.preventDefault();
//         console.log(this.state.event_date)
//     }

//       handleReminder(reminder_date) {
//         this.setState({
//         reminder_date: reminder_date
//       })
//     }
  
//       reminderSubmit(e) {
//         e.preventDefault();
//         console.log(this.state.reminder_date)
//     }

//       handleMailBy(mail_by) {
//         this.setState({
//         mail_by: mail_by
//       })
//     }
  
//       mailSubmit(e) {
//         e.preventDefault();
//         console.log(this.state.mail_by)
//     }


//     handleTheme(theme) {
//       this.setState({
//       theme: theme
//     })
//   }

//     themeSubmit(e) {
//       e.preventDefault();
//       console.log(this.state.theme)
//   }

//     handleAudience(audience) {
//       this.setState({
//       audience: audience
//   })
// }

//     audienceSubmit(e) {
//       e.preventDefault();
//       console.log(this.state.audience)
// }

  
        onClickButton = e =>{
            e.preventDefault()
            this.setState({openModal : true})
        }
    
        onCloseModal = ()=>{
            this.setState({openModal : false})
        }
    

      render() {
        return (
          <section className="create_event">
            <div>
              <h2 className="add_new"> Add New Event</h2>
            </div>
            <form onSubmit={this.requestToServer} >
    
              <div className="event_name_field">
                Give this event a name
                <input value={this.state.event_name} onChange={(e) => this.setState({ event_name: e.target.value })} type="text" className="form-control mb-2 mr-sm-2" />
              </div>

               <div className="event_date_field">
                 Select event date
                <DatePicker
                selected={ this.state.date }
                // onChange={ this.handleEvent }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>

              <div className="audience_field">
                 Who are we celebrating? Select your audience 
                 <select value={this.state.audience} onChange={(e) => this.setState({ audience: e.target.value })} >
                <option value='' disabled selected hidden>Select</option>
                <option value="Anyone">Anyone</option>
                <option value="Significant Other">Significant Other</option>
                <option value="Wife">Wife</option>
                <option value="Husband">Husband</option>
                <option value="Friend">Friend</option>
                <option value="Sister">Sister</option>
                <option value="Brother">Brother</option>
                <option value="Mom">Mom</option>
                <option value="Dad">Dad</option>
                <option value="Grandma">Grandma</option>
                <option value="Grandpa">Grandpa</option>
                <option value="StepMom">StepMom</option>
                <option value="StepDad">StepDad</option>
                <option value="Aunt">Aunt</option>
                <option value="Uncle">Uncle</option>
                <option value="GodMother">GodMother</option>
                <option value="GodFather">GodFather</option>
                <option value="Teacher">Teacher</option>
                </select>
              </div>

              <div className="theme_field">
                 Select a theme 
                <select value={this.state.theme} onChange={(e) => this.setState({ theme: e.target.value })} >
                <option value='' disabled selected hidden>Select</option>
                <option value="Birthday">Birthday</option>
                <option value="Encouragement">Encouragement</option>
                <option value="Wedding">Wedding</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Thank You">Thank You</option>
                <option value="Get Well">Get Well</option>
                <option value="Congratulations">Congratulations</option>
                <option value="Invitation">Invitation</option>
                <option value="Housewarming">Housewarming</option>
                </select>
              </div>

              <div className="repeat_field">
                Repeat event?
                <select value={this.state.repeat} onChange={(e) => this.setState({ repeat: e.target.value })} >
                <option value='' disabled selected hidden>Select</option>
                <option value="Once">Once</option>
                <option value="Every Month">Every Month</option>
                <option value="Every Year">Every Year</option>
                </select>
              </div>
    
              <div className="reminder_date_field">
                Add a reminder date
                <DatePicker
                selected={ this.state.reminder_date }
                // onChange={ this.handleReminder }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>

              <div className="mail_by_field">
                Select your mail by date 
              <DatePicker
                selected={ this.state.mail_by }
                // onChange={ this.handleMailBy }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>

              <div className="delivery_method_field">
                Choose a delivery method
                <select value={this.state.reminder_method} onChange={(e) => this.setState({ reminder_method: e.target.value })} >
                <option value='' disabled selected hidden>Select</option>
                <option value="Mail">Mail</option>
                <option value="Hand Delivery">Hand Delivery</option>
                </select>
              </div>

              <button onClick={this.onClickButton}>Submit Event</button>
              <div>
              <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                <h1>Your New Event Was Added!</h1>
                <button onClick={event =>  window.location.href='/cards'}>Find the Perfect Card!</button>
                <button onClick={event =>  window.location.href='/calendar'}>Review My Calendar!</button>
              </Modal>   
              </div>
            </form>
          </section>
        )
      }
    }

    // import React, { Component } from 'react'
    // import { Modal } from 'react-responsive-modal';
    // import 'react-responsive-modal/styles.css';
    
    // class ModalInClassComponents extends Component {
    
    //     state={
    //         openModal : false
    //     }
    
    //     onClickButton = e =>{
    //         e.preventDefault()
    //         this.setState({openModal : true})
    //     }
    
    //     onCloseModal = ()=>{
    //         this.setState({openModal : false})
    //     }
    
    //     render() {
    //         return (
    //             <div>
    //                 <button onClick={this.onClickButton}>Click Me</button>
    //                 <Modal open={this.state.openModal} onClose={this.onCloseModal}>
    //                     <h1>You Did it!</h1>
    //                 </Modal>   
    //             </div>
    //         )
    //     }  
    // }
    
    // export default ModalInClassComponents;
