import React ,{ useState,useEffect } from 'react'
import classes from './shopAvaliableList.module.css'
import axios from 'axios';
import Loading from '../../Loading';
import Card from '../UI/card';
import ShopItem from './shopItem';
const ShopAvaliableList=({searchTitle})=>{
    const [listItem,setListItem]=useState([]);
    const [isloading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
       .then((result)=>{
        setListItem(result.data);
           setLoading(false);
       })
   
   },[])
    return(
        <>
         
        {isloading?<Loading></Loading>:null}
        <section className={classes.meals}>
    <Card>
    {searchTitle === "" ?
          <ul>
          {listItem.map((item) => (
           <ShopItem listItem={item} key={item.id}/>
          ))}
              
             
          </ul>
           :
           listItem.filter(post => {
            if (searchTitle === '') {
              return post;
            } else if (post.title.toLowerCase().includes(searchTitle.toLowerCase())) {
              return post;
            }
          }).map((post, index) => (
            <ShopItem listItem={post} key={post.id}/>
          ))
           
           
           }
    </Card>
   
      </section>
      </>
    )
}
export default ShopAvaliableList