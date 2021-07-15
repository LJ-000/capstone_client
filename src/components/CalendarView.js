import React from 'react';
import CreateEvent from './CreateEvent';
import Subscription from './Subscription'

const CalendarView = (props) => {

    return (

<div className="calendar_page">
    <p>
    Welcome back, Laura! Who are we celebrating?
    <br /> 
    Update your calendar with upcoming events!
    </p>

    <p className="subscription_card">
    {props.subscription.map(subscription =>
    <Subscription
    subscription={subscription}
    key={subscription.id}
    />)}
    </p>

    <p className="event_form">
    <CreateEvent createNew = {props.createNew}/>
    </p> 

</div>
)}

export default CalendarView