	const body = document.getElementsByTagName('body')[0],
				chris = document.getElementsByClassName('chris')[0],
				head = document.getElementsByClassName('head')[0],
				// audio
				kangaroo = document.getElementsByClassName('kangaroo')[0],
				wallaby = document.getElementsByClassName('wallaby')[0];

	wallaby.onloadeddata = () => {
		setTimeout(()=>{
			chris.classList.add('in');
			startPlaying();
		}, 3000)
	}

	const startPlaying = () => {
		// play audio
		wallaby.play();
		// get chris rocking
		setInterval(()=>{
			if (Array.from(chris.classList).includes('right')) {
				chris.classList.remove('right');
				chris.classList.add('left');	
			} else {
				chris.classList.remove('left');
				chris.classList.add('right');	
			}
		},650)
		// get chris singing
		const playingOrder = [
			// There's an...
			{	nextState: 'open',	delay: 11.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'halfway',	delay: 0.4 },	
			{	nextState: 'open',	delay: 0.5 },
			{	nextState: 'halfway',	delay: 0.6 },		
			{	nextState: 'open',	delay: 0.3 },			
			{	nextState: 'halfway',	delay: 0.6 },		// dying?	
			{	nextState: '',	delay: 0.9 },
			{	nextState: 'halfway',	delay: 0.9 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.2 },
			{	nextState: 'open',	delay: 0.2 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.2 },
			{	nextState: 'open',	delay: 0.2 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.2 },
			{	nextState: 'open',	delay: 0.2 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.1 },
			{	nextState: 'open',	delay: 0.1 },				
			{	nextState: 'halfway',	delay: 0.2 },
			{	nextState: '',	delay: 0.8 },
			// Watch me...
			{	nextState: 'halfway',	delay: 0.4 },		// Watch
			{	nextState: 'open',	delay: 0.2 },			// me
			{	nextState: 'halfway',	delay: 0.4 },		// wall
			{	nextState: 'open',	delay: 0.2 },			// ab
			{	nextState: 'halfway',	delay: 0.4 },		// ies
			{	nextState: 'open',	delay: 0.6 },			// feed
			{	nextState: 'halfway',	delay: 0.4 },		// mate
			{	nextState: 'open',	delay: 0.2 },			// -
			{	nextState: 'halfway',	delay: 0.4 },		// watch
			{	nextState: 'open',	delay: 0.2 },			// me
			{	nextState: 'halfway',	delay: 0.4 },		// wall
			{	nextState: 'open',	delay: 0.2 },			// ab
			{	nextState: 'halfway',	delay: 0.4 },		// ies
			{	nextState: '',	delay: 0.6 },					// feed
			{	nextState: 'halfway',	delay: 0.9 },		// mate
			{	nextState: 'open',	delay: 0.2 },			// me
			{	nextState: 'halfway',	delay: 0.4 },		// kan
			{	nextState: 'open',	delay: 0.2 },			// ga
			{	nextState: 'halfway',	delay: 0.4 },		// roo
			{	nextState: 'open',	delay: 0.6 },			// down
			{	nextState: 'halfway',	delay: 0.4 },		// sport
			{	nextState: 'open',	delay: 0.2 },			// -
			{	nextState: 'halfway',	delay: 0.4 },		// tie
			{	nextState: 'open',	delay: 0.2 },			// me
			{	nextState: 'halfway',	delay: 0.4 },		// kan
			{	nextState: 'open',	delay: 0.2 },			// ga
			{	nextState: 'halfway',	delay: 0.4 },		// roo
			{	nextState: '',	delay: 0.6 },
			{	end: true }
		];
		var runningTimer = 0;
		playingOrder.forEach(element=>{
			if (element.end) {
				return setTimeout(
					() => loop(0), 
					runningTimer
				);
			}
			runningTimer += element.delay*1000;
			setTimeout(()=>{
				head.classList.remove('open', 'halfway');
				if (!!element.nextState) head.classList.add(element.nextState);
			},runningTimer);
		});
	}

	const loop = (runningTimer) => {
		if (kangaroo.paused) {
			kangaroo.loop = true;
			kangaroo.play();	
		}
		const loopOrder = [
			{	nextState: 'halfway',	delay: 0.5 },		// mate
			{	nextState: 'open',	delay: 0.2 },			// me
			{	nextState: 'halfway',	delay: 0.4 },		// kan
			{	nextState: 'open',	delay: 0.2 },			// ga
			{	nextState: 'halfway',	delay: 0.4 },		// roo
			{	nextState: 'open',	delay: 0.6 },			// down
			{	nextState: 'halfway',	delay: 0.4 },		// sport
			{	nextState: 'open',	delay: 0.2 },			// -
			{	nextState: 'halfway',	delay: 0.4 },		// tie
			{	nextState: 'open',	delay: 0.2 },			// me
			{	nextState: 'halfway',	delay: 0.4 },		// kan
			{	nextState: 'open',	delay: 0.2 },			// ga
			{	nextState: 'halfway',	delay: 0.4 },		// roo
			{	nextState: '',	delay: 0.4 },
			{ end: true }
		]
		loopOrder.forEach(element=>{
			if (element.end) {
				return setTimeout(
					() => loop(0), 
					runningTimer
				);
			}
			runningTimer += element.delay*1000;
			setTimeout(()=>{
				head.classList.remove('open', 'halfway');
				if (!!element.nextState) head.classList.add(element.nextState);
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

	const resize = () => {
		body.style.height = window.innerHeight + 'px';
		body.style.width = window.innerWidth + 'px';
	}
	window.onresize = resize;	
	resize();
