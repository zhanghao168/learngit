import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return <div>Hello fuck</div>;
    }
}

render(<App />, document.getElementById('root'));