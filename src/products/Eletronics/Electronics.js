import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


import Electronicslist from './Electronicslist'

class Electronics extends Component {
    constructor({ props, }) {
        super(props);
        this.state = {
            product: Electronicslist,
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


                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Amazfit/Neo/1500x300.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Camera_Combo_1500x300.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Newpage/Headphones/Headphones_headers.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>

                <br></br> <br></br>
                <div class='container'>
                    <div class='row'>
                        {this.state.product.map(data => (

                            <div class=" card col-sm-4 my-3 ">
                                <img src={data.imgUrl} class="mt-3" alt="product" />
                                <div class="card-body">

                                    <h3 class="card-title mt-2">{data.productName}</h3>
                                    <h4 class="card-text">Price :  {data.price}</h4>
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
export default Electronics          
