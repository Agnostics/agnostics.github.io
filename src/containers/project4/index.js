import './p4.scss';
import React from 'react';
import help from '../../assets/helper/';
import More from './more';


export default class Project4 extends React.Component {

	constructor() {
        super();
		this.handleClickUp = this.handleClickUp.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
    }

	handleClickUp() {
		help.up($('#p3'), $('#p4'), '#a872b5', 2, 3);
		help.unloadMap();
	}

	handleClickDown() {
		help.down($('#p5'), $('#p4'), '#6f92ae', 3, 5);
		help.loadMap();
	}


    render() {
        return (
            <div id="p4">
                <div className="content-4"></div>
				<div className="more-4"><More/></div>
					<div className="side-small-4">
						<div className="back" onClick={() => help.lessInfo(4)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-4" id="side">
                    <div className="desc">
					<div className="title">PROJECT</div>
                        <h1>MultiShot</h1>
                        <h3>in development</h3>
                        <p>Simple site powered by Angular. Dynamic data and fast load times allowing users to watch their favorite videos with ease. Easy UI for navigation, simple and to the point.
						</p>
						<div className="more-info" onClick={() => help.moreInfo(4)}>
							<i className="icon ion-log-out"/>View Project
						</div>

                    </div>

                    <div className="button-panel">
                        <div className="button-arrow" onClick={this.handleClickUp}>
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={this.handleClickDown}>
                            <i className="icon ion-chevron-down"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.moreInfo(4)}>
                            <i className="icon ion-information"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
