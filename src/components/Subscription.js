import React from 'react';
import dateFormat from 'dateformat';
import { Card, CardTitle, CardSubtitle, CardGroup, CardBody, Button} from 'reactstrap';

const Subscription = (props) => {



  return (
    <div>
            <CardGroup className="text-center">
            <Card>  
            <CardTitle tag="h3">{props.subscription.event_name}</CardTitle> 
            <CardSubtitle className="mb-2 text-muted">Event Date: {props.subscription.date}</CardSubtitle>
            <br />
            <CardBody>Repeat: {props.subscription.repeat}</CardBody>
            <br />
            <br />

            <CardBody>Send By: {props.subscription.mail_by}</CardBody>
            <br />
            <CardBody>Reminder Date: {props.subscription.reminder_date}</CardBody>
            <br />

            <CardBody>Reminder Method: {props.subscription.reminder_method}</CardBody>
            <br />

            <Button className="find_cart" onClick={event =>  window.location.href='/cards'}>Edit Event</Button> 
            <Button className="find_cart" onClick={() => this.props.handleDelete()}>Delete Event</Button> 

            </Card>
            </CardGroup>
    </div>

  )

}

export default Subscription 
