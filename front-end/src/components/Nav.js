import React, {Component} from 'react';
import {NavLink}  from 'react-router-dom';
import { MenuItems } from "./MenuItems"
import "./nav.css";

// function Nav() {
//   return (
//     <nav className="nav-bar">
//     <ul className="nav-info">
//       <NavLink exact={true} to="/" activeClassName="nav-info-clicked">
//         <li>Home</li>
//       </NavLink>
//       <NavLink exact={true} to="/skills" activeClassName="nav-info-clicked">
//         <li>Skills</li>
//       </NavLink>
//       <NavLink exact={true} to="/projects" activeClassName="nav-info-clicked">
//         <li>Projects</li>
//       </NavLink>
//       <NavLink exact={true} to="/contact" activeClassName="nav-info-clicked">
//         <li>Contact Me</li>
//       </NavLink>
//     </ul>
//   </nav>
//   );
// }

// export default Nav;

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Raffy</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar