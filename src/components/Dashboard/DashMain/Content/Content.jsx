import React from "react";
import classes from './Content.module.css';

const Content = (props) => { 
    return(
        <div className={classes.wrap}>                      
           <table>
           <thead>
                <tr>
                    {props.headers.map(header => <th>{header}</th>)}
                </tr>                
           </thead>           
            <tbody>
                {                       
                     props.data.map(row => ( 
                        <tr> 
                            {
                                props.headers.map(value => 
                                    <td>
                                        {row[value]}
                                    </td>)
                            }
                        </tr>
                    ))  
                   
                }
            </tbody>
           </table>
        </div>
    )
};

export default Content;