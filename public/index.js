$('.aboutJohnny').on('mouseenter', () => {
    const paragraph = $('.paragraph-j');
    const originalContent = paragraph.html();

    paragraph.empty();
    paragraph.html('<a href="https://app.thecut.co/barbers/jonnyselbor/" target="_blank">Book Here</a>');
    $('.aboutJohnny').on('mouseleave', () => {
        paragraph.empty();
        paragraph.html(originalContent);
    })
});

$('.aboutCisco').on('mouseenter', () => {
    const paragraph = $('.paragraph-c');
    const originalContent = paragraph.html();

    paragraph.empty();
    paragraph.html('<a href="https://app.thecut.co/barbers/franciscogutierrez/" target="_blank">Book Here</a>');

    $('.aboutCisco').on('mouseleave', () => {
        paragraph.empty();
        paragraph.html(originalContent);
    })
});
