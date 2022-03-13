import classes from './shopSummary.module.css'
import React from 'react'
const ShopSummary=({children})=>{
  return(
    <section className={classes.summary}>
 {children}

</section>
  )
  
}
export default ShopSummary;