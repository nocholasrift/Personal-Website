function rand_bitmoji() {
	bit_id = Math.floor(Math.random()*5+2);
	document.getElementById("about-blurb").innerHTML += '<img align="right" src=imgs/bitmojis/bitmoji' + bit_id + '.png style="float: left">'
	//document.getElementById("bitmoji").innerHTML += '<img align="right" src=imgs/bitmojis/bitmoji' + bit_id + '.png style="float: left">'
}
window.onload = rand_bitmoji;