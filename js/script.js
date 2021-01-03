function openText() {
    var text = document.getElementById("osu")
    var button = document.getElementById("osubutton")

    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "See less"; 
    } else {
        text.style.display = "none";
        button.innerHTML = "See more"; 
    }
}