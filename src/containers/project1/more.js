import './p1.scss';
import React from 'react';

export default class More extends React.Component {
    render() {
        return (
            <div className="contain-more">
				<header>
					<div className="title">Empire Articles</div>
					<div className="overview">This project is still in it's early development stages. The object was to create a place where people can post articles for various topics. The design idea was to keep things very modular and clean. Main focus was placed on the article view and text.</div>
				</header>
					<img className="monitor" src="/src/assets/img/test.png"/>
				<section className="tech">
					<span><img src="/src/assets/img/tech/psd.png"/></span>
					<span><img src="/src/assets/img/tech/ill.png"/></span>
				</section>

            </div>
        );
    }
}
