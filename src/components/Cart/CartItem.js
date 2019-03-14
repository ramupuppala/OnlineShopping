import React from 'react';

/**
 * This function used for display cart items
 * @param { products items} item 
 * @param { products values} value 
 */

export default function CartItem(item,value){
    const {id,title,img,price,total,count}=item.item;
    const {increment,decrement,removeCart}=item.value;
    console.log(item.value)
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img}
                   style={{width:"5rem",height:"5rem"}}
                   className="img-fluid"
                   alt="product"/>

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-lg-0">
                <div className="d-flex-just-content-center">
                <span className="btn btn-black mx-1"
                 onClick={()=>decrement(id)}
                 disabled={count<1 ? true : false}
                 >-</span>
                <span className="btn btn-black mx-1" >{count}</span>
                <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+  </span>
          
                </div>
                
                
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <div className="cart-icon" onClick={()=>{removeCart(id)}}>
                <i className="fa fa-trash"></i>
               </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <strong>Item Total : &#8377; {total}</strong>
            </div>
            
        </div>
    )
}