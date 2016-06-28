const help = {

	moreInfo(projectNumber) {
		const width = $(window).width() - 100;
		$(`.more-content-${projectNumber}`).css('overflow', 'auto');
        $(`.content-${projectNumber}`).velocity({width: 0}, 'swing', 1000);

		$(`.more-${projectNumber}`).toggle();

		$(`.side-${projectNumber}`).velocity({left: `-=${width}`}, 'swing', 1000);

		setTimeout(() => {
			$(`.side-${projectNumber}`).velocity({opacity: 0}, {queue: false, duration: 100, complete: () => {
				$(`.side-${projectNumber}`).css('display', 'none');
				$(`.content-${projectNumber}`).css('display', 'none');
				$(`.more-${projectNumber}`).css('z-index', 1);
			}});
		}, 900);

		setTimeout(() => {
			$(`.side-small-${projectNumber}`).velocity({opacity: 1}, 'swing', 100);
		}, 600);

		$('body').css('background-color', '#fff');
	},

	lessInfo(projectNumber) {
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		$(`.more-content-${projectNumber}`).css('overflow', 'hidden');
		$(`.more-${projectNumber}`).css('z-index', -1);
		$(`.side-${projectNumber}`).css('display', '');
		$(`.side-${projectNumber}`).velocity({opacity: 1}, 'swing', 100);
		$(`.side-small-${projectNumber}`).velocity({opacity: 0}, 'swing', 300);
		$(`.side-${projectNumber}`).velocity({left: '0px'}, 'swing', 900);

		let tempCont = $(window).width() * 74;
			tempCont /= 100;
			tempCont += 30;

		$(`.content-${projectNumber}`).css('display', '');
		$(`.content-${projectNumber}`).velocity({width: `${tempCont}px`}, 'swing', 1000, () => {
			$('body').css('background-color', '#0f0f0f');
			$(`.more-${projectNumber}`).toggle();
		});
		$('.desc').velocity({opacity: 1}, {display: ''}, 'swing', 500);
		$('.avatar').velocity({opacity: 1}, {display: ''}, 'swing', 500);
		$('.button-panel').velocity({opacity: 1}, {display: ''}, 'swing', 500);
	},

	down(next, prev, color, toNav, act) {
		this.clearSel();
		next.toggle('blind', {direction: 'down'}, 1000, () => {
			prev.removeClass('current');
			prev.css('display', 'none');
		});
		next.addClass('current');

		$(`#nav-${toNav}`).addClass('sel');
		$('.sel').animate({backgroundColor: color}, 1000);
		$(`.num${act}`).toggleClass('act');
	},

	up(next, prev, color, toNav, act) {
		this.clearSel();
		next.css('display', 'block');
		next.addClass('current');
		prev.toggle('blind', {direction: 'down'}, 1500);
		prev.removeClass('current');
		$(`#nav-${toNav}`).addClass('sel');
		$('.sel').animate({backgroundColor: color}, 1500);
		$(`.num${act}`).toggleClass('act');
	},

	clearSel() {
		for (let i = 0; i < 4; i++) {
			$('.sel').css({backgroundColor: '#ffffff'});
			$(`#nav-${i}`).removeClass('sel');
		}

		for (let i = 0; i < 5; i++) {
			$('.sel').css({backgroundColor: '#ffffff'});
			$(`.num${i}`).removeClass('act');
		}
	},

	onResize(c, t) {
		onresize = () => {
			clearTimeout(t);
			t = setTimeout(c, 100) // eslint-disable-line
		};
		return c;
	},

	handleResize() {
		$('[class^="content"]').css('width', 'calc(73% + 30px)');
	},

	loadMap() {
		$('#map').css('z-index', 1);
		setTimeout(() => {
		$('#map').animate({opacity: 1}, 500);
		}, 500);
	},
	unloadMap() {
		$('#map').animate({opacity: 0}, 500, () => {
			$('#map').css('z-index', -1);
		});
	},
	currentPage() {
		let output = '';
		$('[id^=p]').each((i, e) => {
			if ($(e).hasClass('current')) {
				output = e.id;
				return output;
			}
		return output;
		});
	return output;
	}

};

export default help;
