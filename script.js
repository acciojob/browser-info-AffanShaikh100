//your JS code here. If required.
function hellocode()
{
let divelement = document.getElementById("browser-info");
	console.log(divelement);
// document.body.appendChild(divelement);
let ptag = document. createElement("p");
// let a = navigator.userAgent;
ptag.innerText = "You are using " + navigator.appName +" "+"version" + navigator.appVersion
divelement.appendChild(ptag);
	// alert("dgvsfdgbfdsbfdsb")
}
