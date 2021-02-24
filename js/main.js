// function checkOffset() {
//     let windowHeight = $(document).scrollTop() + window.innerHeight;
//     let footer = $('footer').offset().top;
//     if (windowHeight < footer) {
//         $('.burger-menu').css('bottom', '0px');
//     } else {
//         $('.burger-menu').css('bottom', (0 + (windowHeight - footer)) + 'px');
//     }
// }
// $(document).scroll(checkOffset);

$('.news-item p').matchHeight();


// BUGGER MENU ---- START
let burgerMenu = $('.burger-menu')
let burgerMenuClose = $('.navigation .close')
let navigation = $('.navigation')
burgerMenu.on('click', function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
        navigation.css('visibility', 'visible')
        navigation.css('opacity', '1')
        navigation.animate({
            left: '0'
        }, 200)
    } else {
        navigation.animate({
            opacity: 0,
            left: '-100%'
        }, 250, function () {
            navigation.css('visibility', 'hidden')
        })
    }
})
burgerMenuClose.on('click', function () {
    burgerMenu.removeClass('active')
    navigation.animate({
        left: '-100%'
    }, 250, function () {
        navigation.css('visibility', 'hidden')
    })
})
// BUGGER MENU ---- FINISH

// MAGNIFICPOPUP ---- START
$('.video-btn a').magnificPopup({
    type:'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Qmio0bK6_DU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
            '</div>'
    },
    enableEscapeKey: true
});

// DELETE BR
if ($(window).width() <= 1200) {
    $('.development-block__text').find('br').remove();
    $('.context-adv-block__content .text-block').find('br').remove();

}
