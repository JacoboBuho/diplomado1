function rep(imagen,sonido)
{
	$("#" + imagen).fadeIn(250);
    document.getElementById(sonido).play();

}
function pause(imagen,sonido)
{
	$("#" + imagen).fadeOut(100);
    document.getElementById(sonido).pause();
}