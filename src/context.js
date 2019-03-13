import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext=React.createContext();
//Provider
//consumer
class ProductProvider extends Component {
    
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:10,
        cartTax:10,
        cartTotal:10

    }

    componentDidMount()
    {
        this.setProducts();
        
    }

    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }

    getItem=(id)=>{
     const product=this.state.products.find(item=> item.id===id);
     return product;
    }

    handleDetail=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
        console.log("hello from details")
    }

    
    addtoCart=(id)=>{
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price;
        this.setState(()=>{
            return {products:tempProducts,
                cart:[...this.state.cart,product]
            }
        },()=>{this.addTotals()})
    }

    openModal=id=>{
        const product = this.getItem(id);

        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }

    closeModal=()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    getCart=(id)=>{
        const cart=this.state.cart.find(item=> item.id===id);
        return cart;
       }


    increment=(id)=>{
        let cart=this.getCart(id);
        cart.total+=cart.price;
        cart.count+=1;
        console.log(cart);
        let tempCart=this.state.cart;
        for(let i=0;i<tempCart.length;i++)
        {
            if(tempCart[i].id==id)
            {
                tempCart[i]=cart;
            }
        }
       
        this.setState(()=>{
            return {
                cart:tempCart
            }
        },()=>{ this.addTotals();})
       
        console.log('this is increment ')
    }
    decrement=(id)=>{
        let cart=this.getCart(id);
        
        
        if(cart.count>1)
        {
            cart.total-=cart.price;
            cart.count-=1;
            console.log(cart);
            let tempCart=this.state.cart;
            for(let i=0;i<tempCart.length;i++)
            {
                if(tempCart[i].id==id)
                {
                    tempCart[i]=cart;
                }
            }
           
            this.setState(()=>{
                return {
                    cart:tempCart
                }
            },()=>{ this.addTotals();})
        }
        this.addTotals();
       
        console.log('this is decrement ')
    }
    removeCart=(id)=>{
        const cart = this.state.cart.filter((item) => item.id !== id);       
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=false;
        product.count=0;
        const price=product.price;
        product.total=price;
        this.setState(()=>{
            return {products:tempProducts,
                cart:cart
            }
        },()=>{this.addTotals()})
    }
    clearCart=()=>{
        this.setState(()=>{
            return {
                cart:[]
            }
        },()=>{
            this.setProducts();
            this.addTotals();
        })
        console.log("this is cleared");
    }
    addTotals=()=>{
        let subTotal=0;
        this.state.cart.map(item=>{
            subTotal+=item.total
        })
        const tempTax=subTotal*0.1;
        const tax=parseFloat(tempTax.toFixed(2));
        const total=subTotal+tax;
        this.setState(()=>{
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total

            }
        })
    }
    // tester=()=>{
    //     console.log('sale products:',this.state.products[0].inCart);
    //     console.log('Data products:',storeProducts[0].inCart);
        
    //     const tempProducts=[...this.state.products];
    //     tempProducts[0].inCart=true;
    //     this.setState(()=>{
    //         return {products:tempProducts}
    //     },()=>{
    //         console.log('sale products:',this.state.products[0].inCart);
    //         console.log('Data products:',storeProducts[0].inCart);
    //     })
    // }
    render() { 
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addtoCart:this.addtoCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeCart:this.removeCart,
                clearCart:this.clearCart
            }}
            
            >
        
            {this.props.children}
            </ProductContext.Provider>
          );
    }
}
 const ProductConsumer=ProductContext.Consumer;
export { ProductProvider,ProductConsumer};