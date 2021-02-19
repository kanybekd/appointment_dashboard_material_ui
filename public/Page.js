import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
class Page extends React.Component {
  constructor() {
    super();
    this.state = {
        num:0
    };
  } 

  // changePage=(e)=>{
  //     console.log('num',e)
  //   this.setState({num:e.target})
  // }
  
  render() {
    return (
      <div className="page">
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => this.props.changePage(1)}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => this.props.changePage(2)}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => this.props.changePage(3)}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => this.props.changePage(4)}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => this.props.changePage(5)}>
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink  next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
export default Page;
