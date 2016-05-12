import './about.scss';
import React from 'react';
import More from './more';
import velocity from '../../assets/helper/velocity.js';
import jqueryUi from '../../assets/helper/jquery-ui.min.js'
import help from '../../assets/helper/';

export default class About extends React.Component {

    constructor() {
        super();
        this.state = ({para: ''});
    }

    componentDidMount() {
        this.setEllipse();
    }

    setEllipse() {
        setTimeout(() => {
            const para = $(window).height() - 100;
            const temp = `${para.toString()}px`;
            this.setState({para: temp});
        }, 100);
    }

    render() {
        help.onResize(() => {
            this.setEllipse();
            help.handleResize();
        });

        return (
            <div id="p0" className="current">
                <div className="content-0"></div>
				<div className="more-0"><More/></div>
				<div className="side-small-0">
					<div className="back" onClick={() => help.lessInfo(0)}>
						<i className="icon ion-close-round"/>
					</div>
				</div>
                <div className="side-0">
                    <div className="desc">
                    <img className="avatar" src="/src/assets/img/me.png"/>
						<h1>About me</h1>
						<h3>developer</h3>
                            <p>
                                Have a project that needs some creative injection or reliable code then you’re at the right place. Currently located in the amazing NJ/NY area. A self-taught front and back end developer with the drive and dedication needed to succeed. I focus on clean, modern design with a strong emphasis on functionality.
                            </p>
							<div className="more-info">
								<span onClick={() => help.moreInfo(0)}><i className="icon ion-log-out"/>More info</span>
							</div>
                    </div>

                    <div className="button-panel">
                        <div className="button-arrow">
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.down($('#p1'), $('#p0'), '#dd7c7e', 2, 1)}>
                            <i className="icon ion-chevron-down"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.moreInfo(0)}>
                            <i className="icon ion-information"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
