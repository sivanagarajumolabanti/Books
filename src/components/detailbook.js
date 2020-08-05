import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { ADD_TO_CART,GET_BOOK_DETAILS } from '../actions/types';

class DetailBook extends Component {
    constructor(props){
        super(props)
        let id = this.props.match.params.id;
        this.props.getDetails(id)
      }
    
    state = {
        inCart: false
    }

    addCart = (e) => {
        this.props.addToCart(e)
        this.setState({
            inCart: true
        })
    }
    render() {
        //console.log("workflow detail",this.props.workflow)
        console.log(this.props.bookdetails)
        return <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img className="img-responsive" src={this.props.bookdetails} />
                        </div>
                    </figure>
                </div>
                <div className='col-md-3' style={{ marginTop: '20px' }}>
                    <h5>Book id :{this.props.bookdetails.id}</h5>
                    <p>Book Description :{this.props.bookdetails.title} </p>

                    <div className="bottom-wrap">

                        {
                            this.state.inCart ? (
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                    <button className="btn btn-sm btn-primary" onClick={() => this.addCart(this.props.bookdetails)}>Add to Cart</button>
                                )
                        }
                        {' '}
                        <button className="btn btn-sm btn-primary">Buy Book</button>
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="card" style={{ backgroundColor: 'white', width: '45%', height: '300px', marginLeft: '450px' }}>
                    <div className="">

                    </div>

                </div>
            </div>
        </div>


    }
}
function mapStateToProps(state) {
   
    return {
        bookdetails: state.bookReducer,
        cartitems: state.cartReducer.cartDetail,
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (data) => {
            dispatch({
                type: ADD_TO_CART, payload: data
            })
        },
        getDetails:(data)=>{
            dispatch({
                type: GET_BOOK_DETAILS, payload: data
            })
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBook)