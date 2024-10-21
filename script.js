// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    
    // TODO: Create a variable for the character set based on selected options
    let characterSet = "";
    const optionsMapping = [
        { condition: options.includeUppercase, chars: uppercase },
        { condition: options.includeLowercase, chars: lowercase },
        { condition: options.includeNumbers, chars: numbers },
        { condition: options.includeSpecialChars, chars: specialChars }
        
    ];
    
    // TODO: Generate the password based on the selected criteria
    optionsMapping.forEach(option => {
        if (option.condition) characterSet += option.chars;
    });

    if (characterSet.length===0){
        alert("harus pilih gblok")
        return;
    }
    
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output

// BONUS: Implement the copy to clipboard functionality
