const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const comment = document.getElementById("comment");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const commentValue = comment.value;

    localStorage.setItem("first-name", firstNameValue);
    localStorage.setItem("last-name", lastNameValue);
    localStorage.setItem("comment", commentValue);
});