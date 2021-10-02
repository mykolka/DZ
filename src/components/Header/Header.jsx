import React from 'react';
import classes from './Header.module.css';
import logoutIcon from './../../icons/logout_icon.png';
import accountIcon from './../../icons/accountIcon.png';
import { NavLink } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Pairs from '../Pairs/Empty';
import Instancess from '../Instances/Empty';



const Header = (props) => {
    return(
       <header className={classes.header}>
           <nav className={classes.nav}>

                <NavLink className={classes.navElement} activeClassName={classes.activeLink} to="/dashboard">dashboard</NavLink>
                <NavLink className={classes.navElement} activeClassName={classes.activeLink} to="/instancess">instances</NavLink>
                <NavLink className={classes.navElement} activeClassName={classes.activeLink} to="/pairs">pairs</NavLink>
                <NavLink className={classes.navElement} activeClassName={classes.activeLink} to="/about">about</NavLink>
                <NavLink className={classes.navElement} activeClassName={classes.activeLink} to="/help">help</NavLink>
                <NavLink className={classes.navElement} activeClassName={classes.activeLink} to="/contact">contact</NavLink>

               
           </nav>
           <div className={classes.loginBox}>
                <img className={classes.accountIcon} src={accountIcon} alt="" />
                <button>
                    LOGOUT <img src={logoutIcon} alt="" />
                </button>
           </div>
       </header>
    )
};


export default Header;