document.addEventListener("DOMContentLoaded", function() {

  // var imgArray = ["images/meC.png","images/meG.png","images/meP.png","images/meR.png","images/meK.png","images/meA.png"];
  var btnIds = ["btnC","btnG","btnP","btnR","btnK","btnA"];
  var colorNames = ["chartreuse","khaki","indianred","cyan","sienna","lightskyblue"]
  // var container = document.getElementById("imageContainer");
  const btnLeft = btnIds.slice(0, 3); // Used in Comment "Font Gradient Transition"

  for (var i = 0; i < btnIds.length; i++) {
    (function(i){

      // var img = document.createElement("img");
      // img.style.position = "fixed";
      var color = colorNames[i];
      var btn = document.getElementById(btnIds[i]);
      // img.src = imgArray[i];
      // container.appendChild(img);

      btn.addEventListener("mouseover", function(){

        // var imgElements = Array.from(document.querySelectorAll("#imageContainer img"));
        // imgElements.forEach(function(element) { // Hide all Pictures
        //   element.style.visibility = "hidden";
        // })

        // img.style.visibility = "visible"; // Show One Picture
        
        // Font Gradient Transition
        btn.style.backgroundPosition = btnLeft.includes(btn.id) ? "100% 0%" : "0% 0%";
      });

      btn.addEventListener("mouseout", function(){

        // Font Gradient Transition
        btn.style.backgroundPosition = btnLeft.includes(btn.id) ? "0% 0%" : "100% 0%"
      });

    })(i);
  }
});

