var React = require('React');

var CartItem = React.createClass({
    render: function() {
        var item = this.props.item;
        return (<tbody>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            </tbody>
        )
    }
});

module.exports = CartItem;