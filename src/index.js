import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import About from './containers/about';
import Header from './components/header';

class App extends React.Component {
    render() {
        return (
            <div >
				<Header/>
                <About/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'));
