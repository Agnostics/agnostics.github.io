import './p1.scss';

import React from 'react';
import Dotdotdot from 'react-dotdotdot';

import help from '../../assets/helper/';

export default class ProjectOne extends React.Component {

    constructor() {
        super();
        this.up = this.up.bind(this);
    }

    up() {
        $('#projects').toggle('blind', {direction: 'down'}, 1500);
		$('.sel').animate({backgroundColor: 'transparent'});
		$('#nav-2').removeClass('sel');
		$('#nav-1').addClass('sel');
		$('.sel').animate({backgroundColor: '#0f0f0f'}, 1500);
    }

    render() {
        return (
            <div id="p1">
                <div className="top-1"></div>
                <div className="content-1"></div>
				<div className="more-content-1">adsfasdf</div>
					<div className="side-small-1">
						<div className="back" onClick={() => help.lessInfo(1)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-1" id="side">
                    <div className="desc">
					<div className="title">PROJECT</div>
                        <h1>Empire Articles</h1>
                        <h3>in development</h3>
                        <p>This project is still in it's early development stages. The object was to create a place where people can post articles for various topics. The design idea was to keep things very modular and clean. Main focus was placed on the article view and text.</p>
                        <div className="more-info-1">
                            <i className="icon ion-log-out"/>More info
                        </div>
                    </div>

                    <div className="button-panel">
                        <div className="button-arrow" onClick={() => help.up($('#about'), $('#projects'), '#0f0f0f', 1)}>
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={this.test}>
                            <i className="icon ion-chevron-down"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.moreInfo(1)}>
                            <i className="icon ion-information"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
