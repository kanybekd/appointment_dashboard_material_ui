import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import "../css/App.css"

// const Navbar = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

export default class NavMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collapsed:true
        }
    }
    toggleNavbar=()=>{
        this.setState({collapsed:!this.state.collapsed})
    }
    render() {
        return (
            <div >
              <Navbar  color="primary" light>
                <NavbarBrand  href="/" className="mr-auto">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav  navbar>
                    <NavItem >
                      <NavLink className="drop" href="#">Register</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="drop" href="#">More...</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
    }
}


// export default NavMenu;
