const allDonateBtn = document.getElementsByClassName('donation');

for (const donateBtn of allDonateBtn) {
    donateBtn.addEventListener('click', function (event) {
        
        const donationAmount = event.target.parentNode.childNodes[7].value;

        const donationBalance = event.target.parentNode.childNodes[1].childNodes[3].childNodes[0].innerText;

        const updatedDonationBalance = totalDonation(parseInt(donationBalance), parseInt(donationAmount));

        const accountBalance = document.getElementById('account-balance').innerText;
        if (parseInt(accountBalance) - parseInt(donationAmount) < 0) {
            alert("Earn more to Donate More");
            return;
        }
        else {
            document.getElementById('account-balance').innerText = parseInt(accountBalance) - parseInt(donationAmount);
            event.target.parentNode.childNodes[1].childNodes[3].childNodes[0].innerText = updatedDonationBalance;
        }

       

      




    })
}

function totalDonation(donationBalance, donationAmount) {
    const totalDonationBalance = donationBalance + donationAmount;
    return totalDonationBalance;

}

