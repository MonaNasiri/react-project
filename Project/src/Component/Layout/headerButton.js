import classes from './headerButton.module.css';
import CartIcon from '../Cart/cartIcon';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Component/Store/cart-context";
const HeaderButton=({onShowCart})=>{
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext (CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber,item) => {return curNumber+item.amount;},0);

   

    const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump : ''}`;

    useEffect (() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout (() => {
            setBtnIsHighlighted(false);
        },300);
    }, [items]);

    return <button className={btnClasses} onClick={onShowCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}
export default HeaderButton;