import './about.scss';
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
				<div className="hero"></div>
                <header>
                    <div className="more-desc">
                        <div className="title">About me</div>
                        <div className="overview">Just a young developer who found his place in the development world. Since I was young I have been teaching myself all sorts of things. I have experience in video editing, game development, 3d modeling, 2d art, small java applications, and even running a successful forum with over 100k registered users. I had an itch to program and also flex my artistic abilities. After much research I found that a web developer would be a perfect match for me. I started right away to teach myself the basics of HTML and CSS and quickly built sites from scratch. Once I mastered the basics I expanded my horizon to cover backend technologies and web applications. I am constantly learning new things every day to become a better developer and stay one step ahead of the web standards.</div>
						<div className="title">Skills</div>
                        <div className="overview">
							<img src="/src/assets/img/tech/angular.svg"/>
							<img src="/src/assets/img/tech/react.svg"/>
							<img src="/src/assets/img/tech/redux.svg"/>
							<img src="/src/assets/img/tech/mongo.svg"/>
							<img src="/src/assets/img/tech/node.svg"/>
							<img src="/src/assets/img/tech/grunt.svg"/>
							<img src="/src/assets/img/tech/webpack.svg"/>
							<img src="/src/assets/img/tech/karma.svg"/>
							<img src="/src/assets/img/tech/es6.svg"/>
							<img src="/src/assets/img/tech/js.svg"/>
							<img src="/src/assets/img/tech/sass.svg"/>
							<img src="/src/assets/img/tech/html.svg"/>
							<img src="/src/assets/img/tech/css.svg"/>
						</div>
                    </div>
                </header>
				<div className="my-code">
					<div className="box">
						<a target="_blank" href="https://github.com/Agnostics"><img src="/src/assets/img/tech/github.svg"/></a>
					</div>
					<div className="box">
						<a target="_blank" href="http://codepen.io/agnostics/"><img src="/src/assets/img/tech/codepen.svg"/></a>
					</div>
					<div className="box">
						<a target="_blank" href="https://www.freecodecamp.com/agnostics"><img src="/src/assets/img/tech/fcc.svg"/></a>
					</div>
				</div>
            </div>
        );
    }
}
