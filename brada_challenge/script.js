function updateStorage() {
    let x = document.getElementById("rangeSlider").value;
    document.getElementById("sliderVal").innerHTML = x;
    document.getElementById("bubble-text").innerHTML = 1000 - x;
}

function emptyStorage() {
    document.getElementById("rangeSlider").value = "0";
    document.getElementById("sliderVal").innerHTML = "0";
    document.getElementById("bubble-text").innerHTML = 1000;
}