import React from 'react';
import { Card, CardTitle, CardSubtitle, CardGroup, CardBody, Button} from 'reactstrap';


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Subscription = (props) => {

  return (

    <div>
            {/* {console.log(props.subscription.mail_by.toLocaleString('en-US', options))} */}
            {/* {console.log(Date.parse(props.subscription.mail_by))} */}
            {/* {console.log(Date.parse(props.subscription.mail_by).toDateString())} */}

            <CardGroup className="text-center">
            <Card>  
            <CardTitle tag="h3">{props.subscription.event_name}</CardTitle> 
            <CardSubtitle className="mb-2 text-muted">Event Date: {props.subscription.date.toLocaleString('en-US', options)}</CardSubtitle>
            <br />
            <CardBody>Repeat: {props.subscription.repeat}</CardBody>
            <br />
            <br />

            <CardBody>Send By: {props.subscription.mail_by}</CardBody>
            <br />
            <CardBody>Reminder Date: {props.subscription.reminder_date}</CardBody>
            <br />

            <Button className="find_cart" onClick={event =>  window.location.href='/cards'}>Edit Event</Button> 
            <Button onClick={() => props.handleDelete(props.subscription.id)}>Delete Event</Button> 

            </Card>
            </CardGroup>
    </div>

  )

}

export default Subscription 
