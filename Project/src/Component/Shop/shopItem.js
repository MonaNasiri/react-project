import { useContext } from 'react';
import ShopFormItem from './shopFormItem';
import classes from './shopItem.module.css';
import CartContext from '../../Component/Store/cart-context';

const ShopItem=({listItem})=>{
   const cartCtx = useContext(CartContext);
    const price = `$${listItem.price.toFixed(2)}`;
    
    const AddToCartHandler = amount =>{
      cartCtx.addItem({
          id:listItem.id,
          name:listItem.name,
          amount:amount,
          price:listItem.price
      });
  };
    return(
        <li className={classes.meal}>
        <div>
          <div>  
           <h3>{listItem.title}</h3>
          <img className={classes.image} src={listItem.image} alt="Logo" />
          </div> 
            <div className={classes.description}>{listItem.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
          <ShopFormItem onAddToCart={AddToCartHandler} />
        </div>
     
     </li>
    )
}
export default ShopItem