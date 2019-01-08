function sendMail(contactForm) {
   
        emailjs.send("gmail", "johnmellaley", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("SUCCESS", response);
            document.forms['contactform'].reset();
        },
        function(error) {
            alert("FAILED test", error);
        }
    );
    return false;  // To block from loading a new page
}