document.addEventListener('DOMContentLoaded', function() {
    function switchTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName + '-section').classList.add('active');

        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
    }

    function donate(inputId) {
        // Get the current total balance and convert it to a number
        let totalBalanceElement = document.getElementById('totalBalance');
        let totalBalance = parseFloat(totalBalanceElement.innerText);

        // Get the donation amount entered by the user
        const amount = parseFloat(document.getElementById(inputId).value);

        // Check if the donation amount is valid and greater than 0
        if (amount && amount > 0) {
            if (amount <= totalBalance) {
                // Subtract the donation amount from the total balance
                totalBalance -= amount;

                // Update the total balance displayed on the page
                totalBalanceElement.innerText = totalBalance.toFixed(2);

                // Thank the user for the donation
                alert(`Thank you for donating ${amount} BDT!`);
            } else {
                // If the user tries to donate more than the available balance
                alert('Insufficient balance to complete this donation.');
            }
        } else {
            // If the user enters an invalid donation amount
            alert('Please enter a valid donation amount.');
        }
    }

    // Expose functions to global scope (if needed by inline event handlers)
    window.switchTab = switchTab;
    window.donate = donate;
});
