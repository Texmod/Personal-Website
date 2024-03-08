// const container = document.querySelector(".container");
// const images = [];
// const navBar = document.getElementsByClassName("options");

// for (var i = navBar.length - 1; i >= 0; i--) {
// 	console.log(navBar[i]);

// 	navBar[i].addEventListener("click", function(){
// 		console.log(navBar[i].classList);
// 	});
// }

// for (var i = 9; i >= 1; i--) {
// 	images[i] = new Image();

// 	images[i].src = "gallery/"+i+".png";

// 	if(images[i].onerror){
// 		images[i].src = "gallery/"+i+".jpg";
// 	};
// 	container.append(images[i]);
// }

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