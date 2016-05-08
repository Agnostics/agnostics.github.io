import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import About from './containers/about';
import Project1 from './containers/project1';
import Project2 from './containers/project2';
import Project3 from './containers/project3';
import Project4 from './containers/project4';


class App extends React.Component {
    render() {
        return (
            <div >
				<Header/>
                <About/>
				<Project1/>
				<Project2/>
				<Project3/>
				<Project4/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'));
