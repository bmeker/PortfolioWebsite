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