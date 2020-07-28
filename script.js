
/*var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("p1").innerHTML = date;
document.getElementById("p2").innerHTML = time;*/


var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var time = today.getHours() + ":"+ today.getMinutes() + ":" +today.getSeconds();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var time = today.getHours() + ":"+ today.getMinutes() + ":" +today.getSeconds();
var dateTime = date+' '+time;

document.getElementById("p1").innerHTML = Date();
/*document.getElementById("p2").innerHTML = current();*/








function validateForm1()
 {
  var x = document.forms["myForm1"]["fname"].value;
  var y = document.forms["myForm1"]["lname"].value;
  if (x == "" && y == "")
  {
    alert("first name and last name must be filled out");
    return false;
  } 
  
     document.write("your first name is:"+" "+ x. fontsize(10)+"and the number of alphabets are:"+" "+ x.length+" ");
     
    document.write("your last name is:"+" "+ y.fontsize(10) +" "+"and the number of alphabets are:"+" "+y.length);
    
    document.write("the concatention of first name and last name is: "+" "+ x.fontsize(10) +" "+ y. fontsize(10));


  }


/*function validateForm2() {
  var y = document.forms["myForm2"]["lname"].value;
  if (y == "") {
    alert("last Name must be filled out");
    return false;
  } else
    document.write(y);
  }
z = (x.length) + (y. length);
document.write(z);*/



  function email_function() {
    var email = document.forms["emailform"]["email"].value;
    if (email == "") {
      alert("Insert your Email");
      return false;
    }
  }

  /*function email_funnction() {
    var email = document.emailform.email.value;
    if(email.indexOf('@')<=0){
        document.getElementById('errormsg').innerHTML="Invalid your Email Address";
        return false;
    }     
    if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
        document.getElementById('errormsg').innerHTML="Invalid your Email Address";
        return false;
    }*/



 // Function to change webpage background color
 function changeBodyBg(color){
    document.body.style.background = color;
}


function changeHeadingBg(color){
    document.getElementById("heading").style.background = color;
}
