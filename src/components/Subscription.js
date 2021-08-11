import React from 'react';
import { Card, CardTitle, CardSubtitle, CardGroup, CardBody, Button} from 'reactstrap';

const Subscription = (props) => {

  let formatedMailDate = new Date(props.subscription.mail_by)
  let formatedDate = new Date(props.subscription.date)
  let formatedReminder = new Date(props.subscription.reminder_date)

  return (

    <div>
           {/* {console.log({props.subscription.mail_by}.toLocaleString('en-US', options))} */}
             {/* {console.log(Date.parse(props.subscription.mail_by))} */}
            {/* {console.log(Date.parse(props.subscription.mail_by).toDateString())} */}

{console.log(formatedDate)}
            <CardGroup className="text-center">
            <Card>  
            <CardTitle tag="h3">{props.subscription.event_name}</CardTitle> 
            <CardSubtitle className="mb-2 text-muted">Event Date: {formatedDate.toDateString()}</CardSubtitle>
            <br />
            <CardBody>Repeat: {props.subscription.repeat}</CardBody>
            <br />
            <br />

            <CardBody>Send By: {formatedMailDate.toDateString()} </CardBody>
            <br />
            <CardBody>Reminder Date: {formatedReminder.toDateString()}</CardBody>
            <br />

            <Button className="edit_event" onClick={event =>  window.location.href='/cards'}>Edit Event</Button> 
            <Button className="delete_event" onClick={() => props.handleDelete(props.subscription.id)}>Delete Event</Button> 

            </Card>
            </CardGroup>
    </div>

  )
          
}

export default Subscription 
