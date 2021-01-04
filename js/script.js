function openText(text, button) {
    var text = document.getElementById(text);
    var button = document.getElementById(button);

    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "See less"; 
    } else {
        text.style.display = "none";
        button.innerHTML = "See more"; 
    }
}