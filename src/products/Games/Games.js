import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Gamelist from './Gamelist'




class Games extends Component {
    constructor({ props, }) {
        super(props);
        this.state = {
            product: Gamelist,
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
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/Vasu/Nioh_2_1500X300.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/vgsw2020/RE3_ON_AMAZON_1500x300_IND_v01_1.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/Avengers_ordernow_Desktop.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
                  
                <br/> <br/>
                <div class='container'>
                    <div class='row'>
                        {this.state.product.map(data => (

                            <div className="card col-sm-4 my-3">
                                <img src={data.imgUrl} class="mt-3" alt="" />
                                <div className="card-body">
                                  
                                    <h3 className="card-title">{data.productName}</h3>
                        <h4 className="card-text">Price : {data.price}</h4>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <button className="btn btn-primary active text-dark bg-light btn-lg" onClick={() => this.addCarthandler(data)}>Add To Cart</button>
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
export default Games          
