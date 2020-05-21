import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';



    function RenderDish({dish}) {
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

    function RenderComments({comments}){
       
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

    const DishDetail= (props) => {
        return (
                <div className="Container">
                     <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name} 
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className = "col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                     </div>
                    <div className ="row">
                        <div className="col-12  col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 ">
                            <RenderComments comments = {props.dish?props.comments:null} />   
                        </div>
                    </div>
                </div>
        );
    }





export default DishDetail;