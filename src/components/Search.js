import React, { Component } from 'react'
import {  Form, FormGroup,Input} from 'reactstrap';

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        return (
            <Form className="form">
                <FormGroup>
              {/* <Label for="exampleEmail">Email</Label> */}
              <Input type="email" onChange={this.props.search} value={this.props.value} name="email" id="exampleEmail" placeholder="search by name..." />
             </FormGroup>
            </Form>
        )
    }
}

