const toggle = function(e) {
    let el = $('.extendable-navigation');
    if (el.hasClass('toggled')) {
        el.removeClass('toggled')
        return
    }
    el.addClass('toggled');
}

const textLengthShortner = function () {
    $('.posts').children().map(function() {
        let innertEl = $(this).children('.post-content');
        if (innertEl[0]) {
            if (innertEl.text().length > 400) {
                let newStr = innertEl.text().substr(0, 400);
                innertEl.text('').append(`${newStr}...<a href="/posts/${innertEl[0].id}/">Read more</a>`);
            }
            else {
                innertEl.append(`...<a href="/posts/${innertEl[0].id}/">Read more</a>`);
            }
        }
        $(`.responses a #nc-${innertEl[0].id}`).append(Math.floor(Math.random() * 10**4));
    }).get()
}

$(function() {
    $('#mini-nav').on('click', function(e) {
        toggle(e)
    })
    textLengthShortner();
});
