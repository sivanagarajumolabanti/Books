import React from 'react';
import { connect } from 'react-redux'




class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ph: '',
            address: '',
            name: '',
            edit: false
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    editForm = () => {
        this.setState({
            edit: true
        })
    }

    handleCancel=()=>{
       
        window.location.href='/cart'
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.submitted = true;
        this.props.getData(this.state)
        this.setState({ name: '', address: '', ph: '' });

    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleCheckout = () => {
        this.props.addOrders(this.props.cart)
    }

    render() {
        const form = <form onSubmit={this.handleFormSubmit}>
            <div className="label">

                <label style={{ color: 'black', fontSize: '15px' }} htmlFor="name">Name : </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="label">

                <label htmlFor="address" style={{ color: 'black', fontSize: '15px' }}>Address : </label>
                <textarea
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter address"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="label" style={{ color: 'black', fontSize: '15px' }}>

                <label htmlFor="ph">Phone Number : </label>
                <input
                    type="text"
                    className="form-control"
                    name="ph"
                    placeholder="Enter Phone number"
                    value={this.state.ph}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div><br />
                <button type='submit' className="btn btn-sm btn-primary">Save Address</button>{' '}
                <button type='submit' onClick={this.editForm} className="btn btn-sm btn-primary">Edit Address</button>
            </div>

        </form>



        const editcode = <form onSubmit={this.handleFormSubmit}>
            <div className="label">

                <label htmlFor="name">Name : </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter name"
                    value={this.props.formdata.name}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="label">

                <label htmlFor="address">Address : </label>
                <textarea
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter address"
                    value={this.props.formdata.address}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="label">

                <label htmlFor="ph">Phone Number : </label>
                <input
                    type="text"
                    className="form-control"
                    name="ph"
                    placeholder="Enter Phone number"
                    value={this.props.formdata.ph}
                    onChange={this.handleInputChange}
                />
            </div>
            <br />
            <div>
                <button type='submit' className="btn btn-sm btn-primary">Save Address</button>{' '}

            </div>

        </form>





        let addedItems = this.props.cart.map(item => {
            return (

                <li className="collection-item avatar" key={item.id}>
                    <span className="title">{item.id}</span>
                    <span className="title">{item.userId}</span>
                    <span className="title">{item.title}</span>

                </li>

            )
        })

        return <div><div className="row" >

            <div className='col-md-6'>
                <br />

                <h4 style={{ marginLeft: '50px' }}>Shipping Address</h4>
                <div className="card" style={{ width: '80%', height: '85%', marginLeft: '50px' }}>
                    <div>

                        {this.state.edit ? editcode : form}
                    </div>
                </div>
            </div>

            {''}
            <div className='col-md-6'>

                <br />
                <h4 style={{ marginLeft: '50px' }}>Shopping Bag</h4>
                <div className="card" style={{ width: '80%', height: '290px', marginLeft: '50px' }}>


                    {addedItems}


                </div>
            </div>
        </div>
            <br />

            <div className="row" style={{ marginTop: '50px', marginLeft: '800px' }}>
                <div className='col-md-6' style={{ marginTop: '-50px' }}>
                    <div style={{ width: '80%', height: '300%', marginLeft: '180px' }}>



                    </div>

                </div>
                <div className='col-md-6' style={{ marginTop: '-50px' }}>
                    <div style={{ width: '80%', height: '300%', marginLeft: '50px' }}>
                        <h5> Payment Info</h5>
                        <div>
                            <div style={{ textAlign: 'right' }}>
                                Items Price :50$
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                Charge :5$
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                Tax :5$
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                Total :60$
                            </div>

                        </div>

                        <div style={{ width: '80%', height: '300%', marginTop: '10px' }}>
                            <button onClick={this.handleCheckout} className="btn btn-sm btn-primary">Checkout</button>{' '}
                            <button onClick={this.handleCancel} className="btn btn-sm btn-primary">Cancel</button>

                        </div>

                    </div>

                </div>
            </div>
            <br />


        </div>
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        cart: state.cartReducer.cartDetail,
        formdata: state.formReducer,
        orderdata: state.orderReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getData: (data) => {
            dispatch({
                type: "SUBMIT_FORM", payload: data
            })
        },
        addOrders: (data) => {
            dispatch({
                type: "ORDERS", payload: data
            })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


