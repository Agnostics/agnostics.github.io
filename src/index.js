import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import About from './containers/about';

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
