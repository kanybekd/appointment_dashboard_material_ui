import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalPage extends React.Component {
  constructor() {
    super();
    this.state = {
      modal:true,
      im: "http://image.tmdb.org/t/p/w185"
    }
}
 toggle = () =>{
  this.setState({modal:!this.state.modal});
  this.props.handleModalToggle(this.state.modal)
 }
  render() {
    const{name,popularity, profile_path, known_for}=this.props.modalData
    const{modal,im} = this.state;
    const url = im + profile_path;  
  return(
  <div className="modal">
    {/* <Button color="danger" onClick={this.toggle}>Click</Button> */}
    <Modal isOpen={modal} toggle={this.toggle} >
      <ModalHeader toggle={this.toggle}>{name}</ModalHeader>
      <ModalBody>
        <div className="image">
          <img src={url} alt="celebs"/>
          <div className="pop">popularity:{popularity} </div>
          <div className="pop">Known for</div>
        </div>
        <div className="history">
          
          {known_for.map(item=>{
          return (
            <img className="internal-img" src={im+item.poster_path} alt="movie-posters"/>
          )
          })}
        </div>
      </ModalBody>
      <ModalFooter>
        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
        <Button color="secondary" onClick={this.toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
  }
}
export default ModalPage;
