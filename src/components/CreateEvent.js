import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const subscription_url = "http://localhost:3000/subscriptions";

export default class CreateEvent extends Component {

    state = {
        reminder_date: new Date(),
        mail_by: new Date(),
        event_name: "",
        repeat: "",
        reminder_method: "",
        date: new Date(),
        // audience: "",
        // theme: "",
        // openModal : false
    };


      requestToServer = (e) => {
        e.preventDefault()
        const reqObj = {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ reminder_date: this.state.reminder_date, mail_by: this.state.mail_by, event_name: this.state.event_name, repeat: this.state.repeat, reminder_method: this.state.reminder_method, date: this.state.date })
        }
        // audience: this.state.audience, theme: this.state.theme
        fetch(subscription_url, reqObj)
          .then(res => res.json())
          .then((subscription => this.props.createNew(subscription)))

      }

      handleEvent(date) {
        this.setState({
        date: date
      })
    }
  
      eventSubmit(e) {
        e.preventDefault();
        console.log(this.state.date)
    }

      handleReminder(reminder_date) {
        this.setState({
        reminder_date: reminder_date
      })
    }
  
      reminderSubmit(e) {
        e.preventDefault();
        console.log(this.state.reminder_date)
    }

      handleMailBy(mail_by) {
        this.setState({
        mail_by: mail_by
      })
    }
  
      mailSubmit(e) {
        e.preventDefault();
        console.log(this.state.mail_by)
    }


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

  
        // onClickButton = e =>{
        //     e.preventDefault()
        //     this.setState({openModal : true})
        // }
    
        // onCloseModal = ()=>{
        //     this.setState({openModal : false})
        // }
    

      render() {
        return (
          <section className="create_event">
            <div>
              <h2 className="add_new"> Add New Event</h2>
            </div>
            <form onSubmit={this.requestToServer} >
    
              <div className="event_name_field">
                Name your event
                <input value={this.state.event_name} onChange={(e) => this.setState({ event_name: e.target.value })} type="text" className="form-control mb-2 mr-sm-2" />
              </div>
              <br />
               <div className="event_date_field">
                 Select event date
                <DatePicker
                selected={ this.state.date } 
                onChange={ this.handleEvent.bind(this) }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>
              <br />
              {/* <div className="audience_field">
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
              </div> */}

              {/* <div className="theme_field">
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
              </div> */}

              <div className="repeat_field">
                Repeat event?
                <select value={this.state.repeat} onChange={(e) => this.setState({ repeat: e.target.value })} >
                <option value='' disabled selected hidden>Select</option>
                <option value="Once">Once</option>
                <option value="Every Month">Every Month</option>
                <option value="Every Year">Every Year</option>
                </select>
              </div>
              <br />
              <div className="reminder_date_field">
                Add a reminder date
                <DatePicker
                selected={ this.state.reminder_date } 
                onChange={ this.handleReminder.bind(this)  }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>
              <br />
              <div className="mail_by_field">
                Select your mail by date 
              <DatePicker
                selected={ this.state.mail_by } 
                onChange={ this.handleMailBy.bind(this)  }
                name="event_date"
                dateFormat="MM/dd/yyyy"
                />
              </div>
              <br />
              <div className="delivery_method_field">
                Choose a delivery method
                <select value={this.state.delivery_method} onChange={(e) => this.setState({ reminder_method: e.target.value })} >
                <option value='' disabled selected hidden>Select</option>
                <option value="Mail">Mail</option>
                <option value="Hand Delivery">Hand Delivery</option>
                </select>
              </div>
              <br />
              <button className="new_event" type="submit" onClick={event =>  window.location.href='/cards'}>Submit Event</button>
              <div>
              {/* <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                <h1>Your New Event Was Added!</h1>
                <button onClick={event =>  window.location.href='/cards'}>Find the Perfect Card!</button>
                <button onClick={event =>  window.location.href='/calendar'}>Review My Calendar!</button>
              </Modal>    */}
              </div>
            </form>
          </section>
        )
      }
    }
