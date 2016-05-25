import './p1.scss';
import React from 'react';

export default class More extends React.Component {
    render() {
        return (
            <div className="contain-more">
				<header>
					<div className="preview">
						<img className="monitor" src="/src/assets/img/minimal-browser.jpg"/>
						<section className="tech">
							<span><img src="/src/assets/img/tech/psd.png"/></span>
							<span><img src="/src/assets/img/tech/ill.png"/></span>
						</section>
					</div>
					<div className="desc">
						<div className="title">Objective</div>
						<div className="overview">Create a clean modular design focusing on the content by allowing users to change the view of their homepage with relevant topics. Since most of the content is user generated it would require a puzzle piece design to give it a personalized feel. Easy profile access for new articles also promotes more user created content.</div>
						<div className="title">Process</div>
						<div className="overview">This project is still in it's early development stages. The object was to create a place where people can post articles for various topics. The design idea was to keep things very modular and clean. Main focus was placed on the article view and text.</div>
					</div>
				</header>

            </div>
        );
    }
}
