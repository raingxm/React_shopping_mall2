var React = require('react');

var Bootstrap = require('react-bootstrap');

var Item = React.createClass({

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
                    <div className="panel-footer">
                        <button type="button">ADD</button>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Item;