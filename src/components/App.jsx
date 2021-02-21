import React, { Component } from 'react'
import {Button} from "reactstrap"
import AddAppoitment from "./AddAppoitment"
import ToggleAppointment from "./ToggleAppointment"
import List from "./List"
import Search from "./Search"
import NavMenu from "./Navbar"
import "../css/App.css"
import { nanoid } from 'nanoid'
// {
//     "petName": "Buffy",
//     "ownerName": "Hassum Harrod",
//     "aptDate": "2015-06-20 15:30",
//     "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
//     },

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage:0,
            data:[],
            searchedData:[],
            toggle:false,
            search:"",
            date:'',
            owner:'',
            name:'',
            time:'',
            notes:''
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
        // console.log("toggled")
        this.setState({toggle:!this.state.toggle})
    }
    search=(searching)=>{
        // console.log("<><Sear",searching.target.value)

        this.setState({search:searching.target.value})
    }
    newAppointment=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        // console.log("new data",data.target.value)
    }
    submitNewApp=()=>{
        const newObj = {}
        const newData =[...this.state.data]
        const exists = newData.filter(i=>i.ownerName===this.state.owner)
        console.log("<><><>",exists)
        if(!this.state.name || !this.state.owner || !this.state.date || !this.state.time  ){
            alert("enter fields..")
            return;
        }
        // console.log("obj",newObj)
        else if(exists.length===0){
            newObj["petName"]=this.state.name.slice(0,1).toUpperCase()+this.state.name.slice(1)
            newObj["ownerName"]=this.state.owner.slice(0,1).toUpperCase()+this.state.owner.slice(1)
            newObj["aptDate"]= `${this.state.date} ${this.state.time}`                       //"2015-06-20 15:30",
            newObj["aptNotes"]=this.state.notes
            newObj["id"]=nanoid()
            newData.unshift(newObj)
            this.setState({data:newData,toggle:!this.state.toggle,name:"",owner:"",date:"",time:"",notes:""})
        }
        else{
            alert("u have already booked!")
        }
    }
    next=()=>{
        this.setState({currentPage:this.state.currentPage+1})
    }
    prev=()=>{
        this.setState({currentPage:this.state.currentPage-1})
    }
    render() {
        console.log(this.state.currentPage,"<>")
        const {currentPage,data} = this.state
        const filtered = data.filter(i=>i["petName"].toLowerCase().includes(this.state.search.toLowerCase()))
        const paging = filtered.slice(currentPage*4,currentPage*4+4)
        const prevDisabled = currentPage===0 ? "false" : ""
        const nextDisabled = currentPage*4+4<data.length ? "" : "false"
        // console.log("dis or not",disabledOrNot)
        return (
            <div className="app">
                <NavMenu/>
                <ToggleAppointment toggleAppointment={this.toggleAppointment}/>
                {
                    this.state.toggle ? <AddAppoitment submitNewApp={this.submitNewApp} newAppointment={this.newAppointment} name={this.state.name} owner={this.state.owner} date={this.state.date} time={this.state.time} /> : 
                    <>
                    <Search search={this.search} value={this.state.search}/>
                    <List  removeItem={this.removeItem} appointments={paging}/>
                    </>
                }    
                {this.state.toggle ? "" : <div className="buttons">
                    <Button disabled = {prevDisabled} color="primary" onClick={this.prev}>prev</Button>
                    <Button disabled={nextDisabled} color="primary" onClick={this.next}>next</Button>
                </div>}                  
                
            </div>
        )
    }
}
