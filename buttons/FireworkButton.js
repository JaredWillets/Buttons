import ButtonBase from "./ButtonBase";

class FireworkButton extends ButtonBase {
    initializeButton() {
        this.canvas = document.createElement("canvas")
        this.canvas.style.position = "absolute"
        this.canvas.style.top = "-"+specs.fireworkHeight+"px"
        this.canvas.style.left = 0
        this.canvas.width = width
        this.canvas.height = height+specs.fireworkHeight
        this.canvas.style.width = width + "px"
        this.canvas.style.height = height+specs.fireworkHeight + "px"
        this.canvas.style.borderRadius = buttonStyle.borderRadius
        this.canvas.style.transition = buttonStyle.transition
        this.canvas.context = this.canvas.getContext('2d')

        this.button.appendChild(canvas)
    }
    onclick() {
        super.onclick()
    }
}

export default FireworkButton;