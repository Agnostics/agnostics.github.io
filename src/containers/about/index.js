import './about.scss';
import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import More from './more';
import ProjectOne from '../projectone';
import velocity from '../../assets/helper/velocity.js';
import jqueryUi from '../../assets/helper/jquery-ui.min.js'

import help from '../../assets/helper/';

export default class About extends React.Component {

    constructor() {
        super();
        this.state = ({para: ''});

		this.down = this.down.bind(this);
    }

    componentDidMount() {
        this.setEllipse();
        this.changeFont();
    }

    onResize(c, t) {
        onresize = () => {
            clearTimeout(t);
            t = setTimeout(c, 100) // eslint-disable-line
        };
        return c;
    }

    setEllipse() {
        setTimeout(() => {
            const para = $(window).height() - 400;
            const temp = `${para.toString()}px`;
            this.setState({para: temp});
        }, 100);
    }

    changeFont() {
        if ($('.side').width() < 300) {
            const fontSize = '12px';
            $('#check').css('font-size', fontSize);
        } else {
            const fontSize = '14px';
            $('#check').css('font-size', fontSize);
        }
    }

    handleResize() {
        $('.side').css('height', 'calc(100vh - 80px)');
		$('.content').css('width', 'calc(73% + 30px)');
    }
	down() {
		$('#projects').toggle('blind', {direction: 'down'}, 1000);
		$('.sel').animate({backgroundColor: 'transparent'});
		$('#nav-1').removeClass('sel');
		$('#nav-2').addClass('sel');
		$('.sel').animate({backgroundColor: '#dd7c7e'}, 1000);
	}

    render() {
        this.onResize(() => {
            this.setEllipse();
            this.changeFont();
            this.handleResize();
        });

        return (
<div>
            <div id="about">
				<div className="top"></div>
                <div className="content-0"></div>
				<div className="more-content-0"><More/></div>
				<div className="side-small-0">
					<div className="back" onClick={() => help.lessInfo(0)}>
						<i className="icon ion-close-round"/>
					</div>
				</div>
                <div className="side-0">
                    <img className="avatar" src="/src/assets/img/me.png"/>
                    <div className="desc">
                        <Dotdotdot clamp={this.state.para}>
                            <p id="check">
                                As you may already know, my name is Brandon. If you have a project that needs some creative injection or reliable code then you’re at the right place. Currently located in the amazing NJ/NY area. A self-taught front and back end developer with the drive and dedication needed to succeed. I focus on clean, modern design with a strong emphasis on functionality.
                            </p>
                        </Dotdotdot>
                    </div>

                    <div className="button-panel">
                        <div className="button-arrow">
                            <i className="icon ion-chevron-up"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.down($('#projects'), $('#about'), '#dd7c7e', 2)}>
                            <i className="icon ion-chevron-down"></i>
                        </div>
                        <div className="button-arrow" onClick={() => help.moreInfo(0)}>
                            <i className="icon ion-information"></i>
                        </div>

                    </div>
                </div>
            </div>
			<div id="projects"><ProjectOne/></div>

</div>
        );
    }
}
