import React from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';


const GreetingCard = (props) => {
    return (
        <div className="greeting_card">
                <CardGroup className="text-center">
                <Card>  
                <CardImg className="card_img" width="20%" src={props.card.img}/>
                <CardTitle tag="h5">{props.card.theme}</CardTitle> 
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.card.price}</CardSubtitle>
                </Card>
                </CardGroup>
        </div>

        )
    }

export default GreetingCard;