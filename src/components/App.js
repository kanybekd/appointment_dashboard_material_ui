import React, { Component } from 'react'
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
             data:[],
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
        if(!this.state.name || !this.state.owner || !this.state.date || !this.state.time ){
            alert("enter fields..")
        }else{
            newObj["petName"]=this.state.name
            newObj["ownerName"]=this.state.owner
            newObj["aptDate"]= `${this.state.date} ${this.state.time}`                       //"2015-06-20 15:30",
            newObj["aptNotes"]=this.state.notes
            newObj["id"]=nanoid()
            newData.unshift(newObj)
            // console.log(newObj)
            this.setState({data:newData,toggle:!this.state.toggle,name:"",owner:"",date:"",time:"",notes:""})
        }
    }
    render() {
        // console.log(this.state.data,"<>")
        const filtered= this.state.data.filter(i=>i["petName"].toLowerCase().includes(this.state.search.toLowerCase()))
        return (
            <div className="app">
                <NavMenu/>
                <ToggleAppointment toggleAppointment={this.toggleAppointment}/>
                {
                    this.state.toggle ? <AddAppoitment submitNewApp={this.submitNewApp} newAppointment={this.newAppointment} name={this.state.name} owner={this.state.owner} date={this.state.date} time={this.state.time} /> : 
                    <>
                    <Search search={this.search} value={this.state.search}/>
                    <List  removeItem={this.removeItem} appointments={filtered}/>
                    </>
                }               
                <span>{"<"}</span>            
                <span>{">"}</span>            
                
                
            </div>
        )
    }
}
