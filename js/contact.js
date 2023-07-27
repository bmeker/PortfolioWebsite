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
    message => alert(message)
    );
}

document.addEventListener("DOMContentLoaded", function() { 

    const buttonContainer = document.getElementById('button-container-two');

    var submit = document.getElementById('submit');
    var close = document.getElementById('close');
    var container = document.getElementById('contact_container')

    buttonContainer.addEventListener('mouseover', function(event){ // !hovering Contact Form Buttons
        const taget = event.target;

        if(taget.id == 'close'){ // Hovering Close Button
            ColorChange(taget.id,'red');
        }
        if (taget.id == 'submit'){ // Hovering Sumbit Button
            ColorChange(taget.id, 'green');
        }
    });

    buttonContainer.addEventListener('mouseout', function(event){ // !hovering Contact Form Buttons
        const taget = event.target;
        ColorChange(taget.id,'white');
    });

    function ColorChange(id,clr){
        var id = document.getElementById(id);
        id.style.color = clr;
        id.style.borderColor = clr;
        container.style.borderColor = clr;
    };
});