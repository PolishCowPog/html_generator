function openNav() { //Function
    document.getElementById("mySidenav").style.width = "450px" //Changes css width of mySidenav to 450px
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0" //Changes css width of mySidenav to 0
}

function changeColor(){
    addingColor = document.getElementById("changeBcColor").value //Get the value of the input box
    if (CSS.supports("color", addingColor) == true){ //Check if input value is supported by css color
        document.body.style.backgroundColor = addingColor; //If true change to the color
    }
    else{
        alert("Not a valid color") //If input not supported by css.
    }
}
function ChangeColorPicker(){
    addingColor2 = document.getElementById("colorPicker").value
    document.body.style.backgroundColor = addingColor2
}

function addText(){
    let addingText = document.getElementById("addTextInput").value
    if (addingText == ""){
        alert("Invalid, no input given")
    }
    else{
        let selectedElement = document.getElementById("selectElement").value
        let element = document.createElement(selectedElement)
        element.textContent = addingText

        element.setAttribute("data-added-text", addingText);
        document.getElementById("addedElements").appendChild(element).id = "addedtext"
    }
}

function removeText(){
    let textToRemove = document.getElementById("removeTextInput").value;
    let elements = document.querySelectorAll("#addedElements *");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.trim() === textToRemove.trim()) {
            elements[i].remove();
            break;
        }
    }
}


function changeFont(){
    selectedFont = document.getElementById("selectFont").value

    let textToChange = document.getElementById("changeFontInput").value;
    let elements = document.querySelectorAll("#addedElements *");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.trim() === textToChange.trim() && elements[i].style.fontFamily !== selectedFont) {
            elements[i].style.fontFamily = selectedFont;
            break;
        }
    }
}