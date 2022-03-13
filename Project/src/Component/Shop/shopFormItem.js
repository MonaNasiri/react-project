
import React from 'react';
import { useRef, useState} from 'react';
import classes from './shopFormItem.module.css';
import classes1 from './input.module.css'
const ShopFormItem=({onAddToCart})=>{
    const [amountIsValid,setAmountIsValid] = useState (true);
    const amountInputRef = useRef();
    const submitHandler = event =>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount; 

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmountNumber);
    };
    return(
        <form className={classes.form} onSubmit={submitHandler} >
        <div className={classes1.input}>
        <label htmlFor='amount'>Amount</label>
        <input  id= 'amount'
            type='number'
            min= '1'
            max= '5'
            step= '1'
            defaultValue= '1'
            ref={amountInputRef}
             />
             </div>
       
        <button>+ Add</button>
        {!amountIsValid && <p>please enter a valid amount(1-5).</p>}
    </form>
    )
}
export default ShopFormItem;