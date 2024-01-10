$('.bookJohnny').on('click', () => {
    const paragraph = $('.paragraph-j');
    const originalContent = paragraph.html();

    paragraph.empty();
    paragraph.html('<h4>Call now: (619)-123-4567</h4>');
    setTimeout(() => {
        paragraph.empty();
        paragraph.html(originalContent);
    }, 5000); 
});

$('.bookCisco').on('click', () => {
    const paragraph = $('.paragraph-c');
    const originalContent = paragraph.html();

    paragraph.empty();
    paragraph.html('<h4>Call now: (858)-123-4567</h4>');

    setTimeout(() => {
        paragraph.empty();
        paragraph.html(originalContent);
    }, 5000); 
});

////////////////////// about 