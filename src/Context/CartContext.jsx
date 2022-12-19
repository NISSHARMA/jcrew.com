import React from "react";

export let CartContext = React.createContext();



function CartContextProvider({children}) {
    const [cart, setIsCart] = React.useState([]);

    function Addtocart(item){
        setIsCart([...cart,item])
        }
    
     
    return (
      <CartContext.Provider value={{ cart,setIsCart ,Addtocart}}>
        {children}
      </CartContext.Provider>
    );
  }
    
   
     
export default CartContextProvider;