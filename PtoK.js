/* Defining Table
 INPUT:  Get two numbers from two different input boxes - x and y
 PROCESSING: Add the two numbers together store in sum
 OUTPUT: Display sum on the document
*/ 

function PtoK() {
	//INPUT
	 let INPUT = parseFloat(document.getElementById('input').value);
	//PROCESSING
	 let results = INPUT * 0.453592;
    //ROUNDING following the example of Rex A. Barzee
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    results = Math.round(results * multiplier) / multiplier;
	//OUTPUT
	 document.getElementById('output').innerHTML = results;
}