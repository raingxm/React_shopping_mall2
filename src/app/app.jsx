(function () {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        ReactDOM = require('react-dom');
        Main = require('./components/main.jsx');

    window.React = React;

    injectTapEventPlugin();

    ReactDOM.render(<Main />, document.body);
})();