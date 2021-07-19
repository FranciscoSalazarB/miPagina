window.addEventListener('load',function(){
	
	let paralax = document.getElementById('parallax');
	let navBar = document.getElementsByTagName('nav')[0];
	let principalText = document.getElementsByTagName('h1')[0];
	
	window.addEventListener('scroll',function () {
		paralax.style.backgroundPositionY = "-"+(window.scrollY)*0.5+"px";
		principalText.style.color = "rgba(255,255,255,"+2/(1+0.00001*Math.pow(window.scrollY,3))+")";
		
	})
});
