import './header.scss';
import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="logo">
                        <img src="\src\components\header\logo.svg"/>
                        <div className="name">BRANDON <span className="last">PADILLA</span></div>
                    </div>
                    <nav>
                        <div className="nav-item sel" id="nav-1">
                            <div className="nav-text" >about</div>
                        </div>
                        <div className="nav-item" id="nav-2">
                            <div className="nav-text">projects</div>
                        </div>
                        <div className="nav-item" id="nav-3">
                            <div className="nav-text">contact</div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
