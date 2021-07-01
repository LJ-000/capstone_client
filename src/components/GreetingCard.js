import React from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';


const GreetingCard = (props) => {
    return (
        <div>
            Is anything working? 
                <CardGroup>
                <Card>  
                <CardImg className="card_img" width="80%" src={props.card.img}/>
                <CardTitle>{props.card.theme}</CardTitle> 
                <CardSubtitle>{props.card.price}</CardSubtitle>
                </Card>
                </CardGroup>
        </div>

        )
    }

export default GreetingCard;