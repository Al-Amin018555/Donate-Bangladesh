
// document.getElementById('blog')
//     .addEventListener('click', function () {
//         window.location.href = "blog.html";
//     })

// document.getElementById('home')
//     .addEventListener('click', function () {
//         window.location.href = "index.html";
//         console.log('home clicked')
//     })

document.getElementById('show-donation')
    .addEventListener('click', function () {
        showSectionById('donation-carts');
    })

document.getElementById('show-history')
    .addEventListener('click', function () {

        showSectionById('history-carts');
    })

