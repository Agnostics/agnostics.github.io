import './p3.scss';
import React from 'react';

export default class More extends React.Component {

	constructor() {
		super();
		// this.handleOnClick = this.handleOnClick.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);

		this.state = ({active: '/src/assets/img/p2/1.png'});
	}

    onMouseOver(e) {
		const name = e.target.getAttribute('name');
		const img = {
			auth: '/src/assets/img/p2/1.png',
			live: '/src/assets/img/p2/2.png',
			security: '/src/assets/img/p2/3.png',
		};

        $(e.target).addClass('showing');
        $(e.target).siblings().removeClass('showing');
		this.setState({active: img[name]});
		console.log('k');
    }


    render() {
        return (
            <div className="contain-more">
                <header>
                    <div className="preview">
                        <img className="monitor" src="/src/assets/img/p3/top.png"/>
                    </div>
                    <div className="more-desc">
                        <div className="title">Objective</div>
                        <div className="overview">Use React/Redux to create a scaling app with async data flow. Incorperate an outside API along with a social authentication. Learn basics with React and Redux flow while creating a simple app to showcase techonogly and the newest ECMAScript 6.</div>

                    </div>
                </header>

				<div className="tech-used" >
					<div className="icons">
						<a href="https://facebook.github.io/react/" target="_blank" >
							<img src="/src/assets/img/tech/react.svg"/>
							<div className="icon-name">React</div>
						</a>
						<a href="https://github.com/reactjs/redux" target="_blank" >
							<img src="/src/assets/img/tech/redux.svg"/>
							<div className="icon-name">Redux</div>
						</a>
						<a href="https://www.mongodb.com/" target="_blank">
							<img src="/src/assets/img/tech/mongo.svg"/>
							<div className="icon-name">MongoDB</div>
						</a>
						<a href="https://nodejs.org/en/" target="_blank">
							<img src="/src/assets/img/tech/node.svg"/>
							<div className="icon-name">NodeJS</div>
						</a>
						<a href="https://webpack.github.io/" target="_blank">
							<img src="/src/assets/img/tech/webpack.svg"/>
							<div className="icon-name">Webpack</div>
						</a>
						<a href="http://sass-lang.com/" target="_blank">
							<img src="/src/assets/img/tech/sass.svg"/>
							<div className="icon-name">Sass</div>
						</a>
						<a href="https://en.wikipedia.org/wiki/ECMAScript" target="_blank">
							<img src="/src/assets/img/tech/es6.svg"/>
							<div className="icon-name">ECMA 6</div>
						</a>
					</div>
				</div>

				<div className="overview"> Use React/Redux to create a scaling app with async data flow. Incorperate an outside API along with a social authentication. Learn basics with React and Redux flow while creating a simple app to showcase techonogly and the newest ECMAScript 6.
				</div>

				<div className="view-links">
					<div>
						<a href="https://nightlife-app-redux.herokuapp.com/" target="_blank"><button>visit site</button></a>
					</div>
					<div>
						<a href="https://github.com/Agnostics/nightlife-app-react" target="_blank"><button>view code</button></a>
					</div>
				</div>
            </div>
        );
    }
}
