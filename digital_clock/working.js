clock();

function clock(){
var time; 
var day;
const timeSection=document.getElementById("time");
const daySection=document.getElementById("day");
const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
var d = new Date();
var curhour = d.getHours();
var curmin = d.getMinutes();
var cursec = d.getSeconds();
day = week[d.getDay()];
time = curhour + " : " +curmin+ " : " + cursec;
daySection.innerHTML = day;
timeSection.innerHTML = time;
}
setInterval(clock,1000);
