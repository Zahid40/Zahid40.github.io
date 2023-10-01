let proj_arr = {"Random color generator" : "https://zahid40.github.io/projects/color",
                "Friends" : "https://zahid40.github.io/projects/friends/",
                "Rick and Morty" : "https://zahid40.github.io/projects/rickandmorty",
                "PDFX ( Pdf tool )" : "https://zahid40.github.io/projects/pdftools/",
                "Dog facts" : "https://zahid40.github.io/projects/dogfacts",
                "Password generator" : "https://zahid40.github.io/projects/genpass",
                "Spiderman theme Website" : "https://zahid40.github.io/projects/spidermanweb",
                "Todo" : "https://zahid40.github.io/projects/todo",
                "Alarm Clock" : "https://zahid40.github.io/projects/alarmclock",
                "Calculator" : "https://zahid40.github.io/projects/calculator"};

let projects_collection = document.getElementById('projects_collection');
for (let index = 0; index < Object.keys(proj_arr).length; index++) {
    console.log("ji");
    projects_collection.innerHTML += `
<div class="group flex flex-col items-center justify-between col-span-1  w-full md:w-full hover:w-full h-38 bg-[var(--blue)] backdrop-blur-sm rounded-2xl px-5 mb-5 hover:bg-[var(--green)] p-4 custom-box-shadow">
                <span class="font-semibold text-1xl p-4 text-center">${Object.keys(proj_arr)[index]}</span>
                <a href="${Object.values(proj_arr)[index]}" target="_blank"
                    class="bg-white text-black text-center text-sm flex items-center justify-center  rounded-2xl font-bold text-1xl w-full h-10 group-hover:bg-[var(--white)] group-hover:text-[var(--black2)]  ">View
                </a>
            </div>`;
    
}

function email_mail() {
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
}
