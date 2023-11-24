// Definierar variabler och hämtar element med hjälp av DOM.
const checkBox = document.getElementsByTagName("input")[2];
const textFields = document.querySelectorAll(".textfield");
const button = document.querySelector(".button");
const changeColor = document.getElementById("changeColor");

//Lägger till eventlyssnare på samtliga textFields från nodeList => 
//förväntar sig ett mouseover -event

textFields.forEach((field) => field.addEventListener("blur", getContent));

//Funktion för att sätta innehållet från "content" -input elementet till div:en "color"
function getContent(e) 
{
    //hämtar namnet på elementet som triggade eventet
    elementName = e.target.name;
    console.log(`Du skrev nyss i ${elementName} -fältet!`)
    //Kollar om elementet som triggade eventet är "content" =>
    //Om true, flytta över innehållet till div:en
    /*if(elementName === "content")
    {
        changeColor.innerHTML = e.target.value;
    }*/

    //testade med samma som nedanför här också :D

    changeColor.innerHTML = (elementName === "content") && e.target.value;
}

// -----------------------------------------------------------------------------------------

// Adderar en eventlyssnare till checkboxen som reagerar när en förändring sker i checkboxen. 
checkBox.addEventListener('change', (function() {


   /* for (field of textFields) {

       const test = field.getAttribute('name') ? color : !color;
       
       changeColor.style.backgroundColor = test.value;
    } */

    // Vid true tilldelas värdet för det högra uttrycket till changeColor.style.backgroundColor.
    textFields.forEach((field) => changeColor.style.backgroundColor = (field.getAttribute('name') === "color" && field.value));


    // Alternativt om vi måste använda attributen name.
    /*for(textField of textFields)
    {
        if(textField.getAttribute('name') === "color")
        {
            console.log(`Correct path: ${textField.value}`)
            changeColor.style.background = textField.value
        }
    }*/

}));

// Eventlyssnare 
button.addEventListener('click', () => changeColor.remove());

// Funktion för att byta ut färg på div-element.

/* function testScript()
{
    changeColor.style.background = "blue";
    for(let i = 0; i < textFields.length; i++)
    {
        textFields[i].style.background = "green";
    }
} */ 