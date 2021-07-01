import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login.js'
import Register from './components/Register'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import CardContainer from './components/CardContainer'
// import CalendarContainer from './components/CalendarContainer'
// import HowItWorks from './components/HowItWorks'
// import AboutKismet from './components/AboutKismet'
// import KismetBox from './components/KismetBox'


const BASE_URL = 'http://localhost:3000/api/v1/';
const home_url = "http://localhost:3000/api/v1/home";
const card_url = "http://localhost:3000/api/v1/cards";
const subscription_url = "http://localhost:3000/api/v1/subscriptions";


class AppContainer extends Component {


    state = {
        display: "",
        card: []
      }
    
      componentDidMount() {
        fetch(card_url)
          .then((r) => r.json())
          .then((data) => this.setState({
              card: data,
            }
        )
    )
}

    render() {
        return (
           
        <div className="app_container">
            <BrowserRouter>
            <Navbar/> 

            <Switch>
            <Route exact path={["/", "/home"]}>
                <Home />
            </Route>
                
            <Route exact path={["/", "/register"]}>
                <Register/>
            </Route>

            <Route path={["/", "/login"]}>
                <Login/>
            </Route> 

            <Route exact path={["/", "/cards"]}>
                <CardContainer card={this.state.card}/>
            </Route>

            {/* <Route path={["/", "/calendarcontainer"]}>
                <CalendarContainer/>
            </Route>

            <Route path={["/", "/kismetbox"]}>
                <KismetBox/>
            </Route>

            <Route path={["/", "/howitworks"]}>
                <HowItWorks/>
            </Route>

            <Route path={["/", "/aboutkismet"]}>
                <AboutKismet/>
            </Route> */}


      {/* <button onClick={() => Logout()}>Log Out</button> */}


            </Switch>
        </BrowserRouter>
    </div>

        );
    }
}

export default AppContainer;


// packages: 
// npm install react-router-dom
// npm i reactstrap react react-dom
