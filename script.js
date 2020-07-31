


/*Javascript function to show current date and time in interval of seconds*/


function showTime()
 {
  var d = new Date();  
  
  document.getElementById("p1").innerHTML = d.toLocaleDateString();
  document.getElementById("p2").innerHTML = d.toLocaleTimeString();  
}
setInterval(showTime, 1000);



/* Validation of form in contact4.html*/



  function validate()
   {
      
    if( document.myForm.Name.value == "" ) 
    {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }

  var emailID = document.myForm.EMail.value;
  x = emailID.indexOf("@");
  y = emailID.lastIndexOf(".");
  
  if (x < 1 || ( y - x < 2 ))
   {
     alert("Please enter correct email ID")
     document.myForm.EMail.focus() ;
     return false;
  }
  
 

    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
       document.myForm.Zip.value.length != 5 ) 
       {
       
       alert( "Please provide a zip in the format #####." );
       document.myForm.Zip.focus() ;
       return false;
    }
    if( document.myForm.Country.value == "-1" )
     {
       alert( "Please provide your country!" );
       return false;
    }
    return( true );
 
  }
 


/*validation of user can't leave blank

  function email_function() {
    var email = document.forms["myform"]["Email"].value;
    if (email == "") {
      alert("Insert your Email");
      return false;
    }
  }*/

    

 // Function to change webpage background color
 function changeBodyBg(color){
    document.body.style.background = color;
}


function changeHeadingBg(color)
{
    document.getElementById("heading").style.background = color;
}
  