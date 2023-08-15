let burger = document.querySelector('.burger');

// height and nav visiblity
burger.addEventListener('click', () => {
    document.querySelector('header').classList.toggle('headerheight');
    document.querySelector('nav').classList.toggle('navvisible');
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
document.getElementById("hiremebtn").addEventListener("click", function () {
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

//projects link arr
let proj_links_arr = () => {
    let projects_data = {
        "Guess the Number": "https://zahid40.github.io/GuesstheNumber/",
        "Calculater": "https://raw.githack.com/Zahid40/practice-files-by-ZAHID/main/calculator/index.html",
        "Tic Tac Toe":"https://raw.githack.com/Zahid40/practice-files-by-ZAHID/main/tic%20tac%20toe%20game/index.html",
        "Foodiie ( Food Deleviry website)":"https://raw.githack.com/Zahid40/Foodiie-by-Zahid/main/Foodiie.html",
        "C3 (Coaching website)":"https://raw.githack.com/Zahid40/practice-files-by-ZAHID/main/c3website/index.html",
        "Login Page (Demo)":"https://raw.githack.com/Zahid40/practice-files-by-ZAHID/main/Login%20Page/index.html",
        "The Jokes (Website)":"https://zahid40.github.io/thejokes/",
        "SpiderWeb ( spideman theme website)":"https://raw.githack.com/Zahid40/practice-files-by-ZAHID/main/Spidermanweb.html",
        "Map on Data (Corona)":"https://raw.githack.com/Zahid40/practice-files-by-ZAHID/main/Corona%20Map/index.html",

    }
    for (let i = 0; i < Object.keys(projects_data).length; i++) {
        let project_card = document.createElement('li')
        project_card.innerHTML = `<div class="slid">${Object.keys(projects_data)[i]}
        <a href="${projects_data[Object.keys(projects_data)[i]]}"
            target="_blank">View</a></div>`

        document.getElementById('project_list_container').append(project_card)
    }
}
proj_links_arr();

//page changer



