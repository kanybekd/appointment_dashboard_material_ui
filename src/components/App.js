import React, { Component } from 'react'
import AddAppoitment from "./AddAppoitment"
import ToggleAppointment from "./ToggleAppointment"
import List from "./List"
import Search from "./Search"
import NavMenu from "./Navbar"
import "../css/App.css"
import { nanoid } from 'nanoid'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data:[],
             toggle:false
        }
    }
    componentDidMount(){
        fetch('./data.json')
        .then(res=> res.json())
        .then(data=>{
            data.forEach(i=>i["id"]=nanoid());
            this.setState({data})})
        .catch(err=>console.log({err}))
    }
    // id=(x)=>{
        
    //     console.log(x)
    // }
    removeItem=(item)=>{
        // console.log(item)
        const {data} = this.state
        const newData = [...data]
        const findIndex = newData.findIndex(i=>i.id===item)
        newData.splice(findIndex,1)
        this.setState({data:newData})
        // console.log(findIndex)
    }
    toggleAppointment=()=>{
        console.log("toggled")
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        console.log(this.state.data,"<>")
        return (
            <div className="app">
                <NavMenu/>
                <ToggleAppointment toggleAppointment={this.toggleAppointment}/>
                {
                    this.state.toggle ? <AddAppoitment/> : <List removeItem={this.removeItem} appointments={this.state.data}/>
                }               
                <span>{"<"}</span>            
                <span>{">"}</span>            
                {/* <Search/>S */}
                
            </div>
        )
    }
}
