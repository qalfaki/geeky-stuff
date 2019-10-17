const toggle = function(e) {
    let el = $('.extendable-navigation');
    if (el.hasClass('toggled')) {
        el.removeClass('toggled')
        return
    }
    el.addClass('toggled');
    console.log('clicked')
}

const textLengthShortner = function () {
    $('.posts').children().map(function() {
        let innertEl = $(this).children('.post-content');
        if (innertEl.text().length > 400) {
            let newStr = innertEl.text().substr(0, 400);
            innertEl.text('').append(`${newStr}...<a href="/posts/${innertEl[0].id}/">Read more</a>`);
        }
    }).get()
}

$(function() {
    $('#mini-nav').on('click', function(e) {
        toggle(e)
    })
    textLengthShortner();
});
