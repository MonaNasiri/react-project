import React from "react"
import ShopAvaliableList from "./shopAvaliableList"
import ShopSummary from "./shopSummary"


const Shop=({searchTitle,children})=>{
    return(
        <>
         <ShopSummary children={children}></ShopSummary>
        <ShopAvaliableList searchTitle={searchTitle}></ShopAvaliableList>
        </>
    )
}
export default Shop