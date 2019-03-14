import React from 'react';
import CartItem from './CartItem';

/**
 * This function used for display cart list.
 * @param {*} param0 
 */

export default function CartList({value}){
    const {cart}=value;    
    return (
        <React.Fragment>
            <div className="container-fluid">
             {cart.map(item=>{
                 return <CartItem key={item.id} item={item} value={value}/>
             })}
             
            </div>
       
        </React.Fragment>
        
    )
}