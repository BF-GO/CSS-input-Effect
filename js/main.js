let box = document.querySelector('div');
input = document.querySelector('input');

input.addEventListener('input', () => {
	box.style.background = input.value;
});
function showHelp() {
	var helpText = document.getElementById('helpText');
	if (helpText.style.display === 'none') {
		helpText.style.display = 'block';
	} else {
		helpText.style.display = 'none';
	}
}
function handleFocus() {
	var input = document.getElementById('colorInput');
	if (input.value === '') {
		input.value = '#';
		setTimeout(() => {
			input.setSelectionRange(1, 1);
		}, 0);
	}
}
function handleBlur() {
	var input = document.getElementById('colorInput');
	if (input.value === '#') {
		input.value = '';
	}
}
function adjustBackground() {
	var input = document.getElementById('colorInput');
	var bg = document.getElementById('bgElement');
	if (input.value !== '') {
		bg.classList.add('active-bg');
	} else {
		bg.classList.remove('active-bg');
	}
}
