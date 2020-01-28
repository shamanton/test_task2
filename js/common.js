// let hamburger = document.getElementById('hamburger');
// hamburger.onclick = function() {
// 	hamburger.classList.toggle("hamburger_is-active");
// 	hamburger.classList.toggle("");
// 	console.log(elem.classList);
// };


$('.hamburge_btn').click(function () {
	$('.hamburger-line').toggleClass('hamburger_is-active');
	$('.hamburger_menu').slideToggle();
});
