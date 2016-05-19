import './p2.scss';
import React from 'react';
import help from '../../assets/helper/';

export default class Project2 extends React.Component {
    render() {
        return (
            <div id="p2">
                <div className="content-2"></div>
				<div className="more-2">this is project 2!!</div>
					<div className="side-small-2">
						<div className="back" onClick={() => help.lessInfo(2)}>
							<i className="icon ion-close-round"/>
						</div>
					</div>

                <div className="side-2" id="side">
                    <div className="desc">
					<div className="title">PROJECT</div>
                        <h1>Camp Vote</h1>
                        <h3>full-stack web</h3>
                        <p>First angular full-stack project with express backend. Fast load times and live preview of results allowing this site to be a quick and intuitive way to make polls. Register to save your polls or add an extra security feature for voters. Fully responsive, clean and fast.
						</p>
						<div className="more-info" onClick={() => help.moreInfo(2)}>
							<i className="icon ion-log-out"/>View Project
						</div>

                    </div>

                    <div className="button-panel">
                        <div className="button-arrow" onClick={() => help.up($('#p1'), $('#p2'), '#dd7c7e', 2, 1)}>
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.down($('#p3'), $('#p2'), '#a872b5', 2, 3)}>
                            <i className="icon ion-chevron-down"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.moreInfo(2)}>
                            <i className="icon ion-information"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
