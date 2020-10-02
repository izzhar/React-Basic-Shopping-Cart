import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import productList from '../products/productList'
import './admin.css'
import Carousel from 'react-bootstrap/Carousel'

import Footer from './Footer'
import NavBot from './NavBot'





class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }




        this.state = {
            products: productList,
        }

    }



    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }




        // const productItem = productList.map(product => <Product key={product.id} product={prEXPLORE



        return (


            <>
                <div>
                     <link to="/logout"></link>
                </div>



                <div class="  ">



                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Storage/September/New/samsung_Tab_A7_1500x300_PreOrder.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/DELL/1500x300.jpg"
                                alt="Third slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/neel/CTR/Others/crossCat_1500x300.jpg"
                                alt="Third slide"
                            />


                        </Carousel.Item>
                    </Carousel>
                    <br></br> <br></br>
                    <div class="container my-4">
                        <div class="row">
                            <div class="card col-sm-4 mx-auto">
                                <img class="img-thumbnail" mt-2 src="https://i.pinimg.com/originals/2b/4a/76/2b4a768113c87c3550b8a4f5965ddc89.jpg" alt="Responsive image" />
                                <div class="card-body">
                                    <h1 class="card-title">Electronics</h1>
                                    <h3 class="card-text">Top Electronics Pick For You</h3>
                                    <a class="btn btn-primary active  bg-light  btn-lg">< Link to="Electronics"> EXPLORE</Link></a>
                                </div>
                            </div>
                            <div class="card col-sm-4 mx-auto ">
                                <img class="img-thumbnail" mt-2 src="https://www.businessoffashion.com/articles/intelligence/site/uploads/2016/05/Pasted_Image_GQ_Style.jpg" alt="Responsive image" />
                                <div class="card-body">
                                    <h1 class="card-title">Fashion</h1>
                                    <h3 class="card-text">Top Electronics Pick For You</h3>
                                    <a class="btn btn-primary active  bg-light btn-lg">< Link to="Fashion"> EXPLORE</Link></a>
                                </div>
                            </div>
                            <div class="card col-sm-4 mx-auto ">
                                <img class="img-thumbnail" mt-2 src="https://miro.medium.com/max/1000/0*K_8TdNAPX6Ldifq_" alt="Responsive image" />
                                <div class="card-body">
                                    <h1 class="card-title">Games</h1>
                                    <h3 class="card-text">Top Electronics Pick For You</h3>
                                    <a class="btn btn-primary active  bg-light btn-lg">< Link to="Games"> EXPLORE</Link></a>
                                </div>
                            </div>
                            <div class="card col-sm-4 mx-auto ">
                                <img class="img-thumbnail" mt-2 src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="Responsive image" />
                                <div class="card-body">
                                    <h1 class="card-title">Sports, Fitness & Outdoors</h1>
                                    <h3 class="card-text">Top Electronics Pick For You</h3>
                                    <a class="btn btn-primary active  bg-light btn-lg">< Link to="SFO"> EXPLORE</Link></a>
                                </div>
                            </div>

                            <div class="card col-sm-4 mx-auto ">
                                <img class="img-thumbnail" mt-2 src="https://www.photodesignlab.com/wp-content/uploads/2017/03/arl-40f686.jpg" alt="Responsive image" />
                                <div class="card-body">
                                    <h1 class="card-title">For Efficient Home Working</h1>
                                    <h3 class="card-text">Top Electronics Pick For You</h3>
                                    <a class="btn btn-primary active  bg-light btn-lg">< Link to="Fashion"> EXPLORE</Link></a>
                                </div>
                            </div>

                            <div class="card col-sm-4 mx-auto">
                                <img class="img-thumbnail" mt-2 src="https://i.pinimg.com/originals/cb/40/61/cb40610aa7224f3cc33228736e6e57a7.jpg" alt="Responsive image" />
                                <div class="card-body">
                                    <h1 class="card-title">Masks, Sanitizers & More</h1>
                                    <h3 class="card-text">Top Electronics Pick For You</h3>
                                    <a class="btn btn-primary active  bg-light btn-lg">< Link to="Electronics"> EXPLORE</Link></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />

                </div>
                <div>

                </div>




            </>
        )
    }
}



export default Admin