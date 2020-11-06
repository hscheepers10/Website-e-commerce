function validateForm() {
    var x = document.forms["nameForm"]["firstName"].value;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        return false;
    }
}