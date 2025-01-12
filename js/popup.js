$(document).ready(function () {
    const portfolioData = {
        1: { title: "Menneskevenlige organisationer", text: "More details about this...", image: "img/portfolio/1.jpg" },
        2: { title: "Lederlinjen", text: "More details about this...", image: "img/portfolio/2.jpg" },
        3: { title: "Diplom i ledelse", text: "More details about this...", image: "img/portfolio/3.jpg" },
        4: { title: "Referencer", text: "More details about this...", image: "img/portfolio/4.jpg" },
        5: { title: "Christel Trøstrup", text: "More details about this...", image: "img/portfolio/5.jpg" },
        6: { title: "Publikationer", text: "More details about this...", image: "img/portfolio/6.jpg" },
    };

    $('.portfolio-box').on('click', function (e) {
        e.preventDefault(); 
        const contentId = $(this).data('content');
        const data = portfolioData[contentId];
        if (data) {
            $('#popup-title').text(data.title);
            $('#popup-text').text(data.text);
            $('#popup-image-container').html(`<img src="${data.image}" alt="${data.title}">`);
            $('#portfolio-popup').removeClass('hidden');
        }
    });

    $('.close').on('click', function () {
        $('#portfolio-popup').addClass('hidden');
    });

    $('#portfolio-popup').on('click', function (e) {
        if ($(e.target).is('#portfolio-popup')) {
            $(this).addClass('hidden');
        }
    });
});
