
// class Subscription extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       editable: false
//     }
//     this.handleEdit = this.handleEdit.bind(this)
//   }

//   formatedMailDate = new Date(props.subscription.mail_by);
//   formatedDate = new Date(props.subscription.date);
//   formatedReminder = new Date(props.subscription.reminder_date);

//   handleEdit(){
//     if(this.state.editable){
//       let event_name = this.event_name.value
//       let date = this.date.value
//       let repeat = this.repeat.value 
//       let id = this.props.subscription.id
//       let subscription = {id: id, event_name: event_name, date: date, repeat: repeat}
//       this.props.handleUpdate(subscription)
//     }
//     this.setState({
//       editable: !this.state.editable
//     })
//   }

//   render(){
//     let event_name = this.state.editable ? <input type='text' ref={input => this.event_name = input} defaultValue={this.props.subscription.event_name}/>:<h3>{this.props.subscription.name}</h3>
//     let date = this.state.editable ? <input type='text' ref={input => this.date = input} defaultValue={this.props.subscription.date}/>:<p>{this.props.subscription.date}</p>
//     let repeat = this.state.editable ? <input type='text' ref={input => this.repeat = input} defaultValue={this.props.subscription.repeat}/>:<p>{this.props.subscription.repeat}</p> 
 
//     return (
//     <div>

{/* {console.log(formatedDate)} */}
            {/* <CardGroup className="text-center">
            <Card>  
            <CardTitle tag="h3">{event_name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">Event Date: {date}</CardSubtitle>
            <CardBody>Repeat: {repeat}</CardBody> */}

            {/* <CardTitle tag="h3">{props.subscription.event_name}</CardTitle> 
            <CardSubtitle className="mb-2 text-muted">Event Date: {formatedDate.toDateString()}</CardSubtitle>
            <br />
            <CardBody>Repeat: {props.subscription.repeat}</CardBody>
            <br />
            <br />

            <CardBody>Send By: {formatedMailDate.toDateString()} </CardBody>
            <br />
            <CardBody>Reminder Date: {formatedReminder.toDateString()}</CardBody>
            <br /> */}

            {/* <Button className="edit_event" onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</Button> 
            <Button className="delete_event" onClick={() => props.handleDelete(this.props.subscription.id)}>Delete Event</Button> 

            </Card>
            </CardGroup> */}