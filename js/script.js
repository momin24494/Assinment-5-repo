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
    const amount = document.getElementById(inputId).value;
    if (amount && amount > 0) {
        alert(`Thank you for donating ${amount} BDT!`);
    } else {
        alert('Please enter a valid donation amount.');
    }
}
