
// Get the reference of all the input fields so that its value can be extracted and event listeners can be set up.
const textTopHandle = document.getElementById('idTextTop')
const colorFillHandle = document.getElementById('idColorFill')
const colorFillTextHandle = document.getElementById('idColorFillText')
const textBottomHandle = document.getElementById('idTextBottom')
const colorOutlineHandle = document.getElementById('idColorOutline')
const colorOutlineTextHandle = document.getElementById('idColorOutlineText')


function getFormData(event) {
	event.preventDefault()
	console.log('idTextTop', textTopHandle.value)
	console.log('idColorFill', colorFillHandle.value)
	console.log('idTextBottom', textBottomHandle.value)
	console.log('idColorOutline', colorOutlineHandle.value)
}



/*
** Add the event listeners on the color picker and color input text field.
*/
colorFillHandle.addEventListener('change', () => {
	// Get the value of color picker and set the value inside the input tag.
	colorFillTextHandle.value = colorFillHandle.value
})

colorFillTextHandle.addEventListener('change', () => {
	// Get the value of color text input by user and set it on color picker.
	// Do validations to check the input color format is correct. It does not accept short hand like #FFF.
	// If correct format is not provided then use white color.

	if (/^#[0-9A-F]{6}$/i.test(colorFillTextHandle.value)) {
		colorFillHandle.value = colorFillTextHandle.value
	}
	else {
		alert('Please enter correct HEX format like "#10BF53"')
		colorFillHandle.value = '#FFFFFF'
	}
})

colorOutlineHandle.addEventListener('change', () => {
	// Get the value of color picker and set the value inside the input tag.
	colorOutlineTextHandle.value = colorOutlineHandle.value
})

colorOutlineTextHandle.addEventListener('change', () => {
	// Get the value of color text input by user and set it on color picker.
	// Do validations to check the input color format is correct. It does not accept short hand like #FFF.
	// If correct format is not provided then use white color.

	if (/^#[0-9A-F]{6}$/i.test(colorOutlineTextHandle.value)) {
		colorOutlineHandle.value = colorOutlineTextHandle.value
	}
	else {
		alert('Please enter correct HEX format like "#10BF53"')
		colorOutlineHandle.value = '#FFFFFF'
	}
})