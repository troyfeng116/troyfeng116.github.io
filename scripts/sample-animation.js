gsap.to("#testContainer", {
	duration: 1, 
	rotation: 360,
	ease: "none",
	repeat:-1
});

const centerColors = [
	"rgb(0,120,255)",
	"rgb(0,0,255)",
	"rgb(120,0,255)",
	"rgb(255,0,255)",
	"rgb(255,0,120)",
	"rgb(255,0,0)",
	"rgb(255,120,0)",
	"rgb(255,255,0)",
	"rgb(120,255,0)",
	"rgb(0,255,0)",
	"rgb(0,255,120)",
	"rgb(0,255,255)"];
const centerTL = gsap.timeline({
	repeat:-1,
	repeatRefresh:true
});
centerColors.forEach((c) => {
	centerTL.to("#centerMenu", {
		color:c,
		duration:1
	});
});