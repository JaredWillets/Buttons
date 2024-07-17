class ButtonBase {
    constructor() {
        this.options = {}
        this.button = document.createElement("button")
        this.buttonStyle = getComputedStyle(this.button)
        this.buttonWidth = this.button.clientWidth
        this.buttonHeight = this.button.clientHeight
        this.onclickOriginal = this.button.onclick
        this.initializeButton()
    }
    constructor(button) {
        this.options = {}
        this.button = button
        this.buttonStyle = getComputedStyle(this.button)
        this.buttonWidth = this.button.clientWidth
        this.buttonHeight = this.button.clientHeight
        this.onclickOriginal = this.button.onclick
        this.initializeButton()
    }
    constructor(button, options) {
        this.options = options
        this.button = button
        this.buttonStyle = getComputedStyle(button)
        this.buttonWidth = button.clientWidth
        this.buttonHeight = button.clientHeight
        this.onclickOriginal = this.button.onclick
        this.initializeButton()
    }
    initializeButton() {

    }
    onclick() {
        this.onclickOriginal = this.button.onclick
    }
}

export default ButtonBase