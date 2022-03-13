import React from "react";
import {useState} from 'react';
import classes from './search.module.css'

const Search=({onSearch})=>{
    const [query, setQuery] = useState("")
    // const cartCtx = useContext(CartContext);
    // const searchInputRef = useRef();
    // const cartItemSearchHandler = title => {
    //     cartCtx.searchItem(title);
    //   };
    return(
        <>
<div className={classes.wrap}>
   <div className={classes.search}>
      <input
       type="text" 
       onChange={event => setQuery(event.target.value)} 
        className={classes.searchTerm}
       placeholder="What are you looking for?" />
      <button 
       type={'button'} 
       onClick={onSearch(query)}
       className={classes.searchButton}      
      >
       
     </button>
   </div>
</div>





        {/* <input placeholder="Enter Post Title"              
         onChange={event => setQuery(event.target.value)} 
         />
         <button 
         type={'button'} 
         onClick={onSearch(query)}
       >
        
 
     </button> */}
     </>
    )

}
export default Search;