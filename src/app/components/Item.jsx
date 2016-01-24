var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var Cart = require('./cart.jsx');

var Item = React.createClass({
    getInitialState: function() {
        return {
            itemsInCart: []
        }
    },

    updateCart: function(items) {
        this.setState({itemsInCart: items});
    },

    addItemToCart: function(item) {
        var items = this.state.itemsInCart;
        var existingItem = _.find(items, function(i) {
            return i.id == item.id;
        });

        if(existingItem) {
            existingItem.count = existingItem.count + 1
        } else {
            items.push({
                name: item.name,
                count: 1,
                price: item.price,
                id: item.id
            })
        }
        this.updateCart(items);
    },

    render: function() {

        var item = this.props.data;
        return (
            <div key={item.id} className="col-sm-6 col-md-3">
                <div className="panel panel-success" key={item.id}>
                    <div className="panel-heading">
                        <h4 className="panel-title">{item.name} -- ￥{item.price}</h4>
                    </div>
                    <div className="panel-body text-center nopadding">
                        <img src={item.image} width="200px" height="200px"/>
                    </div>
                    <button className="btn btn-primary" onClick={this.addItemToCart.bind(this, item)}>
                        Add to cart
                    </button>
                </div>
                <Cart items={this.state.itemsInCart}/>
            </div>
        )
    }

});

//{React.cloneElement(this.props.children, {items: this.state.itemsInCart})}

module.exports = Item;