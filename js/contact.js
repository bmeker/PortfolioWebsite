function sendEmail(){
    Email.send({
        SecureToken : "451c2d83-0b1b-4129-8ca9-a32b3da7e1ab",
        To : document.getElementById("email").value,
        From : 'Bahadir47Eker@gmail.com',
        Subject : document.getElementById("subject").value,
        Body : "Name : " + document.getElementById("fname").value
            + "<br> Email : " + document.getElementById("email").value
            + "<br> Betreff : " + document.getElementById("reference").value
    }).then(
    message => alert(message)
    );
}