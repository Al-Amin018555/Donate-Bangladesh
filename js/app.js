const allDonateBtn = document.getElementsByClassName('donation');

for (const donateBtn of allDonateBtn) {
    donateBtn.addEventListener('click', function (event) {

        const title = event.target.parentNode.childNodes[3].innerText;
        const donationAmount = event.target.parentNode.childNodes[7].value;

        const donationBalance = event.target.parentNode.childNodes[1].childNodes[3].childNodes[0].innerText;

        const updatedDonationBalance = totalDonation(parseInt(donationBalance), parseInt(donationAmount));

        const accountBalance = document.getElementById('account-balance').innerText;
        if (parseInt(accountBalance) - parseInt(donationAmount) < 0) {
            alert("Earn more to Donate More");
            return;
        }
        else if(isNaN(donationAmount)){
            alert("Enter a valid amount");
            return;
        }
        else if(donationAmount === ''){
            alert("Enter an amount to donate");
            return;
        }
        else {
            document.getElementById('account-balance').innerText = parseInt(accountBalance) - parseInt(donationAmount);
            event.target.parentNode.childNodes[1].childNodes[3].childNodes[0].innerText = updatedDonationBalance;

            alert('Congratulations You Have Donated Successfully!');

            const time = handleButtonClick()
        
            historyCard = document.getElementById('history-carts');
            const div = document.createElement('div');
            div.classList.add('outline-2', 'outline-gray-200', 'p-8', 'rounded-lg', 'bg-white', 'space-y-2');
            div.innerHTML = `
             <h1 class = "font-bold text-[20px] text-[#111111]"> ${donationAmount} Taka is donated for ${title} </h1>  
             <p class = "font-light text-[#111111]"> ${time} </p>               
            `;
            historyCard.appendChild(div);
        }


    })
}

