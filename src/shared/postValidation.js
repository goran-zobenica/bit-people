function validateTitle(title) {
    if (title.length < 3 || title.length > 30) {
        document.querySelector(".inputTitle").classList.add("invalidInput")
        document.querySelector(".inputTitle").setAttribute("title", "Title must be min 3 and max 30 character long")
        document.querySelector(".inputTitle").setAttribute("placeholder", "Title must be min 3 and max 30 character long")
        return false
    }
    return true
}

function validateSubtitle(subtitle) {
    if (subtitle.length < 3 || subtitle.length > 50) {
        document.querySelector(".inputSubtitle").classList.add("invalidInput")
        document.querySelector(".inputSubtitle").setAttribute("placeholder", "Subtitles must be min 3 and max 50 characters long")
        document.querySelector(".inputSubtitle").setAttribute("title", "Subtitles must be min 3 and max 50 characters long")
        return false
    }
    return true
}
function validationPhoto(photoUrl) {
    if (photoUrl.length < 1) {
        document.querySelector(".inputImgUrl").classList.add("invalidInput")
        document.querySelector(".inputImgUrl").setAttribute("placeholder", "Please fill out this field")
        return false
    }
    return true
}

function validateContent(content) {
    if (content) {
        if (content[0] === content[0].toUpperCase() && content.indexOf(".") === -1) {
            document.querySelector(".inputPostText").classList.add("invalidInput")
            document.querySelector(".inputPostText").setAttribute("title", "Content must be min one sentence long")
            return false
        }
        else if (content[0] !== content[0].toUpperCase()) {
            document.querySelector(".inputPostText").classList.add("invalidInput")
            document.querySelector(".inputPostText").setAttribute("title", "Content must start with capital letter")
            return false
        }
    }
    else {
        document.querySelector(".inputPostText").classList.add("invalidInput")
        document.querySelector(".inputPostText").setAttribute("placeholder", "Please fill out this field")
        return false
    }
    return true

}

function validatePost(title, subtitle, content, photoUrl) {
    const photoValidation = validationPhoto(photoUrl)
    const titleValidation = validateTitle(title)
    const subtitleValidation = validateSubtitle(subtitle)
    const contentValidation = validateContent(content)

    if (titleValidation === true && subtitleValidation === true && contentValidation === true && photoValidation === true) {
        return true
    }
    return false

}

export default validatePost


