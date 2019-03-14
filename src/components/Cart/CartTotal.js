import React            from 'react';
import {Link}           from 'react-router-dom';
import Paypal           from './Paypal';

/**
 * This function used for add cart of totals.
 * @param {*} param0 
 */

export default function cartTotals({value,history}){
    const { cartSubTotal,cartTax,cartTotal,clearCart}=value;
    return (      
              <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                onClick={()=>clearCart()}
                                type="button">
                                clear cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                     subtotal:
                                </span>
                                <strong>&#8377; {cartSubTotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                     tax:
                                </span>
                                <strong>&#8377; {cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                     Total:
                                </span>
                                <strong>&#8377; {cartTotal}</strong>
                            </h5>
                             <Paypal total={cartTotal} clearCart={clearCart} history={history}/>
                              
                        </div>
                    </div>
                </div>
            </React.Fragment>       
    );
}
