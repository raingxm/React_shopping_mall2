var React = require('React');

var CartItem = React.createClass({
    render: function() {
        var item = this.props.item;
        return <tr>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
        </tr>
    }
});

var Cart = React.createClass({

    getDefaultProps: function() {
        return {
            items: []
        }
    },
    getInitialState: function() {
        return {
            items: this.props.items
        }
    },
    showBlankMessage: function() {
        return <p>No items in cart</p>
    },
    getCartTotal: function() {
        var total = _.reduce(this.props.items, function(accum, item) {
            return accum + (item.count * item.price);
        }, 0);

        return total;
    },
    renderItems: function() {
        var items = this.state.items;
        return (
            <div>
                <h5>Total {this.getCartTotal()} </h5>
                <table className='u-full-width'>
                    <thead>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </thead>
                    <tbody>
                    </tbody>
                    {items.map(function(item) {
                        return <CartItem key={item.id} item={item} />
                    })}
                </table>
            </div>
        )
    },
    render: function() {
        var items = this.state.items,
            createItems = this.renderItems();
        return (
            <div>
                <h3>Cart</h3>
                { items.length > 0 ? createItems : this.showBlankMessage() }
            </div>
        )
    }
});

module.exports = Cart;
