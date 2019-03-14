import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import {ProductConsumer} from '../context';

/**
 * This class used for display product list.
 */

class ProductList extends Component {
    constructor(props) {
        super(props);
        // this.state = { products:storeProducts }
    }
    render() { 
      
        return ( 
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>
                                {
                                   return value.products.map(product=>{
                                    return <Product key={product.id} product={product}/>;
                                   })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProductList;