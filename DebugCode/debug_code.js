	
	function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let result = arithmethicoperations(num1, num2);
    
                        // Display the result
                        displayResult(result);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
    
                function arithmethicoperations(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;

                    // Multiply, adding and divide the numbers
                    const multiply = a * b;
                    const add = a + b;
                    const division = a / b;

                    return {multiply, add, division};
                }
    
                function displayResult(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `Multiply: ${result.multiply},
                    Add: ${result.add},
                    Division: ${result.division}`;
                }    