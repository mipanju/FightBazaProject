


function sendMail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email_id").value;
  let message = document.getElementById("message").value;
  console.log(email);
  if (name.trim() === '' || message.trim() === '') {
      alert("Please fill out all required fields.");
      return;
  }

  emailjs.send("service_ugbwg11","template_t3wni9l",{from_name: name,email_id: email, message: message,})
      // .then(function(response) {
      //     console.log("Email sent successfully", response);
      //     alert("Email Sent!!");
      // }, 
      // function(error) {
      //     console.error("Email sending failed", error);
      //     alert("Failed to send email. Please try again later.");
      // });
      function Alert(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email_id").value;
        let message = document.getElementById("message").value;
        let alert_message = document.querySelector(".alert");
      
        if (name === '' || email === '' || message === ''){
          alert_message.innerHTML = `<span class="fas fa-exclamation-circle"></span>
                <span class="msg">Message was not sent. Please fill in all the spaces!</span>
                <div class="close-btn">
                  <span class="fas fa-times"></span>
                </div>`;
        } else {
                alert_message.innerHTML = `<span class="fas fa-check-circle"></span>
                <span class="msg">Message was succsesfully sent. Thank you!</span>
                <div class="close-btn">
                  <span class="fas fa-times"></span>
                </div>`;
                document.getElementById("name").value = '';
                  document.getElementById("email_id").value = '';
                  document.getElementById("message").value = '';
        }
      
        $('.alert').addClass("show");
        $('.alert').removeClass("hide");
        $('.alert').addClass("showAlert");
        setTimeout(function(){
          $('.alert').removeClass("show");
          $('.alert').addClass("hide");
        },5000);
      };

      Alert();
}


document.getElementById("contactForm").addEventListener("submit", sendMail);

// function Alert(){
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email_id").value;
//   let message = document.getElementById("message").value;
//   let alert_message = document.querySelector(".alert");

//   if (name === '' || email === '' || message === ''){
//     alert_message.innerHTML = `<span class="fas fa-exclamation-circle"></span>
//           <span class="msg">Message was not sent. Please fill in all the spaces!</span>
//           <div class="close-btn">
//             <span class="fas fa-times"></span>
//           </div>`;
//   } else {
//           alert_message.innerHTML = `<span class="fas fa-check-circle"></span>
//           <span class="msg">Message was succsesfully sent. Thank you!</span>
//           <div class="close-btn">
//             <span class="fas fa-times"></span>
//           </div>`;
//           document.getElementById("name").value = '';
//             document.getElementById("email_id").value = '';
//             document.getElementById("message").value = '';
//   }

//   $('.alert').addClass("show");
//   $('.alert').removeClass("hide");
//   $('.alert').addClass("showAlert");
//   setTimeout(function(){
//     $('.alert').removeClass("show");
//     $('.alert').addClass("hide");
//   },5000);
// };
function close(){
  $('.alert').removeClass("show");
  $('.alert').addClass("hide");
};