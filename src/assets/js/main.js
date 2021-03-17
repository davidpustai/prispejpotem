const onDOMContentLoaded = () => {
};

document.readyState !== 'loading' ?
	onDOMContentLoaded.call()
	: document.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);
