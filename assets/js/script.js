  var acc = document.getElementsByClassName("newproduct");
  var j;
  
  for (j = 0; j < acc.length; j++) {
    acc[j].addEventListener("click", function() {
      this.classList.toggle("active");
      var cont = this.nextElementSibling;
      if (cont.style.display === "block") {
        cont.style.display = "none";
      } else {
        cont.style.display = "block";
      }
    });
  }

  var red = document.getElementsByClassName("redlist");
var i;

for (i = 0; i < red.length; i++) {
  red[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var cont1 = this.nextElementSibling;
    if (cont1.style.display === "block") {
      cont1.style.display = "none";
    } else {
      cont1.style.display = "block";
    }
  });
}