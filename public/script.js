let handle_copied_slide = function (div) {
	if (div.style.visibility != "visible") {
		div.style.visibility = "visible"
		div.className = "slide-up"

		const on_time = 2000;
		const fade_time = 800;

		setTimeout(function () {
			div.className = "fade-out"

			setTimeout(function () {
				div.className = "slider";
				div.style.visibility = "hidden";
				div.opacity = 1;
			}, fade_time);

		}, on_time);
	}

}

window.onload = function () {
	let vals = document.getElementsByClassName("box");
	console.log(vals);
	for (let i = 0; i<vals.length; i++) {
		box = vals[i];

		let copied = box.getElementsByClassName("slider")[0];
		console.log(copied);
		let url_item = box.getElementsByTagName("p")[0];

		let url = url_item.innerText;

		url_item.onclick = function () {
			navigator.clipboard.writeText(url);
			handle_copied_slide(copied);
		}

		box.onclick = function (event) {

			let classes = event.target.classList;

			let flag = false;

			for (let i = 0; i<classes.length; i++) {
				if (classes[i] == "link") {
					flag = true;
					break;
				}
			}

			if (!flag) {
				window.location = url;
			}
		}
	}
}

