const menu = document.getElementById("menu");
const list = document.querySelector(".list");
const dropdown = document.querySelector(".dropdown");

function displaylist(){
	if(list.style.display == "block"){
		list.style.display = "none"; 
		dropdown.style.display = "none"; 
	}else{
		list.style.display = "block";
		dropdown.style.display = "block";  
	}
}