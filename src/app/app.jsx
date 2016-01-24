(function() {
    var React = require('react'),
        Router = require('react-router-component'),
        Locations = Router.Locations,
        Location = Router.Location,
        injectTapEventPlugin = require("react-tap-event-plugin"),
        ReactDOM = require('react-dom'),

        Home = require('./components/home.jsx'),
        Mall = require('./components/mall.jsx');

    injectTapEventPlugin();

    var App = React.createClass({

        render: function() {
            return (
                <Locations hash>
                    <Location path="/home" handler={Home}/>
                    <Location path="/mall" handler={Mall}/>
                </Locations>
            )
        }
    });

    ReactDOM.render(<App/>, document.getElementById('mainContent'));
})();