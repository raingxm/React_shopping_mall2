(function() {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        ReactDOM = require('react-dom'),
        Main = require('./components/main.jsx'),
        Mall = require('./components/mall.jsx');

    var Router = require('react-router-component');
    var Locations = Router.Locations;
    var Location = Router.Location;

    injectTapEventPlugin();

    var App = React.createClass({

        render: function() {
            return (
                <Locations hash>
                    <Location path="/home" handler={Main} />
                    <Location path="/mall" handler={Mall} />
                </Locations>
            )
        }
    });

    ReactDOM.render(React.createElement(App), document.body);
})();