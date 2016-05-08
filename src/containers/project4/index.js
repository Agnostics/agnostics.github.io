import './p4.scss';
import React from 'react';
import help from '../../assets/helper/';

export default class Project4 extends React.Component {
    render() {
        return (
            <div id="p4">
                <div className="content-4"></div>
				<div className="more-4">this is project 4!!</div>
					<div className="side-small-4">
						<div className="back" onClick={() => help.lessInfo(4)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-4" id="side">
                    <div className="desc">
					<div className="title">PROJECT</div>
                        <h1>Nightlife App</h1>
                        <h3>full-stack web</h3>
                        <p>First angular full-stack project with express backend. Fast load times and live preview of results allowing this site to be a quick and intuitive way to make polls. Register to save your polls or add an extra security feature for voters. Fully responsive, clean and fast.
						</p>
						<div className="more-info">
							<i className="icon ion-log-out"/>More info
						</div>

                    </div>

                    <div className="button-panel">
                        <div className="button-arrow" onClick={() => help.up($('#p3'), $('#p4'), '#a872b5', 2, 3)}>
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.down($('#contact'), $('#p4'), '#dd7c7e', 3, 4)}>
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
