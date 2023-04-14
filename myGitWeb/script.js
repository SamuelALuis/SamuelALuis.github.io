let workHisList = ["Freelance Graphic Designing", "Freelance Web Designing"]
let skillList = ["HTML", "CSS", "JavaScript"]
let goalsList = ["Learn efectivley the process of developing websites",
"Creat websites that can be used by anyone across the world.",
"Learn as many languages as I can"]

let workHisEl = document.getElementById("workhis-el")
let skillsEl = document.getElementById("skills-el")
let goalsEl = document.getElementById("goals-el") 

function displayList(a, b) {
    for (let i = 0; i < b.length; i++) {
       a.innerHTML += `<li class="liRows">${b[i]}</li>` 
    }
}

displayList(workHisEl, workHisList)
displayList(skillsEl, skillList)
displayList(goalsEl, goalsList)
