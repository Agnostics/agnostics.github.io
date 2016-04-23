import './about.scss';
import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import velocity from './velocity.js';

export default class About extends React.Component {

    constructor() {
        super();
        this.state = ({para: ''});
        this.showMore = this.showMore.bind(this);
		this.showLess = this.showLess.bind(this);
    }

    componentDidMount() {
        this.setEllipse();
        this.changeFont();
        const side = $('.side');
        this.animateEle(side);
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
            const para = $(window).height() - 425;
            const temp = `${para.toString()}px`;
            this.setState({para: temp});
        }, 100);
    }

    animateEle(side) {
        const height = $(window).height() - 80;
        setTimeout(() => {
            side.velocity({
                height
            }, 'easeInSine', 1500);
        }, 100);
    }

    showMore() {
        const width = $(window).width() - 100;
        $('.content').velocity({width: 0}, 'swing', 1000, () => {});
		$('.desc').velocity({opacity: 0}, {display: 'none'}, 'swing', 500);
		$('.avatar').velocity({opacity: 0}, {display: 'none'}, 'swing', 500);
		$('.button-panel').velocity({opacity: 0}, {display: 'none'}, 'swing', 500);

		$('.more-content').toggle();
        $('.side').velocity({left: `-=${width}`}, 'swing', 1000, () => {
			$('.side').velocity({opacity: 0}, 'swing', 800, () => {
				$('.side').css('display', 'none');
				$('.content').css('display', 'none');
			});
			$('.side-small').velocity({opacity: 1}, 'swing', 100);
		});
		$('body').css('background-color', '#fff');
    }

	showLess() {
		$('.side-small').velocity({opacity: 0}, 'swing', 100);
		$('.side').css('display', '');
		$('.side').velocity({opacity: 1}, 'swing', 100);
		$('.side').velocity({left: '0px'}, 'swing', 900);

		let tempCont = $(window).width() * 73;
			tempCont /= 100;
			tempCont += 30;

		$('.content').css('display', '');
		$('.content').velocity({width: `${tempCont}px`}, 'swing', 1000, () => {
			$('body').css('background-color', '#0f0f0f');
		$('.more-content').toggle();
		});
		$('.desc').velocity({opacity: 1}, {display: ''}, 'swing', 500);
		$('.avatar').velocity({opacity: 1}, {display: ''}, 'swing', 500);
		$('.button-panel').velocity({opacity: 1}, {display: ''}, 'swing', 500);
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

    render() {
        this.onResize(() => {
            this.setEllipse();
            this.changeFont();
            this.handleResize();
        });

        return (
            <div>
                <div className="top"></div>
                <div className="content"></div>
				<div className="more-content"> HELLO WOLRD</div>
				<div className="side-small">
					<div className="back" onClick={this.showLess}>
						<i className="icon ion-chevron-left"/>
					</div>
				</div>
                <div className="side" id="side">
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
                        <div className="button-arrow">
                            <i className="icon ion-chevron-down"></i>
                        </div>
                        <div className="button-arrow" onClick={this.showMore}>
                            <i className="icon ion-chevron-right"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
