
import React,{useState} from "react";
import Cart from "./Component/Cart/cart";
import Header from "./Component/Layout";
import Shop from "./Component/Shop/shop";
import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./Component/Store/CartProvider";
import Search from "./Component/UI/search";


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [searchTitle,setSearchTitle]=useState('')
  const handleClose = () => setCartIsShown(false);
  const handleShow = () => setCartIsShown(true);


  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const onSerachHandeler=(query)=>{
    console.log(query);
    setSearchTitle(query)

  }

   return (
    <CartProvider>
  <Button variant="primary" onClick={handleShow}>
        
      </Button>

      <Modal show={cartIsShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Show Items</Modal.Title>
        </Modal.Header>
        <Modal.Body><Cart /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

   <Header onShowCart={showCartHandler}>
 
   </Header>
 
   <main>
   
    <Shop searchTitle={searchTitle}>
    <Search onSearch={onSerachHandeler}></Search>
    </Shop>
 </main>
</CartProvider>
  )
}

export default App;
