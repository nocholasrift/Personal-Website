function rand_bitmoji() {
	bit_id = Math.floor(Math.random()*4+2);
	console.log(bit_id)
	document.getElementById("header-pictures").innerHTML += '<img src="img/bitmoji' + bit_id + '.png">'
	//document.getElementById("bitmoji").innerHTML += '<img align="right" src=imgs/bitmojis/bitmoji' + bit_id + '.png style="float: left">'
}
window.onload = rand_bitmoji;