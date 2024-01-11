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




// database 

async function getClients() {
    try {
        let clients = await $.get('/clients')
        clients.forEach(client => {
            console.log(client)
        });
    } catch (err) {
        console.log(err)
    }
}

let joinBtn = $("#joinBtn")

joinBtn.on('click', postClient)

async function postClient() {
    try {
        let emailInput = $(".emailInput").val()
        let requestBody = { email: emailInput}

        // should check if valid email

        let newClient = await $.post('/clients', requestBody)
        $(".emailInput").val('')
        console.log('Client posted')
    } catch (err) {
        console.error(err)
    }
}