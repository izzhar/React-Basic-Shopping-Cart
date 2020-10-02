import React, { Component } from 'react'


import productList from './productList';

class Product extends Component {
  constructor({ props, }) {
    super(props);
    this.state = {
      product: productList,
      flag: false,
      array: []
    }
  }
alert(){
  alert("Product Added To Cart");
}
  render() {
    return (

      <React.Fragment>

        {/* <div class="col-md-4 col-10 col-xxl-4 mx-auto" >
        
       
          <img src={this.props.product.imgUrl} alt="Product" />
          <p>{this.props.product.productName}</p>
          <p>{this.props.product.price}</p>
          <p>{this.props.product.quantity}</p>
          <button onClick={()=>history.push(`${match.url}/${product.id}`)}>add to cart</button>
      <button  onClick={()=>this.addToCart(this.props.product.id)}>Add To Cart</button>


        </div> */}

        {/* "col-xs-12 col-sm-6 col-md-4" */}

        <div class="col-xs-12 col-sm-6 col-md-4">
          <img src={this.props.product.imgUrl} alt="Product" />
          <div class="card-body">
            <h5 class="card-title">{this.props.product.productName}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <button class="btn btn-default" onClick={() => {this.alert() }}>Add To Cart</button>
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










export default Product

