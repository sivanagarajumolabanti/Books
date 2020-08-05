import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.css'


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.apiUrl = "https://jsonplaceholder.typicode.com/albums"
        this.state = {
            bookitems: [],
            rowsToDisplay: 20,
            expand: false
        }
        this.showMore = this.showMore.bind(this);
        this.showLess = this.showLess.bind(this);

    }
    showMore() {
        let Length = this.state.bookitems.length;
        this.setState({ rowsToDisplay: Length, expand: true });
    }
    showLess() {
        this.setState({ rowsToDisplay: 20, expand: false });
    }
    componentDidMount() {
        axios.get(this.apiUrl).then(
            (resp) => {
                console.log("resp data", resp)
                this.props.getBooks(resp.data)
                this.setState({
                    bookitems: resp.data,isloading: true
                })
            }, (err) => {
                console.log("Error", err)
            }
        )
    }


    render() {
        console.log(this.props.books)

        const books = this.state.bookitems.slice(0, this.state.rowsToDisplay).map((book, i) => (
            <div className='col-md-3'>
                <br />
                <br />
                <div className="card" style={{ backgroundColor: 'Lightgrey', width: '60%', height: '85%', marginLeft: '50px' }} key={book.id}>
                    <div style={{ marginTop: '80px' }}>

                        <h5>Book id :{book.id}</h5>
                        <p>Book Description </p>
                        <Link style={{textDecoration:'none'}} to={`/details/${book.id}`}><button className="btn btn-sm btn-primary">Buy Book</button></Link>
                    </div>
                </div>
            </div>

        ));

        return <div>{this.state.isloading?<div><div className="row" >
            {books}
        </div><br />
            {this.state.expand ? <div style={{ textAlign: 'center' }}>
                <Link style={{textDecoration:'none'}} onClick={this.showLess}>Show Less</Link>
            </div> : <div style={{ textAlign: 'center' }}>
                    <Link style={{textDecoration:'none'}} onClick={this.showMore}>Show More...</Link>
                </div>

            }
        </div>: <div style={{marginTop:'250px'}}><center>Loading Please Wait</center></div>}
        </div>



    }
}

function mapStateToProps(state) {
    return {
        books: state.bookReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getBooks: (data) => {
            dispatch({
                type: "Get_books", payload: data
            })
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Home)


