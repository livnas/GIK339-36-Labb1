// Definierar variabler och hämtar element med hjälp av DOM.
const checkBox = document.getElementsByTagName("input")[2];
const textFields = document.querySelectorAll(".textfield");
const button = document.querySelector(".button");
const changeDiv = document.getElementById("changeDiv");

//Lägger till eventlyssnare på samtliga textFields från nodeList => 
//eventlyssnare förväntar sig ett keyup -event

textFields.forEach((field) => field.addEventListener("keyup", getContent));

//Funktion för att sätta innehållet i div-elementet för färg till det som skrivs in i "content" -input elementet.
function getContent(e) 
{
    //hämtar namnet på elementet som triggade eventet
    var elementTarget = e.target;
    
    console.log(elementTarget)
    //Kollar om elementet som triggade eventet är "content" =>
    //Om true, flytta över innehållet till div:en
    if(elementTarget.name === "content")
    {
        changeDiv.innerHTML = elementTarget.value;
    }
}

// Adderar en eventlyssnare till checkboxen som reagerar när en förändring sker i checkboxen. 
// Vid förändring ska bakgrundsfärg på div-elementet changeDiv ändras till den färg som står skriven i färg-textfältet.
checkBox.addEventListener('change', (function() {
    
    for (field of textFields) {

       const testName = field.getAttribute('name') ? color : !color;
       
       changeDiv.style.backgroundColor = testName.value;
    } 

    // Här görs samma sak som ovan fast kod är skrivet på endast en rad. Om ni är nyfikna kan ni testa den :)
    // textFields.forEach((field) => changeDiv.style.backgroundColor = (field.getAttribute('name') === "color" && field.value));
}));

// Eventlyssnare för knappen som lyssnar efter att vi klickar på elementet med lyssnaren. Vid tryck ska div-elementet tas bort.
button.addEventListener('click', () => changeDiv.remove());