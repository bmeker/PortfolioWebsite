function sendEmail(){
  Email.send({
    SecureToken : "d5839b7a-62bd-465e-8339-a70099b79cc4",
    To : 'Bahadir47Eker@gmail.com',
    From : 'portfolio.contact.me.mail@gmail.com',
    Subject : document.getElementById("subject").value,
    Body : "Name : " + document.getElementById("fname").value
      + "<br> Email : " + document.getElementById("email").value
      + "<br> Betreff : " + document.getElementById("reference").value
  }).then(
  );
}

document.addEventListener("DOMContentLoaded", function() {

    var btnIds = ["contact","github","project","resume","knowledge","about_me"];
    var txtIds = ["contact_text","github_text","project_text","resume_text","knowledge_text","about_me_text"];
    var colorDegree = ["290deg","230deg","180deg","140deg","80deg","0deg"];

    for (var i = 0; i < btnIds.length; i++) {
      (function(i){
  
        var colorDeg = colorDegree[i];
        var btn = document.getElementById(btnIds[i]);
        var txt = document.getElementById(txtIds[i]);

        btn.dataset.clicked = 'false'; // set data-clicked default to false

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
          btnIds.forEach(function(btnId, i) { // if other Button is Clicked true make other Buttons False
            var _btn = document.getElementById(btnId);
            document.getElementById(txtIds[i]).style.backgroundPosition = '100% 0%';
            _btn.style.marginLeft = '0px';
            _btn.dataset.clicked = false;
          });
          btn.dataset.clicked = 'true';
          txt.style.backgroundPosition = "0% 0%";
          btnHoverTransition(txt,btn,30);
          })
        });

        btn.addEventListener('click',function(){
          for(var b = 0; b < btnIds.length; b++){
            // console.log('btnIds : ' + btnIds[b]);
            // console.log('btn : ' + btn.id);

            // if(btn.id == btnIds[b]){
            //   ContentSelector(btn,btnIds);
            // }

            ContentSelector(btn,btnIds);
          }
        });


      })(i);
    }
    // Contact Form Submit Button Listener
    document.querySelector("form").addEventListener('submit', function(event){
      sendEmail();
      restart();
      return false;
    });
  });

  var content = ['content_contact','content_github','content_project','content_resume','content_knowledge','content_aboutme'];

  // Content Selector that Hides or Shows Content
  function ContentSelector(btn,btnIds){
    var aboutme = document.getElementById(content[5]);
    // var knowledge = document.getElementById(content[4]);
    // var resume = document.getElementById(content[3]);
    // var project = document.getElementById(content[2]);
    // var github = document.getElementById(content[1]);
    var contact = document.getElementById(content[0]);

    hideAllContent(aboutme,contact);

    if(btn.id == 'about_me'){
      aboutme.style.visibility = 'visible';
    }
    // if(btn.id == 'knowledge'){
    //   knowledge.style.visibility = 'visible';
    // }
    // if(btn.id == 'resume'){
    //   resume.style.visibility = 'visible';
    // }
    // if(btn.id == 'project'){
    //   project.style.visibility = 'visible';
    // }
    // if(btn.id == 'github'){
    //   github.style.visibility = 'visible';
    // }
    if(btn.id == 'contact'){
      contact.style.visibility = 'visible';
    }
  }

  function hideAllContent(aboutme,contact){
    aboutme.style.visibility = 'hidden';
    // knowledge.style.visibility = 'hidden';
    // resume.style.visibility = 'hidden';
    // project.style.visibility = 'hidden';
    // github.style.visibility = 'hidden';
    contact.style.visibility = 'hidden';
  }

  function btnHoverTransition(txt, btn, mleft){
    btn.style.marginLeft = mleft + 'px';
    txt.style.transition = '0.5s';
    btn.style.transition = '0.5s';
  }

  // function openContact() {
  //   document.getElementById('contact_container').style.animation = 'openContactForm 1s forwards';
  // }

  // function closeContact() {
  //   document.getElementById('contact_container').style.animation = 'closeContactForm 1s forwards';
  // }


  // function openContactAnim() { // Opening Contact Form
  //   document.getElementById('center').style.animation = 'enableBackdropBlur 1s forwards';
  //   document.getElementById('contact_container').style.animation = 'openContactForm 1s forwards'; // 2s = duration
  // }
  // function closeContactAnim(){ // Closing Contact Form
  //   document.getElementById('center').style.animation = 'disableBackdropBlur 1s forwards';
  //   document.getElementById('contact_container').style.animation = 'closeContactForm 1s forwards'; // 2s = duration
  // }
  
  