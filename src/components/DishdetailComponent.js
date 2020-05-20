import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';



class DishDetail extends Component {

    
    renderDish(dish) {
        if(dish!= null) {
            return (
                
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
               
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        console.log(comments);
        if(comments !== null){
            const commentView = comments.map((c) => 
            <li key={c.id}>
                {c.comment}
                <br/>
                {'--' + c.author + ','}
                &nbsp; &nbsp;
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
            </li>)
         return(
                <div>
                    <h4>Comments</h4>  
                    <ul className = "list-unstyled">
                        {commentView}
                    </ul>
                </div>        
             
         );
       }else{
        return(
            <div></div>
        );
    
       }
    
    }

    render() {
        return (
                <div className="Container">
                    <div className ="row">
                        <div className="col-12  col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 ">
                            {this.renderComments(this.props.dish?this.props.dish.comments:null)}   
                        </div>
                    </div>
                </div>
        );
    }



}

export default DishDetail;