document.addEventListener("DOMContentLoaded", function () {
  var contactsDiv = document.querySelector(".contacts");
  var contactsKey = "contacts";
  var selectedContactKey = "selectedContact";

  //retrieve contacts from localStorage
  var contactsInStorage = localStorage.getItem(contactsKey);
  //if contactsInStorage is null, use an empty array to avoid errors
  contactsInStorage = contactsInStorage ? JSON.parse(contactsInStorage) : [];

  for (let i = 0; i < contactsInStorage.length; i++) {
    var currentContact = contactsInStorage[i];

    // create an html  element to contain contact information
    var contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    var name = document.createElement("h3");
    var contactInfo = document.createElement("div");
    contactInfo.className = "contact-info";
    var avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = "/user.png";
    name.innerHTML = "Name: " + currentContact.name;
    var phone = document.createElement("p");
    phone.innerHTML = "Phone: " + currentContact.phone;
    var email = document.createElement("p");
    email.innerHTML = "Email:  " + currentContact.email;
    contactInfo.append(name, phone, email);
    contactDiv.append(avatar, contactInfo);
    //adding an event listener to save the index of the selected contact before redirecting
    contactDiv.addEventListener("click", function () {
      localStorage.setItem(selectedContactKey, i);
      window.location.href = "./details/details.html";
    });
    contactsDiv.appendChild(contactDiv);
  }
});
