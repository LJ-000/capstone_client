import React from 'react';
import Subscription from './Subscription';

const SubscriptContainer = (props) => {

    return (
        <div>
            {props.subscription.map(subscription =>
            <Subscription
            subscription={subscription}
            key={subscription.id}
            handleDelete={this.handleDelete}/>
            
            )}
        </div>
    )
}

export default SubscriptContainer 

