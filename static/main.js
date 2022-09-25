function switchScheme(e) {
	console.log("hi2u")
	e.style.color = 'var(--secondary-text)';

	window.localStorage.setItem(
		'colorscheme',
		currentlyPrefersDark() ? 'light' : 'dark',
	);
		
	updateScheme();
	
	return e;
}

function currentlyPrefersDark() {
	const savedScheme = window.localStorage.getItem('colorscheme');

	if (savedScheme != null) {
		return savedScheme === 'dark';
	}

	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateScheme() {
	if (currentlyPrefersDark()) {
		document.body.classList.add('dark');
		document.body.classList.remove('light')
	} else {
		document.body.classList.add('light')
		document.body.classList.remove('dark');
	}
}

