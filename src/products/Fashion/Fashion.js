import React, { Component } from 'react'

import Fashionlist from './Fashionlist'



class Fashion extends Component {
    constructor({ props, }) {
        super(props);
        this.state = {
            product: Fashionlist,
            flag: false,
            array: [],
            addToCart: []
        }

    }
    addCarthandler = (data) => {
        this.setState({
            addToCart: data
        })
    }

    render() {
        console.log('asdasda', this.state.addToCart);
        return (

            <React.Fragment>
                  
                
                <div class='container'>
                    <div class='row'>
                        {this.state.product.map(data => (

                            <div class="card col-sm-4 my-3 ">
                                <img src={data.imgUrl}  class=" mt-3" alt="product" />
                                <div class="card-body">
                                  
                                    <h3 class="card-title">{data.productName}</h3>
                                    <h4  class="card-text">Price {data.price}</h4>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button class="btn btn-primary active text-dark bg-light btn-lg" onClick={() => this.addCarthandler(data)}>Add To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>




                <div>

                    {this.state.array.map(data => (
                        <h2>{data.productName}</h2>
                    ))}
                </div>

            </React.Fragment>
        )
    };
};
export default Fashion          
