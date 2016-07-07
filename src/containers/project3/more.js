import './p3.scss';
import React from 'react';

export default class More extends React.Component {

	constructor() {
		super();
		this.onMouseOver = this.onMouseOver.bind(this);

		this.state = ({active: '/src/assets/img/p3/react.jpg'});
	}

    onMouseOver(e) {
		const name = e.target.getAttribute('name');
		const img = {
			react: '/src/assets/img/p3/react.jpg',
			redux: '/src/assets/img/p3/redux.jpg',
			webpack: '/src/assets/img/p3/webpack.png',
		};

        $(e.target).addClass('showing');
        $(e.target).siblings().removeClass('showing');
		this.setState({active: img[name]});
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
					<div className="overview">Use React/Redux to create a scaling app with async data flow. Incorperate an outside API along with a social authentication. Learn basics with React and Redux flow while creating a simple app to showcase techonogly and the newest ECMAScript 6. Allow for scaling and new resources while maintaining structure.</div>

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

				<div className="site-elements">
					<div className="element-img">
						<img className="register" src={this.state.active}/>
					</div>
					<div className="element-text">
					<h1 className="showing" onClick={this.onMouseOver} name="react">React</h1>
						<p>Using reusable components with simple UI updates allows for a quick and easy development process. Allowing the focus on more complex assignments.</p>
					<h1 onClick={this.onMouseOver} name="redux">Redux</h1>
						<p>Each action is recorded along with relevant data for every store update or request. Allows for debugging and redux time travel.</p>
					<h1 onClick={this.onMouseOver} name="webpack">Webpack</h1>
						<p>Allows for the new ECMAScript to be used alongside babel to output standard javascript. Also used to optimize project imports and compress javascript.</p>
					</div>
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
