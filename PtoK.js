/* Defining Table
 INPUT:  get a value pounds
 PROCESSING: converts the pounds value to kilograms
 OUTPUT: the result of the conversion from pounds to kilograms
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