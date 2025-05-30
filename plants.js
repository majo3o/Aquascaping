function cambia ()
{
	imagen=document.getElementById("Pl1");
	if (imagen.src.match("pl11")) 
	{
		imagen.src="Pl1.jpg";
	}
	else
	{
		imagen.src="pl11.jpg";
	}
}
