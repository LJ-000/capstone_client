import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import CreateEvent from './components/CreateEvent';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardContainer from './components/CardContainer';
import HowItWorks from './components/HowItWorks';
import MessageIdeas from './components/MessageIdeas';
import AboutKismet from './components/AboutKismet';
import KismetBox from './components/KismetBox';
import SubscriptContainer from './components/SubscriptContainer.js';
import CalendarView from './components/CalendarView'

const card_url = "http://localhost:3000/api/v1/cards";
const subscription_url = "http://localhost:3000/api/v1/subscriptions";


class AppContainer extends Component {

state = {
    card: [],
    subscription: [],
    reminder_date: [],
    mail_by: [],
  };

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

    Logout = () => {
        localStorage.clear()
        }
 

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

            <Route exact path={["/kismetbox"]}>
                <KismetBox subscription={this.state.subscription}/>
            </Route>

            <Route exact path={["/kismetbox"]}>
                <SubscriptContainer subscription={this.state.subscription}/>
            </Route> 

            <Route path={["/howitworks"]}>
                <HowItWorks/>
            </Route>

            <Route path={["/messageideas"]}>
                <MessageIdeas/>
            </Route>
            
            <Route path={["/calendar"]}>
            <CalendarView/>
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
