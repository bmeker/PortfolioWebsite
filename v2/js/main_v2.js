document.addEventListener("DOMContentLoaded", function() {

    var btnIds = ["contact","github","project","resume","knowledge","about_me"];
    var txtIds = ["contact_text","github_text","project_text","resume_text","knowledge_text","about_me_text"];
    var colorDegree = ["290deg","230deg","180deg","140deg","80deg","0deg"];

    // let isClicked = false;

    for (var i = 0; i < btnIds.length; i++) {
      (function(i){
  
        var colorDeg = colorDegree[i];
        var btn = document.getElementById(btnIds[i]);
        var txt = document.getElementById(txtIds[i]);
  
        // var _btn = null; // old Button Id Holder
        // var _txt = null; // old txt Id Holder

        btn.dataset.clicked = 'false';

        btn.addEventListener("mouseover", function(){ // Mouse Hover
          document.documentElement.style.setProperty("--hue-deg", colorDeg);
          txt.style.backgroundPosition = "0% 0%";
          btnHoverTransition(txt,btn,30);
        });

        btn.addEventListener("mouseout", function(){ // Mouse Out
          if(btn.dataset.clicked == 'false'){
            txt.style.backgroundPosition = "100% 0%";
            btnHoverTransition(txt,btn,0);
          }

        btn.addEventListener('click', function(){ // Mouse Click
          
          btnIds.forEach(function(btnId, i) {
            var _btn = document.getElementById(btnId);
            var _txt = document.getElementById(txtIds[i]);
            _btn.style.marginLeft = '0px';
            _txt.style.backgroundPosition = "100% 0%";
            _btn.dataset.clicked = false;
          });

          btn.dataset.clicked = 'true';

          txt.style.backgroundPosition = "0% 0%";
          btnHoverTransition(txt,btn,30);


          // for(var a = 0; a < btnIds.length; a++){
          //   var modBtn = otherBtnClickedFalse(btnIds,i);
          //   // console.log(modBtn[a]);
          //   // btnIds[modBtn[a]].dataset.clicked = false;
          // }

        })

        });
  
      })(i);
    }

  });

  // function otherBtnClickedFalse(btnIds,i){
  //   var test = btnIds.filter((value) => value !== i);
  //   console.log(test);
  // }

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
  
  