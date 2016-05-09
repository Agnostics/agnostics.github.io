import './contact.scss';
import React from 'react';
import help from '../../assets/helper/';

export default class Project1 extends React.Component {

	constructor() {
		super();
		this.handleClickUp = this.handleClickUp.bind(this);
	}

	handleClickUp() {
		help.up($('#p4'), $('#contact'), '#3d9a7a', 2, 4);
		help.unloadMap();
	}

    render() {
        return (
            <div id="contact">
                <div className="content-5">

				</div>
				<div className="more-5">adsfasdf</div>
					<div className="side-small-5">
						<div className="back" onClick={() => help.lessInfo(5)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-5" id="side">
                    <div className="desc">
                        <h1>Contact</h1>
                        <h3>via email</h3>
					<input type="text" name="name" placeholder="name..."/>
					<input type="text" name="email" placeholder="email..."/>
					<textarea className="message" type="text" name="message" placeholder="message..."/>

					<div className="links">
						<i className="icon ion-social-github"></i>
						<i className="icon ion-social-codepen"></i>
						<i className="icon ion-social-twitter"></i>
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
