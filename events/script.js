//nav bar -----------------------------------------
let nav = document.querySelector('.nav')

document.querySelector('#menu-btn').onclick = () =>{
    nav.classList.toggle('active');
}

//search -----------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the search input and events container
    var searchBox = document.getElementById('search-box');
    var eventsContainer = document.getElementById('events');

    // Get all event boxes
    var eventBoxes = eventsContainer.querySelectorAll('.box');

    // Add an input event listener to the search box
    searchBox.addEventListener('input', function () {
        // Get the user's search input
        var searchTerm = searchBox.value.toLowerCase();

        // Loop through each event box and check if it contains the search term
        eventBoxes.forEach(function (eventBox) {
            var eventName = eventBox.querySelector('.image h3').innerText.toLowerCase();

            // Toggle the display of the event box based on the search term
            var displayStyle = eventName.includes(searchTerm) ? 'block' : 'none';
            eventBox.style.display = displayStyle;

            // Remove the data-aos attribute if the box is displayed
            if (displayStyle === 'block') {
                eventBox.removeAttribute('data-aos');
            }
        });
    });
});

//events/read more -----------------------------------------
// Get all the elements with the class 'read-more'
document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'read-more'
    var readMoreElements = document.querySelectorAll('.read-more');

    // Loop through each 'read-more' element
    readMoreElements.forEach(function (readMoreElement, index) {
        // Get the corresponding 'Read More' button within the 'read-more' element
        var readButton = readMoreElement.parentElement.querySelector('.btn#read-btn-' + (index + 1));

        // Add a click event listener to the 'Read More' button
        readButton.addEventListener('click', function () {
            // Toggle the display of the 'read-more' content
            readMoreElement.style.display = (readMoreElement.style.display === 'none' || readMoreElement.style.display === '') ? 'inline' : 'none';

            // Change the button text based on the content visibility
            readButton.textContent = (readMoreElement.style.display === 'none' || readMoreElement.style.display === '') ? 'Read More' : 'Read Less';
        });
    });
});

//reviews -----------------------------------------
var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween:100,
    centeredSlides:true,
    autoplay: {
        delay:5500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 'auto',
});