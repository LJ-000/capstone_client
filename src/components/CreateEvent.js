import { withTheme } from '@material-ui/core';
import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const subscription_url = "http://localhost:3000/api/v1/subscriptions";


export default class CreateEvent extends Component {

    state = {
        reminder_date: [],
        mail_by: [],
        event_name: [],
        repeat: [],
        reminder_method: [],
        date: [],
        card_id: "",
        openModal : false
    };

    constructor (props) {
          super(props)
          this.state = {
            date: new Date()
          };
          this.state = {
            reminder_date: new Date()
          };
          this.state = {
            mail_by: new Date()
          }
          this.handleEvent = this.handleEvent.bind(this);
          this.eventSubmit = this.eventSubmit.bind(this);

          this.handleReminder = this.handleReminder.bind(this);
          this.reminderSubmit = this.reminderSubmit.bind(this);

          this.handleMailBy = this.handleMailBy.bind(this);
          this.mailSubmit = this.mailSubmit.bind(this);
      
        }

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
            event_name: [],
            repeat: [],
            reminder_method: [],
            date: []
    }) 
      }) 
          }

      handleEvent(date) {
        this.setState({
        date: date
      })
    }
  
      eventSubmit(e) {
        e.preventDefault();
        console.log(this.state.event_date)
    }

      handleReminder(date) {
        this.setState({
        reminder_date: date
      })
    }
  
      reminderSubmit(e) {
        e.preventDefault();
        console.log(this.state.reminder_date)
    }

      handleMailBy(date) {
        this.setState({
        mail_by: date
      })
    }
  
      mailSubmit(e) {
        e.preventDefault();
        console.log(this.state.mail_by)
    }

  
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
            <form onSubmit={e => this.requestToServer(e)} className="form-inline ml-4">
    
              <div className="event_name_field">
                Give this Event a Name
                <input value={this.state.event_name} onChange={(e) => this.setState({ event_name: e.target.value })} type="text" className="form-control mb-2 mr-sm-2" />
              </div>

               <div className="event_date_field">
                 Select Event Date
                <DatePicker
                selected={ this.state.date }
                onChange={ this.handleEvent }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>

              <div className="repeat_field">
                Repeat Event?
                <select value={this.state.repeat} onChange={(e) => this.setState({ repeat: e.target.value })} >
                <option value='' disabled selected hidden>Select</option>
                <option value="Once">Once</option>
                <option value="Every Month">Every Month</option>
                <option value="Every Year">Every Year</option>
                <option value="Custom">Custom</option>
                </select>
              </div>
    
              <div className="reminder_date_field">
                Select Date for Your Reminder
                <DatePicker
                selected={ this.state.reminder_date }
                onChange={ this.handleReminder }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>

              <div className="mail_by_field">
                Select Your Mail By Date 
              <DatePicker
                selected={ this.state.mail_by }
                onChange={ this.handleMailBy }
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
