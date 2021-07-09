import React from 'react';
import CreateEvent from './CreateEvent';
import Subscription from './Subscription'

const CalendarView = (props) => {

    return (

<div>

    {props.subscription.map(subscription =>
    <Subscription
    subscription={subscription}
    key={subscription.id}
    />)}

<CreateEvent />
    
</div>
)}

export default CalendarView