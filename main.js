
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function slider(){
  var y=document.getElementById("first")
  var y1=document.getElementById("tow")
  if(y1.style.display === "block"){
    // y1.style.opacity= 0 
    y1.style.display = "none"
    y.style.display = "block"
  }
  else if(y1.style.display === "none"){
    // y.style.opacity= 0 
    y.style.display ="none"
    y1.style.display ="block"
  }
  else{
    y.style.display ="none"
    y1.style.display ="block"
  }
}
setInterval(slider , 4000);