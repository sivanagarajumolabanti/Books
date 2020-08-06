import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class Header extends Component {

 

  render() {

    console.log(this.props)
    return <div class="navbar-container" style={{ backgroundColor: "#051B35" }}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">eCommerce Site </Link>
            <span style={{color:'blue'}}> {this.props.bookdetails.title}</span>
          </div>

          <div className="collapse navbar-collapse" >
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">
                Home
              </Link>
              </li>
              <li><Link to="/myorders">
                My Orders</Link>
              </li>

              <li><Link to="/cart">
                Cart</Link>
              </li>            </ul>
          </div>
        </div>
      </nav>
    </div>

  }
}

function mapStateToProps(state,ownProps) {
  // let id = ownProps && ownProps.match && ownProps.match.params.id;
  // console.log(ownProps)
  // let i = parseInt(id)
  return {
      bookdetails: state.bookReducer
  }
}

export default connect(mapStateToProps,null)(Header);