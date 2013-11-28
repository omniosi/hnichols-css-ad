console.log("script attached");

document.getElementById("reveal").style.opacity = 0;

function hideshow(which){
	if (!document.getElementById)
		return
	if (which.style.opacity == 100) 
		which.style.opacity=0
	else
		which.style.opacity=100
	
}
