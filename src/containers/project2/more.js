import './p2.scss';
import React from 'react';

export default class More extends React.Component {

	constructor() {
		super();
		this.handleOnClick = this.handleOnClick.bind(this);

		this.state = ({active: '/src/assets/img/p1/article-view.jpg'});
	}

    handleOnClick(e) {
		const name = e.target.getAttribute('name');
		const img = {
			home: '/src/assets/img/p1/home.jpg',
			article: '/src/assets/img/p1/article-view.jpg',
			comments: '/src/assets/img/p1/comments.jpg',
		};

        $(e.target).addClass('img-sel');
        $(e.target).siblings().removeClass('img-sel');
		this.setState({active: img[name]});
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
                        <div className="overview">Create a clean modular design focusing on the content by allowing users to change the view of their homepage with relevant topics. Since most of the content is user generated it would require a puzzle piece design to give it a personalized feel. Easy profile access for new articles also promotes more user created content.</div>
                        <div className="title">Process</div>
                        <div className="overview">Brainstorm ideas on how to keep layout flexable. Took elements from Pinterest in order to display a lot of data in an organized matter. Articles catch users attention by the main picture and title of the article as classic 'click bait'. The logo was created in Adobe Illustrator, while the rest of the design was created in Adobe Photoshop.</div>
						<div className="title">Links</div>
						<a href="https://campvote.herokuapp.com/" target="_blank"><i className="icon ion-link"></i></a>
						<a href="https://github.com/Agnostics/Voting-App" target="_blank"><i className="icon ion-code-working"></i></a>

                    </div>
                </header>

				<div className="tech-used">
					<div className="icons">
						<img src="/src/assets/img/tech/angular.svg"/>
						<img src="/src/assets/img/tech/mongo.svg"/>
						<img src="/src/assets/img/tech/grunt.svg"/>
						<img src="/src/assets/img/tech/html.svg"/>
						<img src="/src/assets/img/tech/css.svg"/>
						<img src="/src/assets/img/tech/js.svg"/>
					</div>
				</div>

                <div className="more-preview">
                    <div className="slider">
                        <div className="img-title">
                            <span onClick={this.handleOnClick} name="home">Home</span>
                            <span onClick={this.handleOnClick} className="img-sel" name="article">Article View</span>
                            <span onClick={this.handleOnClick} name="comments">Comments</span>
                        </div>
                        <img src={this.state.active}/>
                    </div>
                </div>
            </div>
        );
    }
}
