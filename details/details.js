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
  var nameElem = document.querySelector(".name");
  var emailElem = document.querySelector(".email");
  var phoneElem = document.querySelector(".phone");

  var deleteBtn = document.getElementById("delete-btn");
  var editBtn = document.getElementById("edit-btn");

  var contactsInStorage = JSON.parse(localStorage.getItem(contactsKey));
  var contact = contactsInStorage[parseInt(selectedContactId)];

  nameElem.innerHTML += "Name: " + contact.name;
  emailElem.innerHTML += "Email: " + contact.email;
  phoneElem.innerHTML += "Phone Number: " + contact.phone;

  //add delete functionality to the delete button ussing onclick event listener
  deleteBtn.addEventListener("click", function () {
    var contactsInStorage = JSON.parse(localStorage.getItem(contactsKey));
    contactsInStorage.splice(parseInt(selectedContactId), 1);
    localStorage.setItem(contactsKey, JSON.stringify(contactsInStorage));
    alert("Contact was deleted. You will be redirected now");
    window.location.href = "../index.html";
  });

  //adding an event listener to save the index of the selected contact before redirecting
  editBtn.addEventListener("click", function () {
    localStorage.setItem(selectedContactKey, selectedContactId);
    window.location.href = "../edit/edit.html";
  });
});
