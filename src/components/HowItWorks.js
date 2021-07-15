import React, {Component} from 'react';
import { Card, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';

class HowItWorks extends Component {

    render() {
        return (
<div className="how_it_works_page">

<p className="how_it_works_header">HOW IT WORKS</p>
<br /> 
<br /> 
<p className="how_cards">
<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardTitle tag="h2">Get Organized</CardTitle> 
<CardSubtitle tag="h3">Create a profile and include all upcoming events in your life. Birthdays, weddings, anniversaries, graduations, retirement parties. </CardSubtitle>
<button className="how_it_works_button" onClick={event =>  window.location.href='/register'}> Get Started</button>
</Card>
</CardGroup>


<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardTitle tag="h2">Find the Perfect Card</CardTitle> 
<CardSubtitle tag="h3">Search by event, by theme, by audience. Select the perfect card for each person, each occasion.  In just a few minutes find greeting cards for every event you have this year.
Can’t decide on a card? Use our preference generator to find the right one.</CardSubtitle>
<button className="how_it_works_button"  onClick={event =>  window.location.href='/cards'}>Card Library</button>
</Card>
</CardGroup>

<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardTitle tag="h2">Confirm Kismet Box</CardTitle> 
<CardSubtitle tag="h3">Recieve your Kismet Box fit with your cards, envelopes, stamps, and message ideas for our friends with writer’s block.</CardSubtitle>
<button className="how_it_works_button"  onClick={event =>  window.location.href='/messageideas'}>Message Ideas</button>
</Card>
</CardGroup>

<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardTitle tag="h2">Send Some Love</CardTitle> 
<CardSubtitle tag="h3">Before each occasion in your life, you will receive a reminder to sign, stamp, & send each card. Don’t forget to write a nice note. You’ll make their day!</CardSubtitle>
<button className="how_it_works_button"  onClick={event =>  window.location.href='/register'}>Get Started</button>
</Card>
</CardGroup>
</p>
</div>

        ) 
    }
}

export default HowItWorks
