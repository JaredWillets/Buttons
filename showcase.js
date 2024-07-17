function assembleButton(buttonClass) {

    // Set up the button

    let buttonElement = document.createElement("button")
    buttonElement.innerHTML = "Test"

    
    return new buttonClass(buttonElement)
}