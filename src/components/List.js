import React, { Component } from 'react'
import Moment from "react-moment";
import { Button } from 'reactstrap';
// import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
export default class List extends Component {
    toggle=(x)=>{
        console.log("<>",x)
        // this.props.id(x)
    }
    render() {
        return (
            <div className="appointments">
                 {
                    this.props.appointments.map((i)=>{
                        return (
                            <div  className="single-appointment" key={i.id}>
                                <div className="close-app"><Button onClick={()=>this.props.removeItem(i.id)} color="primary">X</Button></div>
                                <div className="pet-info">
                                    <span style={{color:"#007BFF",fontWeight:"bolder"}}><span> {i.petName}</span>
                                    <span className="date">  
                                    <Moment
                                     date = {i.aptDate}
                                     parse = "YYYY-MM-dd hh:mm"
                                     format = "MMM-D h:mm a"
                                    /></span> </span>
                                    <span style={{fontWeight:"bolder"}}>owner:{i.ownerName}</span>
                                    <span>{i.aptNotes}</span>
                                </div>
                                {/* <div className="date">
                                    <span className="date-content" >{i.aptDate}</span>
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
