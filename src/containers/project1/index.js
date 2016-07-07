import './p1.scss';
import React from 'react';
import help from '../../assets/helper/';
import More from './more';


export default class Project1 extends React.Component {
    render() {
        return (
            <div id="p1">
                <div className="content-1"></div>
				<div className="more-1"><More/></div>
					<div className="side-small-1">
						<div className="back" onClick={() => help.lessInfo(1)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-1" id="side">
                    <div className="desc">
					<div className="title">DESIGN PROJECT</div>
                        <h1>Empire Articles</h1>
                        <h3>in design</h3>
                        <p>This project is still in it's early development stages. The object was to create a place where people can post articles for various topics. The design idea was to keep things very modular and clean. Main focus was placed on the article view and text.</p>
                        <div className="more-info-1" onClick={() => help.moreInfo(1)}>
                            <i className="icon ion-log-out"/>View Project
                        </div>
                    </div>

                    <div className="button-panel">
                        <div className="button-arrow" onClick={() => help.up($('#p0'), $('#p1'), '#303030', 1, 0)}>
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.down($('#p2'), $('#p1'), '#59c6c6', 2, 2)}>
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
