import './p2.scss';
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
                        <img className="monitor" src="/src/assets/img/p2/topimg.png"/>
                    </div>
                    <div className="more-desc">
                        <div className="title">Objective</div>
                        <div className="overview">Create a clean site where people can create and share user generated polls with ease. Allow users to save their polls, add basic security to their polls and even allow guests to vote. All poll results are in real time. Keep things fast with Angular in the front-end and express in the back. Simple database design with MongoDB allowing the storage for polls and user data. Rounded off with some basic testing with Karma.</div>

                    </div>
                </header>

				<div className="tech-used" >
					<div className="icons">
						<a href="https://angularjs.org/" target="_blank" >
							<img src="/src/assets/img/tech/angular.svg"/>
							<div className="icon-name">Angular</div>
						</a>
						<a href="https://www.mongodb.com/" target="_blank">
							<img src="/src/assets/img/tech/mongo.svg"/>
							<div className="icon-name">MongoDB</div>
						</a>
						<a href="https://nodejs.org/en/" target="_blank">
							<img src="/src/assets/img/tech/node.svg"/>
							<div className="icon-name">NodeJS</div>
						</a>
						<a href="http://sass-lang.com/" target="_blank">
							<img src="/src/assets/img/tech/sass.svg"/>
							<div className="icon-name">Sass</div>
						</a>
						<a href="http://gruntjs.com/" target="_blank">
							<img src="/src/assets/img/tech/grunt.svg"/>
							<div className="icon-name">Grunt</div>
						</a>
						<a href="https://karma-runner.github.io/0.13/index.html" target="_blank">
							<img src="/src/assets/img/tech/karma.svg"/>
							<div className="icon-name">Karma</div>
						</a>
					</div>
				</div>

				<div className="site-elements">
					<div className="element-img">
						<img className="register" src={this.state.active}/>
					</div>
					<div className="element-text">
						<h1 className="showing" onClick={this.onMouseOver} name="auth">Authentication</h1>
						<p>Simple interface, allowing users to quickly register an account. Created with passport.js, includes basic local auth with the ability to link social accounts such as Facebook, Twitter and Google.</p>
						<h1 onClick={this.onMouseOver} name="live">Live Results</h1>
						<p>After sharing your poll you will be able to see the votes accumulate in real time without refreshing the page.</p>
						<h1 onClick={this.onMouseOver} name="security">Security</h1>
						<p>Protect your polls from bots and other things that can alter your results with captcha, user registration and forcing single IP.</p>
					</div>
				</div>
				<div className="view-links">
					<div>
						<a href="https://campvote.herokuapp.com/" target="_blank"><button>visit site</button></a>
					</div>
					<div>
						<a href="https://github.com/Agnostics/Voting-App" target="_blank"><button>view code</button></a>
					</div>
				</div>
            </div>
        );
    }
}
