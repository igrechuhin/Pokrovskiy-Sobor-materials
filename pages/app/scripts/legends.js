$(function() {
    'use strict';
    FastClick.attach(document.body);
});

$('.button.plan').on('click', function () {
    'use strict';
    alert('Переход на страницу temples_list');
});

$('.button.contents').on('click', function () {
    'use strict';
    alert('Переход на страницу contents');
});

$('.button.back').on('click', function () {
    'use strict';
    alert('Переход на предыдущую страницу');
});

$('.images').on('click', function () {
    'use strict';
    alert('Открыть фотогалерею на альбоме exterior');
});

$(function() {
    'use strict';
    var $navigation = $('.navigation'),
        $dots = $navigation.children();

    $navigation.on('click', function (event) {
        var $target = $(event.target),
            id = $target.attr('id');

        alert('Пролистать до страницы : ' + id);

        $dots.removeClass('active');
        $target.addClass('active');
    });
});
