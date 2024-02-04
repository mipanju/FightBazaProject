function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alexandru.teodor.at@gmail.com",
        Password : "4C0E16886E7CCBFE77AFE44A6AAEA9AF621C",
        To : 'alexandru.teodor.at@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}