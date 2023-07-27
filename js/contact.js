function sendEmail(){
    Email.send({
        SecureToken : "cac3bb45-ec2b-44d5-afd8-63cd83d519c4",
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


    // close.addEventListener('mouseover',function(){
    //     close.style.color = 'red';
    //     close.style.borderColor = 'red';
    //     container.style.borderColor = 'red';
    // });

    // submit.addEventListener('mouseover',function(){
    //     close.style.color = 'green';
    //     close.style.borderColor = 'green';
    //     container.style.borderColor = 'green';
    // });


});