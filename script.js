// Function to calculate and display Tip, Total Bill, and Amt per Person
function calculateAndDisplay(){
    // get values from HTML
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPeople = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    // calculate tip, total Bill, and amt each person owes
    let tip = calculateTip(bill, serviceQuality);
    let totalBill = calculateTotalBill(bill, tip);
    let amtPerPerson = calcAmtPerPerson(totalBill, numOfPeople)

    // display results in HTML
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2);
    document.getElementById('totalBillResult').innerText = 'Bill: $' + totalBill.toFixed(2);
    document.getElementById('amtPerPersonResult').innerText = 'Total Per Person: $' + amtPerPerson.toFixed(2);
}

// helper function to calculate tip 
function calculateTip(bill, quality) { 
    
    if (quality === 'Great') {
        return bill * 0.2; 
    } else if (quality === 'Good') {
        return bill * 0.15;
    } else  {
        return bill * 0.1; 
    }

}

function calculateTotalBill(bill, tip) {
    return bill + tip;
}

function calcAmtPerPerson(totalBill, numOfPeople) {
    return totalBill / numOfPeople; 
}