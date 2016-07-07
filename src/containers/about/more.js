import './about.scss';
import React from 'react';

export default class More extends React.Component {
    render() {
        return (
            <div className="contain-more">

                <div className="info">
                    <div className="title">Overview</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet augue quis leo cursus tincidunt id in tortor. Vestibulum aliquam cursus lectus, eu interdum sapien mattis ac. Aenean eget augue nec neque pharetra faucibus. Mauris a sem sit amet neque porta vulputate. Integer ac dignissim arcu. Aenean in euismod mauris.</div>

                    <div className="title">Overview</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet augue quis leo cursus tincidunt id in tortor. Vestibulum aliquam cursus lectus, eu interdum sapien mattis ac. Aenean eget augue nec neque pharetra faucibus. Mauris a sem sit amet neque porta vulputate. Integer ac dignissim arcu. Aenean in euismod mauris.</div>
                </div>

                <div className="tech">
                    <div className="title">Skills</div>
                    <div className="icons">
						<img src="/src/assets/img/tech/angular.svg"/>
						<img src="/src/assets/img/tech/react.svg"/>
						<img src="/src/assets/img/tech/redux.svg"/>
						<img src="/src/assets/img/tech/mongo.svg"/>
						<img src="/src/assets/img/tech/node.svg"/>
						<img src="/src/assets/img/tech/webpack.svg"/>
						<img src="/src/assets/img/tech/grunt.svg"/>
						<img src="/src/assets/img/tech/karma.svg"/>
						<img src="/src/assets/img/tech/sass.svg"/>
						<img src="/src/assets/img/tech/css.svg"/>
						<img src="/src/assets/img/tech/html.svg"/>
						<img src="/src/assets/img/tech/js.svg"/>
                    </div>
                </div>

            </div>
        );
    }
}
