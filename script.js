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
<div class="group flex flex-col items-center justify-between col-span-1  w-full md:w-full hover:w-full h-38 bg-[var(--black)] backdrop-blur-sm rounded-2xl px-5 mb-5 hover:bg-sky-700 p-4 shadow-lg shadow-grey-300 hover:shadow-xl  hover:shadow-sky-800">
                <span class="font-semibold text-1xl p-4 text-center">${Object.keys(proj_arr)[index]}</span>
                <a href="${Object.values(proj_arr)[index]}" target="_blank"
                    class="bg-sky-800 text-center text-sm flex items-center justify-center shadow-lg  rounded-2xl font-bold text-1xl w-full h-10 group-hover:bg-[var(--white)] group-hover:text-[var(--black2)]  ">View
                </a>
            </div>`;
    
}