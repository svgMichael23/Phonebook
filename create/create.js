document.addEventListener("DOMContentLoaded", function () {
  var contactsKey = "contacts";

  var form = document.querySelector("form");

  var nameInput = document.getElementById("full-name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); //stop form from reloading the page
    var newContact = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    };

    var contactsInStorage = localStorage.getItem(contactsKey);
    if (contactsInStorage == undefined || contactsInStorage == null) {
      localStorage.setItem(contactsKey, JSON.stringify([newContact]));
    } else {
      contactsInStorage = JSON.parse(contactsInStorage);
      contactsInStorage.push(newContact);
      localStorage.setItem(contactsKey, JSON.stringify(contactsInStorage));
    }
    alert("Contact has been created. You will be redirected now");
    window.location.href = "../index.html";
  });
});
