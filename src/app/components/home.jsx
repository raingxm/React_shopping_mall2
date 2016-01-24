var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navigation = require('./navigation.jsx');

var Main = React.createClass({

    render: function () {
        return (
            <div>

                <Navigation projectName="react shopping mall" />

                <div className="container">
                    <div className="homepage">
                        <h1>React Shopping Mall</h1>
                        <p className="lead">Welcome!!
                        </p>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Main;