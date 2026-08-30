// Registration Form

document.getElementById("registrationForm").addEventListener("submit", function(event) {

  event.preventDefault();

  // Get form values
  let name = document.getElementById("name").value;
  let whatsapp = document.getElementById("whatsapp").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let course = document.getElementById("course").value;
  let message = document.getElementById("message").value;

  // Check required fields
  if (name === "" || whatsapp === "" || email === "" || city === "Select your city" || course === "Select your course") {
    alert("Please fill all required fields.");
    return;
  }

  // Your WhatsApp number
  // Pakistan number: 03xx... ko 923xx... likhna hai
  let myWhatsApp = "923172613780";

  // Create WhatsApp message
  let text =
    "Assalam o Alaikum!%0A%0A" +
    "*SpeakUp English - New Registration*%0A%0A" +
    "*Name:* " + name + "%0A" +
    "*WhatsApp Number:* " + whatsapp + "%0A" +
    "*Email:* " + email + "%0A" +
    "*City:* " + city + "%0A" +
    "*Course:* " + course + "%0A" +
    "*Message:* " + message + "%0A%0A" +
    "I want to register for the English Language Course.";

  // Open WhatsApp
  let whatsappURL = "https://wa.me/" + myWhatsApp + "?text=" + text;

  window.open(whatsappURL, "_blank");

});
