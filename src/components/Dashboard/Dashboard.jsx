import React, { useState } from "react";
import classes from './Dashboard.module.css';
import DashMain from './DashMain/DashMain';
import Instances from './Instances/Instances';
import { currencies } from "./mocks";
import Profit from './Profit/Profit'

const Dashboard = (props) => {
    const [currency, setCurrency] = useState(currencies.usd);
   
    return(
        <div className={classes.wrap}>
            <DashMain currency={currency} />
            <Instances  currency={currency}/>
            <Profit setCurrency={setCurrency}  />
        </div>
    )
};

export default Dashboard;

// currency={currency}