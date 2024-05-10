const displayField = document.getElementById('display-field');
const numBtn = document.querySelectorAll(".butnum");
const buttonOpr = document.querySelectorAll(".butopr");
const clear = document.getElementById("clear");
const equalBtn = document.getElementById("equal-btn");



document.addEventListener('DOMContentLoaded', function() {

    numBtn.forEach(button => {
        button.addEventListener('click', () => {

            if (displayField.value === "Invalid input"){
                displayField.value =""
            }

            displayField.value += button.textContent;
        });
    });


    buttonOpr.forEach(button => {
        button.addEventListener('click', () => {
            displayField.value += button.textContent;
        });
    });
    

     
    equalBtn.addEventListener('click', () => {
        const inputExpression = displayField.value;
    
        try {
            // Sanitize the input to allow only valid characters for evaluation
            const sanitizedExpression = inputExpression.replace(/[^0-9+/*.\-]/g, "");
    
            // Evaluate the sanitized expression
            const result = eval(sanitizedExpression);
    
            // Check if the result is a valid number
            if (typeof result === 'number' && isFinite(result)) {
                // Update displayField with the result
                displayField.value = result;
            } else {
                throw new Error('Invalid result');
            }
        } catch (error) {
            // Handle syntax errors or invalid input
            console.error('Error evaluating expression:', error);
            // Display an error message to the user
            displayField.value = 'Invalid input';
        }
    });
    

   
});
