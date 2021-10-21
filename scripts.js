document.addEventListener('DOMContentLoaded', function() {

    var display = document.getElementsByClassName("message");
    var button = document.querySelector("form > button");
   
   

    button.onclick = function(de) {
        email = document.querySelector("input").value;
        if(email.includes("@") && email.includes(".")) {
            display[0].textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
            event.preventDefault();
        } else {
            display[0].textContent = "Please enter a valid email address.";
            de.preventDefault();
        }
    };
})/* Add your JavaScript to this file */