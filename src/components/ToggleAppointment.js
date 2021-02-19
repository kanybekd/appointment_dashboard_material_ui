import React, { Component } from 'react'

export default class ToggleAppointment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div class="toggleApp" onClick={this.props.toggleAppointment} >
                <div>+</div>
                <div>Add Appointment</div>
            </div>
        )
    }
}
