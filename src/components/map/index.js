import './map.scss';
import React from 'react';

export default class Map extends React.Component {
    render() {
        return (
            <div id="map">
                <iframe src="http://mapbuildr.com/frame/0084uu" frameBorder="0"></iframe>
            </div>
        );
    }
}
