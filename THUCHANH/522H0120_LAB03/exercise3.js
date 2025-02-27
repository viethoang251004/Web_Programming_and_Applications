function updateText(message) {
    let alert = document.getElementsByClassName('alert-success')[0];
    alert.innerHTML = message;
}

function updateColor(color) {
    let alert = document.getElementsByClassName('alert-success')[0];
    alert.style.color = color;
}

function changeWeight(isBold) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if (isBold) {
        alert.style.fontWeight = 'bold'
    } else {
        alert.style.fontWeight = 'normal'
    }
}

function changeStyle(isItalic) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if (isItalic) {
        alert.style.fontStyle = 'italic'
    } else {
        alert.style.fontStyle = 'normal'
    }
}

function changeDecoration(isUnderline) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if (isUnderline) {
        alert.style.textDecoration = 'underline'
    } else {
        alert.style.textDecoration = 'none'
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the HTML elements
    var messageInput = document.getElementById("message");
    var colorSelect = document.getElementById("color");
    var boldCheckbox = document.getElementById("bold");
    var italicCheckbox = document.getElementById("italic");
    var underlineCheckbox = document.getElementById("underline");
    var alertText = document.querySelector(".alert-success");
    var restoreButton = document.querySelector("button.btn-success");

    // Store the default values
    var defaultText = alertText.innerHTML;
    var defaultColor = "black";
    var defaultWeight = false;
    var defaultStyle = false;
    var defaultDecoration = false;

    // Function to restore the default values
    function restoreDefault() {
        messageInput.value = "";
        colorSelect.value = defaultColor;
        boldCheckbox.checked = defaultWeight;
        italicCheckbox.checked = defaultStyle;
        underlineCheckbox.checked = defaultDecoration;
        updateText(defaultText);
        updateColor(defaultColor);
        changeWeight(defaultWeight);
        changeStyle(defaultStyle);
        changeDecoration(defaultDecoration);
    }

    // Event listener for the "Restore Default" button
    restoreButton.addEventListener("click", restoreDefault);
});