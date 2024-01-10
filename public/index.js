$('.aboutJohnny').on('mouseenter', () => {
    const paragraph = $('.paragraph-j');
    const originalContent = paragraph.html();

    paragraph.empty();
    paragraph.html('<a class="bookBtn" href="https://app.thecut.co/barbers/jonnyselbor/" target="_blank">Book Here</a>');
    $('.aboutJohnny').on('mouseleave', () => {
        paragraph.empty();
        paragraph.html(originalContent);
    })
});

$('.aboutCisco').on('mouseenter', () => {
    const paragraph = $('.paragraph-c');
    const originalContent = paragraph.html();

    paragraph.empty();
    paragraph.html('<a class="bookBtn" href="https://app.thecut.co/barbers/franciscogutierrez/" target="_blank">Book Here</a>');

    $('.aboutCisco').on('mouseleave', () => {
        paragraph.empty();
        paragraph.html(originalContent);
    })
});


let scrollContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})
