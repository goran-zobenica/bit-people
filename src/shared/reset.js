function resetInputs() {
    document.querySelectorAll(".reset").forEach(e => e.value = "")
    document.querySelector(".checkReset").checked = false
}

function removeClassAttribute(className) {
    document.querySelector(className).classList.remove("invalidInput")
}

export { resetInputs, removeClassAttribute }
