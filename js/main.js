function sendEmail(){ // smtpJs
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

document.addEventListener("DOMContentLoaded", function() { // Execute after HTML is Fully Loaded

  var btnIds = ["contact","project","resume","knowledge","aboutme"]; // Ids of Buttons
  var txtIds = ["contact_text","project_text","resume_text","knowledge_text","aboutme_text"]; // Ids of Button Text
  var colorDegree = ["290deg","180deg","140deg","80deg","0deg"]; // Value of Hue Deg for every Button

  var contentIds = { // Button Content Array
  contact : document.getElementById('content_contact'),
  project : document.getElementById('content_project'),
  resume : document.getElementById('content_resume'),
  knowledge : document.getElementById('content_knowledge'),
  aboutme : document.getElementById('content_aboutme')};

  function contentSelector(btn){ // Select Content on Button Click
  var contentToShow = contentIds[btn.id];
    for (var key in contentIds){ // Hide All Content
      if ( window.getComputedStyle(contentIds[key]).getPropertyValue('opacity') === '1') // Check if Content has Opacity of 1
      {
        contentIds[key].style.animation = 'FadeOut 0.5s forwards';
        contentIds[key].style.zIndex = '0';
      }
    }
    if(contentToShow){
      contentToShow.style.animation = 'FadeIn 0.5s forwards';
      contentToShow.style.zIndex = '1';
    }
  }

    for (var i = 0; i < btnIds.length; i++) {
      (function(i){
        var colorDeg = colorDegree[i];  // Set Hue Deg to a Var
        var btn = document.getElementById(btnIds[i]); // Set Menu Buttons
        var txt = document.getElementById(txtIds[i]); // Set Menu Text

        btn.addEventListener("mouseover", function(){ // Mouse Hover
          document.documentElement.style.setProperty("--hue-deg", colorDeg); // Change Hue deg for the wanted Button
          txt.style.backgroundPosition = "0% 0%"; // Change background Position for Text (Color Change Animation)
          btnHoverTransition(txt,btn,50); // Color Change Transition
        });

        btn.addEventListener("mouseout", function() // Mouse Out
        { 
          if(btn.dataset.clicked == 'false') // Check if a Button was Clicked before
            {
              txt.style.backgroundPosition = "100% 0%"; // Change background Position for Text (Color Change Animation)
              btnHoverTransition(txt,btn,0); // Color Change Transition
            }
        })

        btn.addEventListener('click', function() // Mouse Click
        {
          btnIds.forEach(function(btnId, index){ // All Buttons Clicked False
            var _btn = document.getElementById(btnId);
            var _txt = document.getElementById(txtIds[index]);
            _txt.style.backgroundPosition = '100% 0%'; // Change background Position for Text (Color Change Animation)
            _btn.style.marginLeft = '0px'; // Remove Margin
            _btn.dataset.clicked = 'false'; // Set Button Click to False
          })
          btn.dataset.clicked = 'true'; // Set Button Click to true
          txt.style.backgroundPosition = '0% 0%'; // Change background Position for Text (Color Change Animation)
          btnHoverTransition(txt,btn,50); // Color Change Transition
          contentSelector(btn); // Show and Hide different Content
        })

        if(btn.id == 'aboutme'){ // Have Button 'aboutme' active on first page
          document.documentElement.style.setProperty("--hue-deg", colorDeg); // Change Hue deg for the wanted Button
          txt.style.backgroundPosition = '0% 0%' // Change background Position for Text (Color Change Animation)
          btnHoverTransition(txt,btn,50); // Color Change Transition
          btn.dataset.clicked = 'true'; // Set button click to True
          contentSelector(btn);
        }
        
    })(i);
    };

  document.querySelector("form").addEventListener('submit', function(event){ // Button to Send Email
      sendEmail();
      restart();
      return false;
    });

});

function btnHoverTransition(txt, btn, mleft){ // Transition of Color Change ( Button / Text )
    btn.style.marginLeft = mleft + 'px';
    txt.style.transition = '0.5s';
    btn.style.transition = '0.5s';
  }

// Reset the contact form after submission
function restart(){
  var form = document.querySelector('form');
  if(form){
    form.reset();
  }
}
