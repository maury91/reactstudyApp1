import React from 'react';
import Product from './product';


export default class ProductList extends React.Component {

    state = {
        products: [],
        order: 'desc'
    };

    handleProductUpVote = (product_id, upVoting) => {
        const product = this.state.products.find(({id}) => id === product_id);
        if (product) {
            product.votes += upVoting ? 1 : -1;
            this.sortProducts();
        }
    };

    componentDidMount() {
        this.sortProducts();
    }

    static getOrderedProducts(sorting) {
        if (sorting === 'desc') {
            return Data.sort((a, b) => b.votes - a.votes);
        }
        return Data.sort((a, b) => a.votes - b.votes);
    }

    sortProducts() {
        const products = ProductList.getOrderedProducts(this.state.order);
        this.setState({products});
    }

    selectChange = (ev) => {
        this.setState({
            order: ev.target.value
        },this.sortProducts);
    };

    render() {

        const products = this.state.products.map(product => (
            <Product
                onVote={this.handleProductUpVote}
                key={`product-${product.id}`}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitter_avatar_url={product.submitter_avatar_url}
                product_image_url={product.product_image_url}
            />
        ));

        return (
            <div>
                <select onChange={this.selectChange}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
                <div className='ui items'>
                    {products}
                </div>
            </div>
        );
    }

}