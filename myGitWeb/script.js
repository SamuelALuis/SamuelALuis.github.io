let skillList = {
    skills: ["HTML", "CSS", "JavaScript"]
}

let mylistEl = document.getElementById("mylist-el")

mylistEl.innerHTML = `
<li>${skillList.skills[0]}</li>
<li>${skillList.skills[1]}</li>
<li>${skillList.skills[2]}</li>
`//skillList.skills1 + skillList.skills2 + skillList.skills3;



/*`
    <li>${skillList.skills1}</li>
    <li>${skillList.skills2}</li>
    <li>${skillList.skills3}</li>
`*/
