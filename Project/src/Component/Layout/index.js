import React from "react";
import classes from "./Header.module.css" 
import shoppingImage from "../../images/1.jpg"
import HeaderButton from "./headerButton";
const Header =({onShowCart})=>{

return(
    <>
    <header className={classes.header}>
        <h3> </h3>
       
       <HeaderButton onShowCart={onShowCart}></HeaderButton>
    </header>
    <div className={classes.mainImage}>
        <img src={shoppingImage} alt='market'/>
    </div>
</>
)
}
export default Header;