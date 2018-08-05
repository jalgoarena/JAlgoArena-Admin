// @flow

import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {connect} from 'react-redux';

import MenuItem from "./MenuItem";
import logo from '../../assets/img/logo.png';

const logoStyle = {
    display: "inline-block",
    height: 35,
    marginTop: -5
};

const Menu = ({currentPath}:
                  { currentPath: string}
) => (
    <Navbar fixedTop fluid>
        <Navbar.Header>
            <Navbar.Toggle/>
            <a className="navbar-brand" href="/">
                <img src={logo} style={logoStyle}/>
            </a>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav role="navigation" pullRight id="menu">
                <MenuItem path="/" prefix="fas" icon="home" title="Home" currentPath={currentPath}/>
                <MenuItem path="/problemsAdmin" prefix="fas" icon="book" title="Problems" currentPath={currentPath}/>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const mapStateToProps = (state) => {
    return {
        currentPath: state.router.location.pathname
    };
};

const MenuPanel = connect(
    mapStateToProps
)(Menu);

export default MenuPanel;