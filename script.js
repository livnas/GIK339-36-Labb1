// Definierar variabler och hämtar element med hjälp av DOM.
let changeColor = document.getElementById("changeColor");
let textFields = document.querySelectorAll(".textfield");

// Funktion för att byta ut färg på div-element.
function testScript()
{
    changeColor.style.background = "blue";
    for(let i = 0; i < textFields.length; i++)
    {
        textFields[i].style.background = "green";
    }
}