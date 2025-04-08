function totalDonation(donationBalance, donationAmount) {
    const totalDonationBalance = donationBalance + donationAmount;
    return totalDonationBalance;

}

function showSectionById(id) {
    document.getElementById('donation-carts').classList.add('hidden');
    document.getElementById('history-carts').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    if (id === 'history-carts') {
        document.getElementById('show-history').classList.add('bg-[#B4F461]');
        document.getElementById('show-donation').classList.remove('bg-[#B4F461]');      
    }
    else{
        document.getElementById('show-donation').classList.add('bg-[#B4F461]'); 
        document.getElementById('show-history').classList.remove('bg-[#B4F461]');  
    }
}

function handleButtonClick() {
    const transactionTime = new Date();

    const options = {
        weekday: 'short', // Tue
        year: 'numeric', // 2024
        month: 'short',  // Sep
        day: 'numeric',    // 17
        hour: '2-digit',   // 08
        minute: '2-digit', // 39
        second: '2-digit', // 11
        timeZoneName: 'longOffset', // GMT+0600 (Bangladesh Standard Time)
    };

    const formattedTime = transactionTime.toLocaleDateString('en-US', options);

    return `Date: ${formattedTime} (Bangladesh Standard Time)`;
}