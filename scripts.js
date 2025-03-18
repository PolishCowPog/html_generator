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

function addText(){
    addingText = document.getElementById("addTextInput").value
    if (addingText == ""){
        alert("Invalid, no input given")
    }
    else{
        let li = document.createElement("li")
        li.textContent = addingText
        document.getElementById("textList").appendChild(li)
    }
}