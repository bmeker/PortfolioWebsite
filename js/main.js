document.addEventListener("DOMContentLoaded", function() {

  var btnIds = ["btnC","btnG","btnP","btnR","btnK","btnA"];
  var colorDegree = ["290deg","230deg","180deg","140deg","80deg","0deg"];
  const btnLeft = btnIds.slice(0, 3); // Used in Comment "Font Gradient Transition"


  for (var i = 0; i < btnIds.length; i++) {
    (function(i){

      var colorDeg = colorDegree[i];
      var btn = document.getElementById(btnIds[i]);

      btnIds.forEach(element => { // Button Position
        var pos = JSON.parse(btn.dataset.pos);
        btn.style.top = pos[0] + "vh";
        btn.style.left = pos[1] + "vh";
      });

      btn.addEventListener("mouseover", function(){ // Mouse In Hover
        document.documentElement.style.setProperty("--hue-deg", colorDeg);  // Change Color of Shirt
        btn.style.backgroundPosition = btnLeft.includes(btn.id) ? "100% 0%" : "0% 0%";  // Font Gradient Transition
      });

      btn.addEventListener("mouseout", function(){ // Mouse Out Hover
        btn.style.backgroundPosition = btnLeft.includes(btn.id) ? "0% 0%" : "100% 0%" // Font Gradient Transition
      });

    })(i);
  }
});

