var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navigation = require('./navigation.jsx');
var Item = require('./item.jsx');
var Cart = require('./cart.jsx');

var Mall = React.createClass({

    getInitialState: function() {

        return {data: {items: []}};
    },
    componentDidMount: function() {

        var that = this;

        $.get('./data/items.json', function(data) {
            that.setState({data: data});
        });
    },

    render: function() {
        var items = this.state.data.items;

        return (
            <div>
                <Navigation projectName="react shopping mall" />

                {items.map(function(item) {
                    return <Item data={item}/>
                }) }

            </div>
        )
    }
});

module.exports = Mall;