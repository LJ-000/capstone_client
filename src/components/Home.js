import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div className="homepage">
            <p className="home_sqaure">
            <br /> 
            <h1 className="home_1">Welcome to Kismet</h1>
            {/* <h3 className="home_2">Birthdays, weddings, anniversaries, graduations 
            <br /> 
            The perfect card for every event
            <br /> 
            <br /> 
            </h3>             */}
            </p>

            <p className="home_quote">Birthdays, weddings, anniversaries, graduations <br /> 
            The perfect card for every event
            </p>
            </div>

        )
    }
}

export default Home