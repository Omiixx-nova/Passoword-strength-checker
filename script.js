const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");

// Checklist items
const lengthCheck = document.getElementById("length");
const lettersCheck = document.getElementById("letters");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    // Reset UI if empty
    if (password.length === 0) {
        strengthText.textContent = "";
        strengthBar.className = "strength-bar";
        resetChecklist();
        return;
    }

    // Criteria checks
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);
    const length = password.length;

    // Update checklist UI
    updateChecklist(length >= 6, hasLetters, hasNumbers, hasSymbols);

    // Determine strength
    let strength = "Weak";
    let strengthClass = "weak";

    if (length > 10 && hasLetters && hasNumbers && hasSymbols) {
        strength = "Strong";
        strengthClass = "strong";
    } else if (length >= 6 && hasLetters && hasNumbers) {
        strength = "Medium";
        strengthClass = "medium";
    }

    // Update UI
    strengthText.textContent = "Strength: " + strength;
    strengthText.style.color = strengthClass;
    strengthBar.className = "strength-bar " + strengthClass;
});

// Reset checklist UI
function resetChecklist() {
    [lengthCheck, lettersCheck, numbersCheck, symbolsCheck].forEach(item => {
        item.style.color = "black";
    });
}

// Update checklist UI
function updateChecklist(lengthValid, letters, numbers, symbols) {
    lengthCheck.style.color = lengthValid ? "green" : "red";
    lettersCheck.style.color = letters ? "green" : "red";
    numbersCheck.style.color = numbers ? "green" : "red";
    symbolsCheck.style.color = symbols ? "green" : "red";
}