function rand_bitmoji() {
	bit_id = Math.floor(Math.random()*6);
	document.getElementById("bitmoji").innerHTML = "<img src=/imgs/bitmojis/bitmoji" + bit_id;
}
window.onload = rand_bitmoji;