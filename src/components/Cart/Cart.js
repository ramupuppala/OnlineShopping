import React, { Component }         from 'react';
import Title                        from '../Title';
import CartColumn                   from './CartColumn';
import EmptyCart                    from './EmptyCart';
import {ProductConsumer}            from '../../context';
import CartList                     from './CartList';
import CartTotals                   from './CartTotal';
/*
** This class using for Add to cart items
*/
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  } 
    }
    render() { 
        return ( 
            <section>
                <ProductConsumer>
                    {value=>{
                       const {cart}=value;
                       if(cart.length>0)
                       {
                        return(
                            <React.Fragment>
                                <center><Title name="your" title="cart"/></center>  
                                <CartColumn/>
                                 <CartList value={value}/>
                                 <CartTotals value={value} history={this.props.history}/>
                            </React.Fragment>                           
                        )
                       }
                       else{
                           return <EmptyCart/>;
                       }

                    }}
                </ProductConsumer>
              
              
            </section>
         );
    }
}
 
export default Cart;