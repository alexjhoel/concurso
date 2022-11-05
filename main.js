function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com:2525",
        Username : "alexanderalmeida20@gmail.com",
        Password : "2EFBA335B78914030A6A5C476E058A5C1FAB6",
        To : "alexjhoel7@hotmail.com",
        From : "alexanderalmeida20@gmail.com",
        Subject : "Test email",
        Body : document.getElementById("name").innerHTML
    }).then(
      message => alert(message)
    );
    }