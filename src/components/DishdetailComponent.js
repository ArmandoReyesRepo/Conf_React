import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input,
    Label} from 'reactstrap';



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

    class CommentForm extends Component {

        constructor(props) {
            super(props);
            this.state= {
                isModalOpen:false
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
        }

        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        handleLogin(event) {
            this.toggleModal();
            alert("Username: " + this.username.value + "Password: " + this.password.value 
                 + "Remember: " + this.remember.checked);
            event.preventDefault(); 
        }

        render() { 
            
            return(
            <>
            <Button outline onClick = {this.toggleModal}>
                <span className= "fa fa-pencil fa-lg"> Submit Comment  </span>
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit = {this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor ="username"> Username </Label>
                        <Input type="text"  id="username" name="username"
                        innerRef={(input)=> this.username = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor ="password"> Password </Label>
                        <Input type="password"  id="username" name="password"
                        innerRef={(input)=> this.password = input}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember" 
                            innerRef={(input)=> this.remember = input}/>
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" className="bg-primary"> Login </Button>
                </Form>
            </ModalBody>
        </Modal>
            </>
        ); }      
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
                    <CommentForm/>                  
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