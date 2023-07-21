document.addEventListener("DOMContentLoaded", function() {

   // Hides Images
   function hideImages(){
    meA.style.visibility = "hidden";
    meK.style.visibility = "hidden";
    meR.style.visibility = "hidden";
    meP.style.visibility = "hidden";
    meG.style.visibility = "hidden";
    meC.style.visibility = "hidden";
  }

  // Changes Color of Button and Line to White
  function whiteOut(li, btn){
    li.style.stroke = "white";
    btn.style.color = "white";
  }

  // Pictures
  var meA = document.querySelector("#meA");
  var meK = document.querySelector("#meK");
  var meP = document.querySelector("#meP");
  var meC = document.querySelector("#meC");
  var meG = document.querySelector("#meG");
  var meR = document.querySelector("#meR");

  // About Me
  const btn_am = document.querySelector(".aboutme");
  const line_am = document.querySelector("#line_aboutme");
  // Resume
  const btn_r = document.querySelector(".resume");
  const line_r = document.querySelector("#line_resume");
  // Knowledge
  const btn_k = document.querySelector(".knowledge");
  const line_k = document.querySelector("#line_knowledge");
  // Project
  const btn_p = document.querySelector(".project");
  const line_p = document.querySelector("#line_project");
  // Github
  const btn_g = document.querySelector(".github");
  const line_g = document.querySelector("#line_github");
  // Contact
  const btn_c = document.querySelector(".contact");
  const line_c = document.querySelector("#line_contact");

  // Button Storage
  var btn_storage = btn_am; // Default Button
  var line_storage = line_am; // Default Button

  // About Me
  btn_am.addEventListener("mouseover", function() {
    whiteOut(line_storage, btn_storage);
    btn_storage = btn_am;
    line_storage = line_am;

    line_am.style.stroke = btn_am.style.color = "lightskyblue";
    hideImages();
    meA.style.visibility = "visible";
  });

  // Knowledge
  btn_k.addEventListener("mouseover", function() {
    whiteOut(line_storage, btn_storage);
    btn_storage = btn_k;
    line_storage = line_k;

    line_k.style.stroke = btn_k.style.color = "sienna";
    hideImages();
    meK.style.visibility = "visible";
  });

  // Resume
  btn_r.addEventListener("mouseover", function() {
    whiteOut(line_storage, btn_storage);
    btn_storage = btn_r;
    line_storage = line_r;

    line_r.style.stroke = btn_r.style.color = "cyan";
    hideImages();
    meR.style.visibility = "visible";
  });
    
  // Projects
  btn_p.addEventListener("mouseover", function() {
    whiteOut(line_storage, btn_storage);
    btn_storage = btn_p;
    line_storage = line_p;

    line_p.style.stroke = btn_p.style.color = "indianred";
    hideImages();
    meP.style.visibility = "visible";
  });
    
  // Github
  btn_g.addEventListener("mouseover", function() {
    whiteOut(line_storage, btn_storage);
    btn_storage = btn_g;
    line_storage = line_g;

    line_g.style.stroke = btn_g.style.color = "khaki";
    hideImages();
    meG.style.visibility = "visible";
  });
    
  // Contact
  btn_c.addEventListener("mouseover", function() {
    whiteOut(line_storage, btn_storage);
    btn_storage = btn_c;
    line_storage = line_c;

    line_c.style.stroke = btn_c.style.color = "chartreuse";
    hideImages();
    meC.style.visibility = "visible";
  });    
});