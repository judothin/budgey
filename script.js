document.getElementById('calculate_button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting and the page from refreshing


    function submission_handler() {
        // html items to show the user the results
        let gasResultsElement = document.getElementById('gascost');
        let leftOverElement = document.getElementById('left');

        let weeklyincome = document.getElementById('weeklyincome').value;
        let avggas = document.getElementById('avggas').value;
        let milesdriven = document.getElementById('milesdriven').value;
        let groc = document.getElementById('groc').value;
        let milespg = document.getElementById('milespg').value;
        let util = document.getElementById('util').value;
        let rent = document.getElementById('rent').value;
        let eato = document.getElementById('eato').value;
        let sub = document.getElementById('sub').value;
        let phone = document.getElementById('phone').value;
        let wifi = document.getElementById('wifi').value;
        let carp = document.getElementById('carp').value;
        let carins = document.getElementById('carins').value;

        let gasResults = calculate_gascost(milespg, milesdriven, avggas);
        let leftOver = calculate_left(weeklyincome, groc, util, rent, eato, sub, phone, wifi, carp, carins);

        gasResultsElement.textContent = "Total amount spent on gas: $" + gasResults.toFixed(2);
        leftOverElement.textContent = "Total amount left to save and/or spend: $" + leftOver.toFixed(2);
    }

    function calculate_gascost(milespg, milesdriven, avggas) {
        let milesdrivenpm = milesdriven * 30;
        let gascost = (milesdrivenpm / milespg) * avggas;
        return gascost;
    }

    function calculate_left(weeklyincome, groc, util, rent, eato, sub, phone, wifi, carp, carins) {
        let totalpm = weeklyincome * 4;
        let gascost = calculate_gascost(document.getElementById('milespg').value, document.getElementById('milesdriven').value, document.getElementById('avggas').value);
        let leftover = totalpm - (parseFloat(rent) + parseFloat(util) + parseFloat(groc) + parseFloat(eato) + parseFloat(sub) + parseFloat(gascost) + parseFloat(phone) + parseFloat(wifi) + parseFloat(carp) + parseFloat(carins));
        return leftover;
    }
    // Show the calculations box
    document.getElementById('calculations_box').style.display = 'block';
    submission_handler();
});
