
import React, { Component } from 'react'
import {Spinner} from "reactstrap"
import Page from "./Page"
import ModalPage from "./Modal"
import "./App.css"
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentPage:1,
       data:[],
       im: "http://image.tmdb.org/t/p/w185",
       search:"",
       loading:false,
       modalData:[],
       clickedModal:false
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.createApi()
      this.setState({loading:!this.state.loading})
    },2000)
  }
  createApi=async ()=>{
    const res = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${this.state.currentPage}`)
    const data = await res.json()
    this.setState({data:data.results})
  }
  // createApi=()=>{
  //   fetch(`https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${this.state.currentPage}`)
  //   .then(res=>res.json())
  //   .then(data=>this.setState({data:data.results}))
  // }
  searching = (e)=>{
    this.setState({search:e.target.value})
  }
  changePage =(currentPage)=>{
    // console.log("page",typeof page)
    this.setState({loading:!this.state.loading,data:[]})
    setTimeout(()=>{
      this.setState({ currentPage,loading:!this.state.loading }, () => {
        this.createApi();
      });
    },1000)

  }
  handleModalToggle = (status) => {
    this.setState({ clickedModal: !status });
  }
  modal=(id)=>{
    const{data}=this.state
    console.log('id',id)
    const found=data.findIndex(item=> item.id===id)
    this.setState({modalData:data[found],clickedModal:true})
    console.log(data[found].name,"nameeee")
  }
  render() {
    const {data,im,search,modalData,clickedModal} = this.state
    const filtered = data.filter(actor=>actor.name.toLowerCase().includes(search.toLowerCase()))
    const loading = <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
    const modalClicked= clickedModal ? <ModalPage handleModalToggle={this.handleModalToggle} modalData={modalData}/>: '';
                
    return (
      <div className="main">
        <div id="input">
          <input onChange={this.searching} value={search} placeholder="searching..." type="text" />
          <Page changePage={this.changePage} />          
          </div>
          
      <div className="App">
      <div>
        {!this.state.loading && loading}
        </div>
        {filtered.map(item=>{
          const url = im+item.profile_path
          return (
            <div onClick={()=>this.modal(item.id)} className="celebs" key={item.id}>
              <div className="single">
                <img src={url} alt="celebs"/>
                </div>
              <div className="name">
                {item.name}
                </div>
              <div>
                {
                  item.known_for.map(about=>{
                    return (<span key={about.id} className="details">{about.title}</span>)
                  })
                }
                </div>
            </div>
          )
        })}
      </div>
      {modalClicked}
      </div>
    )
  }
}
