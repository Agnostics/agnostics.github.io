import './p4.scss';
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
                        <img className="monitor" src="/src/assets/img/p4/top.png"/>
                    </div>
                    <div className="more-desc">
                        <div className="title">Objective</div>
						<div className="overview">Create a simple site where people can go to watch their favorite streamer's oddshot. Quick, simple UI, fast load times and straight to the point. Content driven site with dynamic elements Allowing users to select their top 8. Videos are parsed from Twitch chat and passed through an algorithm to avoid duplicate videos.</div>
						<div className="title">In Development*</div>
						<div className="overview">The site is currently going through live development and has recently halted in progression for a complete overhaul. The new project can be found on github under TwitchShots. This will stay up for reference and comparison.</div>

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
					<h1 className="showing" onClick={this.onMouseOver} name="react">Dynamic Data</h1>
						<p>All information and images are pulled directly from twitch servers so if a streamer changes something it will also change here.</p>
					<h1 onClick={this.onMouseOver} name="redux">Fast Load Times</h1>
						<p>Don't wait while the whole page loads, each section will load separately allowing you to watch the videos you want.</p>
					<h1 onClick={this.onMouseOver} name="webpack">Unique UI</h1>
						<p>Customize your top 8 so you can get quick access to your favorite streamers without having to look at things you don't want.</p>
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
