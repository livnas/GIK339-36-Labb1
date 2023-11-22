// Definierar variabler och hämtar element med hjälp av DOM.
const checkBox = document.getElementsByTagName("input")[2];
const textFields = document.querySelectorAll(".textfield");
const button = document.querySelector(".button");
const changeColor = document.getElementById("changeColor");

//Lägger till eventlyssnare på samtliga textFields från nodeList => 
//förväntar sig ett mouseover -event
for(let i = 0; i < textFields.length; i++) 
{
    textFields[i].addEventListener("click", getContent);
}

function getContent(e) 
{
    elementName = e.target.name;
    console.log(`Du hovrar över ${elementName} -fältet!`)
    if(elementName === "content")
    {
        changeColor.innerHTML = e.target.value;
    }
}

// -----------------------------------------

checkBox.addEventListener('change', (e) => {
    console.log(e.target);
    const checkBoxObject = e.target;

    changeColor.style.backgroundColor = 'red';
});


// Funktion för att byta ut färg på div-element.

/* function testScript()
{
    changeColor.style.background = "blue";
    for(let i = 0; i < textFields.length; i++)
    {
        textFields[i].style.background = "green";
    }
} */ 