import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CreateEvent from './components/CreateEvent';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardContainer from './components/CardContainer';
import HowItWorks from './components/HowItWorks';
import AboutKismet from './components/AboutKismet';
// import KismetBox from './components/KismetBox'
import SubscriptContainer from './components/SubscriptContainer.js';



const BASE_URL = 'http://localhost:3000/api/v1/';
const card_url = "http://localhost:3000/api/v1/cards";
const subscription_url = "http://localhost:3000/api/v1/subscriptions";

class AppContainer extends Component {

state = {
    card: [],
    subscription: [],
    reminder_date: [],
    mail_by: [],
  };

//   constructor (props) {
//     super(props)
//     this.state = {
//       event_date: new Date()
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }

      componentDidMount() {
        fetch(card_url)
        .then(res => res.json())
        .then(data => this.setState({
             card: data,
}
    )
        );

        fetch(subscription_url)
        .then(res => res.json())
        .then(data => this.setState({
            subscription: data,   
}
)
    );
}

    //     useEffect(() => {
    //         fetch(subscription_url), {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.token}`
    //             }
    //         }
    //         .then(res => res.json())
    //         .then(data => this.setState({
    //             subscription: data,  
    //    }
    //         )
    //             ) })
    //   }

    // Logout = () => {
    //     localStorage.clear()
    //     }
 
    // handleChange(date) {
    //     this.setState({
    //       event_date: date
    //     })
    //   }
    
    //   onFormSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state.event_date)
    //   }

        render() {
        return(
           
        <div className="app_container">
            <BrowserRouter>
            <Navbar/> 
            <Switch>
            <Route exact path={["/", "/home"]}>
                <Home />
            </Route>
                
            <Route exact path={["/register"]}>
                <Register/>
            </Route>

            <Route exact path={["/login"]}>
                <Login/>
            </Route> 

            <Route exact path={["/cards"]}>
                <CardContainer card={this.state.card}/>
            </Route>

            {/* <Route exact path={["/kismetbox"]}>
                <KismetBox subscription={this.state.subscription}/>
            </Route> */}

            <Route exact path={["/kismetbox"]}>
                <SubscriptContainer subscription={this.state.subscription}/>
            </Route> 

            <Route path={["/howitworks"]}>
                <HowItWorks/>
            </Route>
            
            <Route path={["/calendar"]}>
            {/* <form onSubmit={ this.onFormSubmit }>
            <div className="form-group">
            <DatePicker
              selected={ this.state.event_date }
              onChange={ this.handleChange }
              name="event_date"
              dateFormat="MM/dd/yyyy"
          />
          <button className="btn btn-primary">Submit Event Date</button>
        </div>
      </form> */}
            <CreateEvent/>
            </Route>

            <Route path={["/aboutkismet"]}>
                <AboutKismet/>
            </Route> 

            {/* <button onClick={() => Logout()}>Log Out</button> */}

            </Switch>

            {/* <button onClick={() => Logout()}>Log Out</button> */}

        </BrowserRouter>
    </div>

        );
    }
}

export default AppContainer
