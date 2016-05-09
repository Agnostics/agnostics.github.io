import './p3.scss';
import React from 'react';
import help from '../../assets/helper/';

export default class Project3 extends React.Component {
    render() {
        return (
            <div id="p3">
                <div className="content-3"></div>
				<div className="more-3">this is project 2!!</div>
					<div className="side-small-3">
						<div className="back" onClick={() => help.lessInfo(3)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-3" id="side">
                    <div className="desc">
					<div className="title">PROJECT</div>
                        <h1>Nightlife App</h1>
                        <h3>full-stack web</h3>
                        <p>First angular full-stack project with express backend. Fast load times and live preview of results allowing this site to be a quick and intuitive way to make polls. Register to save your polls or add an extra security feature for voters. Fully responsive, clean and fast.
						</p>
						<div className="more-info" onClick={() => help.moreInfo(3)}>
							<i className="icon ion-log-out"/>More info
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
