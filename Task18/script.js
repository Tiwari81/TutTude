function greetUser() {

    
    let name = document.getElementById("name").value;

    
    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    
    document.getElementById("greeting").innerText =
        "Hello, " + name;
}


function changeColor(box, color) {

    
    box.style.backgroundColor = color;

    
    if (color === "yellow") {
        box.style.color = "black";
    } else {
        box.style.color = "white";
    }
}
