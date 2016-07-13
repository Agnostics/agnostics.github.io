import './contact.scss';
import React from 'react';
import help from '../../assets/helper/';

export default class Project1 extends React.Component {

	constructor() {
		super();
		this.handleClickUp = this.handleClickUp.bind(this);
	}

	handleClickUp() {
		help.up($('#p4'), $('#p5'), '#3d9a7a', 2, 4);
		help.unloadMap();
	}

    render() {
        return (
            <div id="p5">
                <div className="content-5">

				</div>
				<div className="more-5"></div>
					<div className="side-small-5">
						<div className="back" onClick={() => help.lessInfo(5)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-5" id="side">
                    <div className="desc">
                        <h1>Contact</h1>
					<h3>below</h3>

					<div className="links">
						<a href="mailto:brandonjamespadilla@gmail.com?Subject=Hello" target="_top"><i className="icon ion-email"></i></a>
						<a href="http://codepen.io/agnostics/#hireme" target="_blank"><i className="icon ion-social-codepen"></i></a>
						<a href="https://twitter.com/_brandonpadilla" target="_blank"><i className="icon ion-social-twitter"></i></a>
					</div>
                    </div>

                    <div className="button-panel">
                        <div className="button-arrow" onClick={this.handleClickUp}>
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow">
                            <i className="icon ion-chevron-down"></i>
                        </div>
                         <div className="button-arrow" >
                            <i className="icon ion-information"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
