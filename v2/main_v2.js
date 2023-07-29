document.addEventListener("DOMContentLoaded", function() {

    var btnIds = ["contact","github","project","resume","knowledge","about_me"];
    var txtIds = ["contact_text","github_text","project_text","resume_text","knowledge_text","about_me_text"];
    var colorDegree = ["290deg","230deg","180deg","140deg","80deg","0deg"];
  
    for (var i = 0; i < btnIds.length; i++) {
      (function(i){
  
        var colorDeg = colorDegree[i];
        var btn = document.getElementById(btnIds[i]);
        var txt = document.getElementById(txtIds[i]);
  
        btn.addEventListener("mouseover", function(){ // Mouse In Hover
          document.documentElement.style.setProperty("--hue-deg", colorDeg);
              txt.style.backgroundPosition = btn.style.backgroundPosition ? "100% 0%" : "0% 0%";
              btnHoverTransition(txt,btn,30);
        });
  
        btn.addEventListener("mouseout", function(){ // Mouse Out Hover
              txt.style.backgroundPosition = btn.style.backgroundPosition ? "0% 0%" : "100% 0%";
              btnHoverTransition(txt,btn,0);
        });
  
      })(i);
    }
  });
  
  function btnHoverTransition(txt, btn, mleft){
    btn.style.marginLeft = mleft + 'px';
    txt.style.transition = '0.5s';
    btn.style.transition = '0.5s';
  }

  // function openContactAnim() { // Opening Contact Form
  //   document.getElementById('center').style.animation = 'enableBackdropBlur 1s forwards';
  //   document.getElementById('contact_container').style.animation = 'openContactForm 1s forwards'; // 2s = duration
  // }
  // function closeContactAnim(){ // Closing Contact Form
  //   document.getElementById('center').style.animation = 'disableBackdropBlur 1s forwards';
  //   document.getElementById('contact_container').style.animation = 'closeContactForm 1s forwards'; // 2s = duration
  // }
  
  