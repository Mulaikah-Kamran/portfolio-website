document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        responseMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
        responseMessage.style.color = "green";
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "red";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "";
        });
    });
});
