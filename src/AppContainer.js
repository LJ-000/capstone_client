import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import CreateEvent from './components/CreateEvent';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardContainer from './components/CardContainer';
import HowItWorks from './components/HowItWorks';
import MessageIdeas from './components/MessageIdeas';
import AboutKismet from './components/AboutKismet';
import KismetBox from './components/KismetBox';
import CalendarView from './components/CalendarView'
import OrderConfirmation from './components/OrderConfirmation';

const card_url = "http://localhost:3000/api/v1/cards";
const subscription_url = "http://localhost:3000/api/v1/subscriptions";
const order_url = "http://localhost:3000/api/v1/orders";


class AppContainer extends Component {

state = {
    card: [],
    subscription: [],
    order: [],
    order_item: [],
    reminder_date: [],
    mail_by: [],
  };

  constructor(props) {
      super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteSubscription = this.deleteSubscription.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateSubscription = this.updateSubscription.bind(this)
    }

  createNew = (subscription) => this.setState({
    subscription: [...this.state.subscription, subscription] })

    handleDelete(id){
        fetch(`http://localhost:3000/api/v1/subscriptions/${id}`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => { 
            console.log('deleted!')
            this.deleteSubscription(id)
          })
      }
    
      deleteSubscription(id){
        const newSubscriptions = this.state.subscription.filter((subscription) => subscription.id !== id)
        this.setState({
          subscription: newSubscriptions
        })
      }
    
    handleUpdate(subscription){
      fetch(`http://localhost:3000/api/v1/subscriptions/${subscription.id}`, 
      {
        method: 'PUT',
        body: JSON.stringify({subscription: subscription}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => { 
          this.updateSubscription(subscription)
        })
    }
    updateSubscription(subscription){
      let newSubscription = this.state.subscription.filter((f) => f.id !== subscription.id)
      newSubscription.push(subscription)
      this.setState({
        subscription: newSubscription
      })
    }  


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

    fetch(order_url)
    .then(res => res.json())
    .then(data => this.setState({
        order: data,   
}
)
    );

}

    // Logout = () => {
    //     localStorage.clear()
    //     }
 
        render() {
        return(
           
        <div className="app_container">
            <BrowserRouter>
            <Header/>
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
                <CardContainer card={this.state.card} 
                // sendToKismetBox={this.state.sendToKismetBox}
                />
            </Route>

            <Route exact path={["/kismetbox"]}>
                <KismetBox 
                // cartNew = {this.cartNew}
                />
            </Route> 

            <Route path={["/orderconfirmation"]}>
                <OrderConfirmation/>
            </Route>

            <Route path={["/howitworks"]}>
                <HowItWorks/>
            </Route>

            <Route path={["/messageideas"]}>
                <MessageIdeas/>
            </Route>
            
            <Route path={["/calendar"]}>
            <CalendarView subscription={this.state.subscription} createNew = {this.createNew} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate} />
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
