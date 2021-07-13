import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div className="homepage">
            <p className="home_sqaure">
            <img className="home_img" src= 'https://i.pinimg.com/originals/8e/06/ea/8e06ea83cb664d889cc799b5d72f8330.jpg'/>
            <h1 className="home_1">Welcome to Kismet</h1>
            <br />  <br /> 
            <h3 className="home_2">Birthdays, weddings, anniversaries, graduations. Select the perfect card for every event
            <br /> 
            Receive your Kismet Box and we will remind you when to sign & send each card
            <br /> 
            The people in your life can’t wait to hear from you</h3>
            <br /> 
            <h2 className="home_3">So. Who are we celebrating?</h2>
            </p>
            <p className="home_quote">“Letter writing is the only device for combining solitude with good company”
            </p>
            </div>

        )
    }
}

export default Home