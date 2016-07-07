import './p3.scss';
import React from 'react';
import help from '../../assets/helper/';
import More from './more';


export default class Project3 extends React.Component {
    render() {
        return (
            <div id="p3">
                <div className="content-3"></div>
				<div className="more-3"><More/></div>
					<div className="side-small-3">
						<div className="back" onClick={() => help.lessInfo(3)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-3" id="side">
                    <div className="desc">
					<div className="title">REACT PROJECT</div>
                        <h1>Nightlife App</h1>
                        <h3>full-stack web</h3>
                        <p>React/Redux full-stack project with express backend. Yelp API with Twitter authentication serving local bars/restaurants to the user. Allowing users to specify if they are attending a particular bar.</p>
						<div className="more-info" onClick={() => help.moreInfo(3)}>
							<i className="icon ion-log-out"/>View Project
						</div>

                    </div>

                    <div className="button-panel">
                        <div className="button-arrow" onClick={() => help.up($('#p2'), $('#p3'), '#59c6c6', 2, 2)}>
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.down($('#p4'), $('#p3'), '#3d9a7a', 2, 4)}>
                            <i className="icon ion-chevron-down"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.moreInfo(3)}>
                            <i className="icon ion-information"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
