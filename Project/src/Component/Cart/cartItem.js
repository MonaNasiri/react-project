import classes from './cartItem.module.css';
const CartItem=({listItem,onRemove,onAdd})=>{
    return(
    <li className={classes['cart-item']}>
     <div>
        <h2>{listItem.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{listItem.price}</span>
          <span className={classes.amount}>x {listItem.amount}</span>
        </div>
      </div>
    <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
  
  </li>
  )
}
export default CartItem