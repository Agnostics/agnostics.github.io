import './about.scss';
import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import $ from 'jquery';

export default class About extends React.Component {

    constructor() {
        super();
        this.state = ({para: ''});
    }

    componentDidMount() {
        this.setEllipse();
        this.changeFont();
    }

    setEllipse() {
        setTimeout(() => {
            const para = $(window).height() - 425;
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

    render() {
        $(window).resize(() => {
            this.setEllipse();
            this.changeFont();
        });

        return (
            <div>
                <div className="top"></div>
                <div className="content"></div>
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
                        <div className="button-arrow">
                            <i className="icon ion-chevron-right"></i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
