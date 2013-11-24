console.log("script attached");

document.getElementById("reveal").style.display = "none";

function hideshow(which){
	if (!document.getElementById)
		return
	if (which.style.display == "block") 
		which.style.display="none"
	else
		which.style.display="block"
	
}
