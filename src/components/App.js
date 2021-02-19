import React, { Component } from 'react'
import AddAppoitment from "./AddAppoitment"
import List from "./List"
import Search from "./Search"
import NavMenu from "./Navbar"
import "../css/App.css"
import { nanoid } from 'nanoid'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data:[]
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
    render() {
        console.log(this.state.data,"<>")
        return (
            <div className="app">
                <NavMenu/>
                <AddAppoitment/>
                <Search/>
                <List removeItem={this.removeItem} appointments={this.state.data}/>
                <span>{"<"}</span>            
                <span>{">"}</span>            
                
            </div>
        )
    }
}
