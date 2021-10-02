import React, { useState } from "react";
import classes from './DashMain.module.css';
import Filters from './Filters/Filters';
import Content from './Content/Content';
import { data } from "../mocks";

const Dashmain = (props) => {
    const [filter, setFilter] = useState('');     
    const [filteredData, setData] = useState(data[props.currency]);
   
   
    return(
        <div className={classes.wrap}>                   
            <Filters  setFilters={() => setData(data[props.currency].filter(item => item["Buy exchange pair"].includes(filter)))}  setFilter={setFilter} filter={filter} />
            <Content data={data[props.currency]} headers={data[`headers${props.currency}`]} />
        </div>
    )
}
export default Dashmain;
