import React from 'react';
import { connect } from 'react-redux'




class Myorders extends React.Component {

    state = {
        date: this.props.orderdata.date
    }


    render() {
        const myorders = this.props.orderdata.length >= 0 ? (

            this.props.orderdata.map(item => {
                return (
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h5>Orders Placed :</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="panel-body">
                                        <div key={item.id}>
                                            <div className="row">
                                                <div className="col-xs-2"><img className="img-responsive" />
                                                </div>
                                                <div className="col-xs-4">
                                                    <h4 className="product-name"><strong>{item.title}</strong></h4>
                                                </div>
                                                <div className="col-xs-6">
                                                    <div className="col-xs-3 text-right">
                                                        <h6><strong>{item.id} <span className="text-muted">x</span></strong></h6>
                                                    </div>

                                                </div>
                                            </div>
                                            <p>{item.title}</p>
                                            <p>{item.id}</p>
                                            <p>{item.userId}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })


        ) : (
                <div className="panel-body">
                    <p>Cart is empty</p>
                </div>
            )


        return <div style={{ marginTop: '30px' }} className="container">


            {myorders}


        </div>
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        orderdata: state.orderReducer
    }
}


export default connect(mapStateToProps)(Myorders)

