function rand_bitmoji() {
	bit_id = Math.floor(Math.random()*5+2);
	document.getElementById("about-picture").innerHTML = '<img src="imgs/bitmojis/bitmoji' + bit_id + '.png">'
	//document.getElementById("bitmoji").innerHTML += '<img align="right" src=imgs/bitmojis/bitmoji' + bit_id + '.png style="float: left">'
}
window.onload = rand_bitmoji;