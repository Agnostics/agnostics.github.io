const help = {

	moreInfo(projectNumber) {
		const width = $(window).width() - 100;
		$(`.more-content-${projectNumber}`).css('overflow', 'auto');
        $(`.content-${projectNumber}`).velocity({width: 0}, 'swing', 1000);

		$(`.more-content-${projectNumber}`).toggle();

		$(`.side-${projectNumber}`).velocity({left: `-=${width}`}, 'swing', 1000);

		setTimeout(() => {
			$(`.side-${projectNumber}`).velocity({opacity: 0}, {queue: false, duration: 100, complete: () => {
				$(`.side-${projectNumber}`).css('display', 'none');
				$(`.content-${projectNumber}`).css('display', 'none');
			}});
		}, 900);

		setTimeout(() => {
			$(`.side-small-${projectNumber}`).velocity({opacity: 1}, 'swing', 100);
		}, 600);

		$('body').css('background-color', '#fff');
	},

	lessInfo(projectNumber) {
		$(`.more-content-${projectNumber}`).css('overflow', 'hidden');
		$(`.side-${projectNumber}`).css('display', '');
		$(`.side-${projectNumber}`).velocity({opacity: 1}, 'swing', 100);
		$(`.side-small-${projectNumber}`).velocity({opacity: 0}, 'swing', 300);
		$(`.side-${projectNumber}`).velocity({left: '0px'}, 'swing', 900);

		let tempCont = $(window).width() * 73;
			tempCont /= 100;
			tempCont += 30;

		$(`.content-${projectNumber}`).css('display', '');
		$(`.content-${projectNumber}`).velocity({width: `${tempCont}px`}, 'swing', 1000, () => {
			$('body').css('background-color', '#0f0f0f');
		$(`.more-content-${projectNumber}`).toggle();
		});
		$('.desc').velocity({opacity: 1}, {display: ''}, 'swing', 500);
		$('.avatar').velocity({opacity: 1}, {display: ''}, 'swing', 500);
		$('.button-panel').velocity({opacity: 1}, {display: ''}, 'swing', 500);
	},

	down(next, prev, color, toNav) {
		next.toggle('blind', {direction: 'down'}, 1000, () => {
			prev.css('display', 'none');
		});
		$('.sel').animate({backgroundColor: 'transparent'});
		$(`#nav-${toNav - 1}`).removeClass('sel');
		$(`#nav-${toNav}`).addClass('sel');
		$('.sel').animate({backgroundColor: color}, 1000);
	},

	up(next, prev, color, toNav) {
		next.css('display', '');
		prev.toggle('blind', {direction: 'down'}, 1500);
		$('.sel').animate({backgroundColor: 'transparent'});
		$(`#nav-${toNav + 1}`).removeClass('sel');
		$(`#nav-${toNav}`).addClass('sel');
		$('.sel').animate({backgroundColor: color}, 1500);
	}

};

export default help;
