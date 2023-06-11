function seeMore() {
  var basic = document.getElementById("basic");
  var more = document.getElementById("plusSection");
  var btnText = document.getElementById("myBtn");

  if (more.style.display === "inline") {
    more.style.display = "none";
    btnText.innerHTML = "Read More";
    document.getElementById("basic").scrollIntoView({behavior: 'smooth'});

  } 
  else {
   
    btnText.innerHTML = "Read less";
    more.style.display = "inline";
    document.getElementById("plusSection").scrollIntoView({behavior: 'smooth'});
  }
}
