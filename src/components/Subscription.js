import React from 'react';
import { Card, CardTitle, CardSubtitle, CardGroup, CardBody} from 'reactstrap';

const Subscription = (props) => {

  return (
    <div className="subscription_card">
            <CardGroup className="text-center">
            <Card>  
            <CardTitle tag="h5">{props.subscription.event_name}</CardTitle> 
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subscription.date}</CardSubtitle>
            <CardBody>{props.subscription.mail_by}</CardBody>
            <CardBody>{props.subscription.reminder_date}</CardBody>
            <CardBody>{props.subscription.reminder_method}</CardBody>
            <CardBody>{props.subscription.repeat}</CardBody>
            </Card>
            </CardGroup>
    </div>

  )

}

export default Subscription 
