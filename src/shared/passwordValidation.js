function validateInputs(email, password, name) {

    function validateFirstName(name) {
        if (!name) {
            document.querySelector('.firstName').classList.add('invalidInput')
            document.querySelector('.firstName').setAttribute('placeholder', 'This field can not be empty')
            return false
        }
        return true
    }

    function validateEmail(email) {
        if (!(email)) {
            document.querySelector('.email').classList.add('invalidInput')
            document.querySelector('.email').setAttribute('placeholder', 'Email field can not be empty')
            return false
        }
        if (!(email.includes('@'))) {
            document.querySelector('.email').classList.add('invalidInput')
            document.querySelector('.email').setAttribute('title', 'Email format incorrect, it should contain @ character')
            return false
        }
        return true
    }

    function validatePassword(password) {
        if (password.length < 5) {
            document.querySelector('.password').classList.add('invalidInput')
            document.querySelector('.password').setAttribute('title', 'Password should be at least 5 characters long!')
            return false
        } else if (password.search(name) !== -1) {
            document.querySelector('.password').classList.add('invalidInput')
            document.querySelector('.password').setAttribute('title', 'Password shouldn\'t contain username')
            return false
        } else if (!hasSpecChar(password)) {
            document.querySelector('.password').classList.add('invalidInput')
            document.querySelector('.password').setAttribute('title', 'Password should have at least one capital letter or number')
            return false
        }
        return true
    }

    function hasSpecChar(password) {
        for (let i = 0; i < password.length; i++) {
            if (password[i] === password[i].toUpperCase()) {
                return true;

            }
            if (!isNaN(parseInt(password[i]))) {
                return true
            }
        }


    }


    return validateFirstName(name) & validateEmail(email) & validatePassword(password)
}


export default validateInputs