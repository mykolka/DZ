import React from "react";
import classes from './Instances.module.css';
import { data } from './../mocks';

const Instances = (props) => { 
    return(
        <div className={classes.wrap}>
            <h1>Instances</h1>
            <div className={classes.table}>              
                <div>
                    <p>Most profit instance</p>
                    <b>BTS-{props.currency}</b>
                </div>
                <div className={classes.forBorder}>
                    <p>Active instance</p>
                    <b>{data[props.currency].length}</b>
                </div>
                <div>
                    <p>Total instance</p>
                    <b>7</b>
                </div>
            </div>
        </div>
    )
};

export default Instances;