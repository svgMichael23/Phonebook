document.addEventListener("DOMContentLoaded", function () {
  var contactsKey = "contacts";
  var selectedContactKey = "selectedContact";
  //get the selected contact from localStorage
  var selectedContactId = localStorage.getItem(selectedContactKey);

  if (!selectedContactId) {
    //if there is no selected id the display alert and redirect to home
    alert(
      "No contact was selected to be displayed. You will be redirected now"
    );
    window.location.href = "../index.html";
  }

  var form = document.querySelector("form");
  var nameInput = document.getElementById("full-name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");

  var contactsInStorage = JSON.parse(localStorage.getItem(contactsKey));
  var contact = contactsInStorage[parseInt(selectedContactId)];

  //display the contact information in the form
  nameInput.value = contact.name;
  emailInput.value = contact.email;
  phoneInput.value = contact.phone;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var contact = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    };
    var contactsInStorage = JSON.parse(localStorage.getItem(contactsKey));
    //replace the updated contact in the list and store
    contactsInStorage.splice(parseInt(selectedContactId), 1, contact);
    localStorage.setItem(contactsKey, JSON.stringify(contactsInStorage));
    alert("Contact was updated. You will be redirected now");
    window.history.back(); //go back to details page
  });
});
