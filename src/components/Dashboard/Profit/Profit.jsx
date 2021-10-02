import React from "react";
import { currencies } from "../mocks";
import classes from './Profit.module.css';

const Profit = (props) => {
    return(
        <div className={classes.wrap}>
            <h1>Dashboard profit curency</h1>
            <div className={classes.select}>
                <select onChange={e => props.setCurrency(e.target.value)} >                
                    { 
                         Object.values(currencies).map(item => <option key={item}>{item}</option>)
                    }
                </select>
                <p>Selected currency will affect all profit in dashboard</p>
            </div>
       
        </div>
    )
};

export default Profit;


// value={props.currency}