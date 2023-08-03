burger = document.querySelector('.burger');
header = document.querySelector('header');
nav = document.querySelector('nav');

// height and nav visiblity
burger.addEventListener('click', () => {
    header.classList.toggle('headerheight');
    nav.classList.toggle('navvisible');
});

//burger animation
let showMenu = false;
burger.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        burger.classList.add("close");
        // Reset the menu state
        showMenu = true;
    } else {
        burger.classList.remove("close");
        // Reset the menu state
        showMenu = false;
    }
}

//hireme button
    document.getElementById("hiremebtn").addEventListener("click", function() {
    let recipient = "zahidanasari17@gmail.com";
    var subject = encodeURIComponent("Hiring for work!");
    var body = encodeURIComponent(
    "Dear [Candidate's Name],\n\n" +
    "We're reaching out to you because we're impressed by your skills. We have an exciting opportunity at [Company Name] that we believe you'd be a great fit for our work.\n\n" +
    "Location: [Office Location or Remote]\n" +
    "Skills: [Key Skills/Technologies]\n\n" +
    "If you're interested in learning more, please reply to this email. We'd love to discuss how your expertise could contribute to our success.\n\n" +
    "Looking forward to connecting,\n\n" +
    "[Your Name]\n" +
    "[Your Title]\n" +
    "[Company Name]\n" +
    "[Email Address]\n" +
    "[Phone Number]"
    );

    var mailtoLink = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
  });


