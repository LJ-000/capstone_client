import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';

class HowItWorks extends Component {

    render() {
        return (
<div>

<h1>How It Works</h1>

<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardImg className="card_img" width="7%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXUpmHur_pr8EdheAJDVqoiqVhM_oxN5aUw&usqp=CAU"/>
<CardTitle tag="h1">Get Organized</CardTitle> 
<CardSubtitle tag="h5">Create a profile and include all upcoming events in your life. Birthdays, weddings, anniversaries, graduations, retirement parties. </CardSubtitle>
<button onClick={event =>  window.location.href='/register'}> Get Started</button>
</Card>
</CardGroup>


<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardImg className="card_img" width="7%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXUpmHur_pr8EdheAJDVqoiqVhM_oxN5aUw&usqp=CAU"/>
<CardTitle tag="h1">Find the Perfect Card</CardTitle> 
<CardSubtitle tag="h5">Search by event, by theme, by audience. Select the perfect card for each person, each occasion.  In just a few minutes find greeting cards for every event you have this year.
Can’t decide on a card? Use our preference generator to find the right one.</CardSubtitle>
<button onClick={event =>  window.location.href='/cards'}>Card Library</button>
</Card>
</CardGroup>

<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardImg className="card_img" width="7%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXUpmHur_pr8EdheAJDVqoiqVhM_oxN5aUw&usqp=CAU"/>
<CardTitle tag="h1">Confirm Kismet Box</CardTitle> 
<CardSubtitle tag="h5">Recieve your Kismet Box fit with your cards, envelopes, stamps, and message ideas for our friends with writer’s block.</CardSubtitle>
<button onClick={event =>  window.location.href='/messageideas'}>Message Ideas</button>
</Card>
</CardGroup>

<CardGroup className="text-center">
<Card className="how_it_works_cards">  
<CardImg className="card_img" width="7%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXUpmHur_pr8EdheAJDVqoiqVhM_oxN5aUw&usqp=CAU"/>
<CardTitle tag="h1">Send Some Love</CardTitle> 
<CardSubtitle tag="h5">Before each occasion in your life, you will receive a reminder to sign, stamp, & send each card. Don’t forget to write a nice note. You’ll make their day!</CardSubtitle>
<button onClick={event =>  window.location.href='/register'}>Get Started</button>
</Card>
</CardGroup>
</div>

        ) 
    }
}

export default HowItWorks
