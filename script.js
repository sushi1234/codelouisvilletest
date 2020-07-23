
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("p1").innerHTML = date;
document.getElementById("p2").innerHTML = time;




/*var button = document.querySelector('button');
var body = document.querySelector('body');
var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground());

function changeBackground()
{
var colorIndex= parseInt(Math.random()*colors.length+1);
var colorIndex= parseInt(Math.random()*colors.length);
body.style.backgroundColor = colors[colorIndex];
}*/

 // Function to change webpage background color
 function changeBodyBg(color){
    document.body.style.background = color;
}

// Function to change heading background color
function changeHeadingBg(color){
    document.getElementById("heading").style.background = color;
}
