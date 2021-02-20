
import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddAppoitment extends Component{

render(){
  return (
    <Form className="form" style={{position:"relative"}}>
      <FormGroup>
        <Label for="exampleEmail">Pet name *</Label>
        <Input type="name" value={this.props.name} onChange={this.props.newAppointment} name="name" id="exampleEmail" placeholder="type name..." />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Owner *</Label>
        <Input type="name" value={this.props.owner} onChange={this.props.newAppointment} name="owner" id="examplePassword" placeholder="type owner..." />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Date *</Label>
        <Input type="name" value={this.props.date} onChange={this.props.newAppointment} name="date" id="examplePassword" placeholder="YYYY-MM-dd" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Time *</Label>
        <Input type="name" value={this.props.time} onChange={this.props.newAppointment} name="time" id="examplePassword" placeholder="--:-- --" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Add note</Label>
        <Input type="textarea" value={this.props.notes} onChange={this.props.newAppointment} name="notes" id="exampleText" />
      </FormGroup>
        <span style={{color:"red",marginRight:"40px"}}>* required fields</span>
      <Button style={{position:"absolute",right:"10px" ,width:"40%"}} onClick={this.props.submitNewApp} color="primary">Submit</Button>
    </Form>
  );
}
}

export default AddAppoitment;
