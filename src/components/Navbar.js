import React, { Component }         from 'react';
import {Link}                       from 'react-router-dom';
import logo                         from '../images/download.svg';
import styled                       from 'styled-components';
import {ButtonContainer}            from './Button';

/**
 * This class used for display navbar.
 */

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5" >
                    <Link to="">
                   <div style={{fontWeight:900}}>
                   Products  </div> 
                    </Link>
                   </li>

                </ul>
                <Link to="cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fa fa-cart-plus">my cart</i>
                    </span>
                    </ButtonContainer>
                </Link>
           </NavWrapper>
         );
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-item{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

 
export default Navbar;