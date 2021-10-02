import React from "react";
import classes from './Filters.module.css';

const Filters = (props) => {
    return(
        <div className={classes.wrap}>
            <form name="filters">               
               <div className={classes.formWrap}>
                   <div className={classes.formElement}>
                   <lable>Buy advice exchange</lable>
                    <input value={props.filter} 
                    onChange={
                       (e) => props.setFilter(e.target.value) && e.stopPropagation()     
                       } 
                       type="text" />
                   </div>
                    <div className={classes.formElement}>
                    <lable>Buy advice currency</lable>
                    <input type="text"/>
                    </div>
                    <div className={classes.formElement}>
                    <lable>Buy advice currency</lable>
                    <input type="text" />
                    </div>
                  <div className={classes.formElement}>
                  <lable>Sell advice currency</lable>
                    <input type="text" />
                  </div>
                    <div className={classes.formElement}>
                    <input onClick={e => props.setFilters && e.stopPropagation()} type="submit" value="Filter Arbitrage" name="filters"/>
                    </div>   
                </div>               
               <div className={classes.clear}>               
                  <input type="reset" name="filters" value="Clear filters"                
                    onClick={e => props.setFilter('') && e.stopPropagation()} />
               </div>
            </form>
        </div>
    )
                       
};

export default Filters;
