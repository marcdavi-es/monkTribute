	const body = document.getElementsByTagName('body')[0],
				chris = document.getElementsByClassName('chris')[0],
				head = document.getElementsByClassName('head')[0],
				// audio
				kangaroo = document.getElementsByClassName('kangaroo')[0],
				wallaby = document.getElementsByClassName('wallaby')[0];

	setTimeout(()=>{
		chris.classList.add('in');
	}, 2000);

	setTimeout(()=>{
		startPlaying();

	}, 3000)

	const startPlaying = () => {
		// play audio on loop
		kangaroo.loop = true;
		kangaroo.play();
		// get chris rocking
		setInterval(()=>{
			if (Array.from(chris.classList).includes('right')) {
				chris.classList.remove('right');
				chris.classList.add('left');	
			} else {
				chris.classList.remove('left');
				chris.classList.add('right');	
			}
		},1200)
		// get chris singing
		const playingOrder = [
			{	nextState: 'open',	delay: 12 },				
			{	nextState: 'halfway',	delay: 0.6 },		// tie
			{	nextState: 'open',	delay: 0.3 },			// me
			{	nextState: 'halfway',	delay: 0.6 },		// kan
			{	nextState: 'open',	delay: 0.3 },			// ga
			{	nextState: 'halfway',	delay: 0.6 },		// roo
			{	nextState: 'open',	delay: 0.9 },			// down
			{	nextState: 'halfway',	delay: 0.6 },		// sport
			{	nextState: 'open',	delay: 0.3 },			// -
			{	nextState: 'halfway',	delay: 0.6 },		// tie
			{	nextState: 'open',	delay: 0.3 },			// me
			{	nextState: 'halfway',	delay: 0.6 },		// kan
			{	nextState: 'open',	delay: 0.3 },			// ga
			{	nextState: 'halfway',	delay: 0.6 },		// roo
			{	nextState: '',	delay: 0.9 },					// down
		];
		var runningTimer = 0;
		playingOrder.forEach(element=>{
			runningTimer += element.delay*1000;
			setTimeout(()=>{
				head.classList.remove('open', 'halfway');
				head.classList.add(element.nextState);
			},runningTimer);
		});
	}

// Tie 		1
// Me			0.5
// Kan		1
// Ga 		0.5
// Roo 		1
// Down		2
// Sport	2

	function resize () {
		body.style.height = window.innerHeight + 'px';
		body.style.width = window.innerWidth + 'px';
	}
	window.onresize = resize;	
	resize();
