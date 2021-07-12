import React from 'react';
import CreateEvent from './CreateEvent';
import Subscription from './Subscription'

const CalendarView = (props) => {

    return (

<div>
    <p>Welcome back, Laura! Who are we celebrating?</p>
    <p>Update your calendar with upcoming events!</p>
    {props.subscription.map(subscription =>
    <Subscription
    subscription={subscription}
    key={subscription.id}
    />)}

<CreateEvent createNew = {props.createNew}/>
    
</div>
)}

export default CalendarView