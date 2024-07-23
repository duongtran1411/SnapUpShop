import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'));
    }else{
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts:fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart:(state,action)=>{
            const isItemInCart = state.carts.find(item=>item.id === action.payload.id);
            
            if(isItemInCart){
                const tempCart = state.carts.map(item=>{
                    if(item.id === action.payload.id){
                        let temQty = item.quantity + action.payload.quantity;
                        let temTotalPrice = temQty * item.price; 
    
                        return{
                            ...item, quantity: temQty,
                            totalPrice: temTotalPrice
                        }
                    }else{
                        return item;
                    }
                });
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            }else{
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts);
            }
        },
        removeFromCart :(state,action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload);
            state.carts = tempCart;
             storeInLocalStorage(state.carts);
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state) =>{
            state.totalAmount = state.carts.reduce((cartTotal, cartItem)=>{
                return cartTotal += cartItem.totalPrice
            },0)
            state.itemCount = state.carts.length;
         },
      
         toggleCartQty: (state, action) => {
            const tempCart = state.carts.map(item=>{
                if(item.id === action.payload.id){
                    let temQty = item.quantity;
                    let temTotalPrice = item.totalPrice;

                    if(action.payload.type === "INC"){
                        temQty++;
                        if(temQty === item.stock) temQty = item.stock;
                        temTotalPrice = temQty * item.discountedPrice;
                    }

                    if(action.payload.type === "DEC"){
                        temQty--;
                        if(temQty < 1) temQty = 1;
                        temTotalPrice = temQty * item.discountedPrice;

                    }
                    return {
                        ...item, quantity: temQty,
                        totalPrice: temTotalPrice
                    };
                }else{
                    return item;
                }
            })
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
         },

         setCartMessageOn : (state) => {
            state.isCartMessageOn = true;
         },
         
         setCartMessageOff:(state) => {
            state.isCartMessageOn = false;
         }
    }
})
export const {addToCart, setCartMessageOff, setCartMessageOn, getCartTotal, toggleCartQty, clearCart, removeFromCart} = cartSlice.actions;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export const getAllCarts = (state) => state.cart.carts;
export const getAllCartItemCount = (state) => state.cart.itemCount;
export default cartSlice.reducer;