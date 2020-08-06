import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './home.css'
import getBooks from '../actions/types'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookitems: [],
            rowsToDisplay: 20,
            expand: false,
            bookdata : [
                {
                    "id":'1',
                    "author": "Chinua Achebe",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Things Fall Apart",
                    "price": 250,
                    "description": "thisngs Fall"
                },
                {
                    "id":'2',
                    "author": "Hans Christian Andersen",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Fairy tales",
                    "price": 250,
                    "description": "Fairy tales"
                },
                {
                    "id":'3',
                    "author": "Dante Alighieri",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "The Divine Comedy",
                    "price": 250,
                    "price": 250,
                    "description": "Divine Comedy"
                },
                {
                    "id":'4',
                    "author": "Dante Alighieri",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "The Epic Of Gilgamesh",
                    "price": 250,
                    "description": "Gilgamesh"
                },
                {
                    "id":'5',
                    "author": "Dante Alighieri",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "The Book Of Job",
                    "price": 250,
                    "description": "The Book Of Job"
                },
                {
                    "id":'6',
                    "author": "Dante Alighieri",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "One Thousand and One Nights",
                    "price": 250,
                    "description": "One Thousand"
                },
                {
                    "id":'7',
                    "author": "Austen",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Saga",
                    "price": 250,
                    "description": "One Thousand"
                },
                {
                    "id":'8',
                    "author": "Jane Austen",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Pride and Prejudice",
                    "price": 250,
                    "description": "Prejudice"
                },
                {
                    "id":'9',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'10',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'11',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'12',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'13',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'14',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'15',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'16',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'17',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'18',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'19',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'20',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'21',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'22',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'23',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'24',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'25',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'26',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le  Goriot"
                },
                {
                    "id":'27',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le Goriot"
                },
                {
                    "id":'28',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le Goriot"
                },
                {
                    "id":'29',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le Goriot"
                },
                {
                    "id":'30',
                    "author": "Honor",
                    "imageLink": "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
                    "title": "Le  Goriot",
                    "price": 250,
                    "description": "Le Goriot"
                }
            ]
        
        }
        this.showMore = this.showMore.bind(this);
        this.showLess = this.showLess.bind(this);
    }
    showMore() {
        let Length = this.props.books.length;
        this.setState({ rowsToDisplay: Length, expand: true });
    }
    showLess() {
        this.setState({ rowsToDisplay: 20, expand: false });
    }
    componentDidMount(){
        this.props.getBooks(this.state.bookdata)
        this.setState({ loading:false });
    }


    render() {
       

        const books = this.props.books.slice(0, this.state.rowsToDisplay).map((book, i) => (
            <div className='col-md-3'>
                <br />
                <br />
                <div className="card" style={{ backgroundColor: 'Lightgrey', width: '60%', height: '85%', marginLeft: '50px' }}>
                    <div style={{ marginTop: '80px' }}>
                        <h5>Book id :{book.id}</h5>
                        <p>Book Description :{book.description} </p>
                        <Link style={{ textDecoration: 'none' }} to={`/details/${book.id}`}><button className="btn btn-sm btn-primary">Buy Book</button></Link>
                    </div>
                </div>
            </div>

        ))

        return <div><div className="row" >
            {books}
        </div><br />
            {this.state.expand ? <div style={{ textAlign: 'center' }}>
                <Link style={{ textDecoration: 'none' }} onClick={this.showLess}>Show Less</Link>
            </div> : <div style={{ textAlign: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} onClick={this.showMore}>Show More...</Link>
                </div>

            }
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
