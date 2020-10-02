import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Sfolist from './Sfolist'




class Sfo extends Component {
    constructor({ props, }) {
        super(props);
        this.state = {
            product: Sfolist,
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
                    <Carousel>
                        <img
                            className=" w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/062020/Bookbazaar/BHP-PC._CB403848610_SY500_.png"
                           
                        />

                    </Carousel>
                    </Carousel>
                   

                <br /> <br />
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
export default Sfo          
