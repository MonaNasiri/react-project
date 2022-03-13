
import React from "react";
import classes from './card.module.css';
const Card=({className,children})=>{
    return(
        <div className={`${classes.card} ${className}`}>{children}</div>
    )
    
}
export default Card;