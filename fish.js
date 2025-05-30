function cambia ()
{
	imagen=document.getElementById("P4");
	if (imagen.src.match("pezz")) 
	{
		imagen.src="P44.jpg";
	}
	else
	{
		imagen.src="pezz.jpg";
	}
}
