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
        btn.style.backgroundPosition = btnLeft.includes(btn.id) ? "0% 0%" : "100% 0%"; // Font Gradient Transition
      });

    })(i);
  }

  // Start  | Button Movement Animation
  let originalPositions = {}
  originalPositions = {
    "#btnA": $("#btnA").position(),
    "#btnK": $("#btnK").position(),
    "#btnR": $("#btnR").position(),
    "#btnP": $("#btnP").position(),
    "#btnG": $("#btnG").position(),
    "#btnC": $("#btnC").position(),
  }
  animateDiv("#btnA");
  animateDiv("#btnK");
  animateDiv("#btnR");
  animateDiv("#btnP");
  animateDiv("#btnG");
  animateDiv("#btnC");

  function makeNewPosition(){

    var h = 10 - 1;
    var w = 10 - 1;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
  } 

  function animateDiv(myclass){
      var newq = makeNewPosition();
      const newX = originalPositions[myclass].top - newq[0];
      const newY = originalPositions[myclass].left - newq[1];
      $(myclass).animate({ top: `${newX}`, left: `${newY}` }, 1000,   function(){
        animateDiv(myclass);        
      });
  };
  // End | Button Movement Animation
});


function openContactAnim() { // Opening Contact Form
  document.getElementById('center').style.animation = 'enableBackdropBlur 1s forwards';
  document.getElementById('contact_container').style.animation = 'openContactForm 1s forwards'; // 2s = duration
}
function closeContactAnim(){ // Closing Contact Form
  document.getElementById('center').style.animation = 'disableBackdropBlur 1s forwards';
  document.getElementById('contact_container').style.animation = 'closeContactForm 1s forwards'; // 2s = duration
}
