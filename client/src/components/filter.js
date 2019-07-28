import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCategory, fetchProducts} from '../actions';

//create an array of categories in the database
const categories = ['Games', 'Baby', 'Computers', 'Home', 'Industrial', 'Toys', 'Electronics',
                'Health', 'Grocery', 'Tools', 'Music', 'Shoes', 'Jewelery']

class Filter extends Component {
    
    handleClick(e) {
        e.preventDefault();
        let category = e.target.value;
        this.props.addCategory(category);
        let sort = this.props.sort;
        let page = this.props.page
        //fetchProudcts with a page of 1 as many categories don't have enough products to span across multiple pages
        this.props.fetchProducts(1, category, sort)
    }

    renderCategories () {
        //map through array of categories and create a button for each
        return categories.map(category => {
            return (
                <button className='category-button btn btn-primary' value= {category} onClick={this.handleClick.bind(this)}>
                    {category}
                </button>
            )

        })
    }

    render() {
        return (
            <div>
                <h1>Categories: </h1>
                {this.renderCategories()}
              
            </div>
       
        )
    }
}


function mapStateToProps(state) {
    return {products: state.products, category: state.category, sort: state.sort}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({addCategory, fetchProducts}, dispatch)
}


export default connect (mapStateToProps, mapDispatchToProps)(Filter);