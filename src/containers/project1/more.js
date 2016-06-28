import './p1.scss';
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

		$('.fade').hide();
        $(e.target).addClass('img-sel');
        $(e.target).siblings().removeClass('img-sel');
		this.setState({active: img[name]});
		$('.fade').fadeIn(500);
    }

    render() {
        return (
            <div className="contain-more">
                <header>
                    <div className="preview">
                        <img className="monitor" src="/src/assets/img/p1/home.jpg"/>
                    </div>
                    <div className="more-desc">
                        <div className="title">Objective</div>
                        <div className="overview">Create a clean modular design focusing on the content by allowing users to change the view of their homepage with relevant topics. Since most of the content is user generated it would require a puzzle piece design to give it a personalized feel. Easy profile access for new articles also promotes more user created content.</div>
                        <div className="title">Process</div>
                        <div className="overview">Brainstorm ideas on how to keep layout flexable. Took elements from Pinterest in order to display a lot of data in an organized matter. Articles catch users attention by the main picture and title of the article as classic 'click bait'. The logo was created in Adobe Illustrator, while the rest of the design was created in Adobe Photoshop.</div>
                    </div>
                </header>

                <div className="more-preview">
                    <div className="slider">
                        <div className="img-title">
                            <span onClick={this.handleOnClick} name="home">Home</span>
                            <span onClick={this.handleOnClick} className="img-sel" name="article">Article View</span>
                            <span onClick={this.handleOnClick} name="comments">Comments</span>
                        </div>
                        <img className="fade" src={this.state.active}/>
                    </div>
                </div>
            </div>
        );
    }
}
