document.addEventListener("DOMContentLoaded", function() {

    var navIds = ["contact","github","project","resume","knowledge","about_me"];
    // var colorDegree = ["290deg","230deg","180deg","140deg","80deg","0deg"];
  
    for (var i = 0; i < btnIds.length; i++) {
      (function(i){
  
        // var colorDeg = colorDegree[i];
        var nav = document.getElementById(navIds[i]);
  
        // navIds.forEach(element => { // Button Position
        //   var pos = JSON.parse(nav.dataset.pos);
        //   btn.style.top = pos[0] + "vh";
        //   btn.style.left = pos[1] + "vh";
        // });
  
        nav.addEventListener("mouseover", function(){ // Mouse In Hover
        //   document.documentElement.style.setProperty("--hue-deg", colorDeg);
          nav.style.backgroundPosition ? "100% 0%" : "0% 0%";  // Font Gradient Transition
        });
  
        nav.addEventListener("mouseout", function(){ // Mouse Out Hover
          nav.style.backgroundPosition ? "0% 0%" : "100% 0%"; // Font Gradient Transition
        });
  
      })(i);
    }
  });
  
  
  function openContactAnim() { // Opening Contact Form
    document.getElementById('center').style.animation = 'enableBackdropBlur 1s forwards';
    document.getElementById('contact_container').style.animation = 'openContactForm 1s forwards'; // 2s = duration
  }
  function closeContactAnim(){ // Closing Contact Form
    document.getElementById('center').style.animation = 'disableBackdropBlur 1s forwards';
    document.getElementById('contact_container').style.animation = 'closeContactForm 1s forwards'; // 2s = duration
  }
  