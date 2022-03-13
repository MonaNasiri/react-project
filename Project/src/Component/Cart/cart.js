import React,{useContext} from 'react';
import classes from './cart.module.css';
import CartItem from './cartItem';
import CartContext from '../../Component/Store/cart-context';

const Cart=()=>{
    // const totalAmount=20
    // const item={
    //     id: 'm1',
    //     name: 'Sushi',
    //     description: 'Finest fish and veggies',
    //     price: 22.99,
    //   }

      const cartCtx = useContext(CartContext);

      const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
      const hasItems = cartCtx.items.length>0;
  
      const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
      };
      const cartItemAddHandler = item => {
        cartCtx.addItem(item);
      };

  
      const Items = (
      <ul>
         {cartCtx.items.map((item) => (
           <CartItem listItem={item} 
           key={item.id}
           onRemove={cartItemRemoveHandler.bind(null,item.id)} 
           onAdd={cartItemAddHandler.bind(null,item)}
           />
      ))}
      </ul>
      )
      return(
        <>
          {Items}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
      
          
        </div>
    
        </>
)
}
export default  Cart;