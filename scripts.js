var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        if (name == ""||email == "") {
            alert("Please fill out all required fields.");
            event.preventDefault();
        }

    });
}

function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);

    if (description.style.display == "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

var cvQuote = document.getElementById("cvQuote");

if (cvQuote) {
    cvQuote.addEventListener("mouseover", function() {
        cvQuote.style.fontStyle = "italic";
        cvQuote.style.backgroundColor = "#f8bbd0";
    });

    cvQuote.addEventListener("mouseout", function() {
        cvQuote.style.fontStyle = "";
        cvQuote.style.backgroundColor = "";
    });
}

window.addEventListener("load", function() {
    var footer = document.getElementById("homeFooter");

    if (footer) {
        var newParagraph = document.createElement("p");
        var currentDate = new Date();
        var text = document.createTextNode("Page loaded on: "+currentDate);

        newParagraph.appendChild(text);
        footer.appendChild(newParagraph);
    }
});