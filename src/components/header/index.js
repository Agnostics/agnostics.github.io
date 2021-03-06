import './header.scss';
import React from 'react';
import helper from '../../assets/helper';

export default class Header extends React.Component {

	constructor() {
        super();
		this.newPage = this.newPage.bind(this);
    }

	newPage(ele) {
		const id = ele.currentTarget.id;

		if (helper.currentPage().slice(1) === id.charAt(id.length - 1)) {
			return;
		}

		helper.clearSel();
		const projectNumber = helper.currentPage().slice(-1);
		if ($(`.content-${projectNumber}`).width() === 0) {
			helper.lessInfo(projectNumber);
			setTimeout(() => {
				this.switchPage(id);
			}, 1000);
		} else {
			this.switchPage(id);
		}
	}

	switchPage(id) {
		if (helper.currentPage().slice(1) === id.charAt(id.length - 1)) {
			return;
		}
		switch (id) {
			case 'nav-1':
				$('#nav-1').toggleClass('sel');
				$('.sel').animate({backgroundColor: '#303030'}, 500);
				helper.unloadMap();

				if (parseInt(helper.currentPage().slice(1), 10) > 0) {
						$('#p0').css('display', 'block');
						$(`#${helper.currentPage()}`).toggle('blind', {direction: 'down'}, 1000);
						$('#p0').addClass('current');
						$(`#${helper.currentPage()}`).removeClass('current');
				} else {
				$('#p0').toggle('blind', {direction: 'down'}, 1000, () => {
					$(`#${helper.currentPage()}`).css('display', 'none');
					$(`#${helper.currentPage()}`).removeClass('current');
					$('#p0').addClass('current');
				});
				}

				break;
			case 'nav-2':
			case 'tab1':
				$('#nav-2').toggleClass('sel');
				$('.sel').animate({backgroundColor: '#dd7c7e'}, 500);
				$('.num1').toggleClass('act');
				helper.unloadMap();

				if (parseInt(helper.currentPage().slice(1), 10) > 1) {
						$('#p1').css('display', 'block');
						$(`#${helper.currentPage()}`).toggle('blind', {direction: 'down'}, 1000);
						$('#p1').addClass('current');
						$(`#${helper.currentPage()}`).removeClass('current');
				} else {
				$('#p1').toggle('blind', {direction: 'down'}, 1000, () => {
					$(`#${helper.currentPage()}`).css('display', 'none');
					$(`#${helper.currentPage()}`).removeClass('current');
					$('#p1').addClass('current');
				});
				}
				break;
			case 'tab2':
				$('#nav-2').toggleClass('sel');
				$('.sel').animate({backgroundColor: '#59c6c6'}, 500);
				$('.num2').toggleClass('act');
				helper.unloadMap();

				if (parseInt(helper.currentPage().slice(1), 10) > 2) {
						$('#p2').css('display', 'block');
						$(`#${helper.currentPage()}`).toggle('blind', {direction: 'down'}, 1000);
						$('#p2').addClass('current');
						$(`#${helper.currentPage()}`).removeClass('current');
				} else {
				$('#p2').toggle('blind', {direction: 'down'}, 1000, () => {
					$(`#${helper.currentPage()}`).css('display', 'none');
					$(`#${helper.currentPage()}`).removeClass('current');
					$('#p2').addClass('current');
				});
				}
				break;
			case 'tab3':
				$('#nav-2').toggleClass('sel');
				$('.sel').animate({backgroundColor: '#a872b5'}, 500);
				$('.num3').toggleClass('act');
				helper.unloadMap();

				if (parseInt(helper.currentPage().slice(1), 10) > 3) {
						$('#p3').css('display', 'block');
						$(`#${helper.currentPage()}`).toggle('blind', {direction: 'down'}, 1000);
						$('#p3').addClass('current');
						$(`#${helper.currentPage()}`).removeClass('current');
				} else {
				$('#p3').toggle('blind', {direction: 'down'}, 1000, () => {
					$(`#${helper.currentPage()}`).css('display', 'none');
					$(`#${helper.currentPage()}`).removeClass('current');
					$('#p3').addClass('current');
				});
				}
				break;
			case 'tab4':
				$('#nav-2').toggleClass('sel');
				$('.sel').animate({backgroundColor: '#3d9a7a'}, 500);
				$('.num4').toggleClass('act');
				helper.unloadMap();


				if (parseInt(helper.currentPage().slice(1), 10) > 4) {
						$('#p4').css('display', 'block');
						$(`#${helper.currentPage()}`).toggle('blind', {direction: 'down'}, 1000);
						$('#p4').addClass('current');
						$(`#${helper.currentPage()}`).removeClass('current');
				} else {
				$('#p4').toggle('blind', {direction: 'down'}, 1000, () => {
					$(`#${helper.currentPage()}`).css('display', 'none');
					$(`#${helper.currentPage()}`).removeClass('current');
					$('#p4').addClass('current');
				});
				}
				break;
			case 'nav-3':
				$(`#${id}`).toggleClass('sel');
				$('.sel').animate({backgroundColor: '#6f92ae'}, 500);
				helper.loadMap();

				if (parseInt(helper.currentPage().slice(1), 10) > 5) {
						$('#p5').css('display', 'block');
						$(`#${helper.currentPage()}`).toggle('blind', {direction: 'down'}, 1000);
						$('#p5').addClass('current');
						$(`#${helper.currentPage()}`).removeClass('current');
				} else {
				$('#p5').toggle('blind', {direction: 'down'}, 1000, () => {
					$(`#${helper.currentPage()}`).css('display', 'none');
					$(`#${helper.currentPage()}`).removeClass('current');
					$('#p5').addClass('current');
				});
				}

				break;
			default:
				helper.clearSel();
		}
	}

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="logo">
                        <img src="/src/components/header/logo.svg"/>
                        <div className="name">BRANDON <span className="last">PADILLA</span></div>
                    </div>
                    <nav className="full">
                        <div className="nav-item sel" id="nav-1" onClick={this.newPage}>
                            <div className="nav-text" >about</div>
                        </div>
                        <div className="nav-item" id="nav-2" onClick={this.newPage}>
                            <div className="nav-text">project</div>
                        </div>
						<div className="tabs">
							<div className="box num1" id="tab1" onClick={this.newPage}>1</div>
							<div className="box num2" id="tab2" onClick={this.newPage}>2</div>
							<div className="box num3" id="tab3" onClick={this.newPage}>3</div>
							<div className="box num4" id="tab4" onClick={this.newPage}>4</div>
						</div>
                        <div className="nav-item" id="nav-3" onClick={this.newPage}>
                            <div className="nav-text">contact</div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
