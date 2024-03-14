function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

    emailjs.send("service_hicq2cx", "template_ysri3cw", params).then(alert("Email Sent!!"));

}

