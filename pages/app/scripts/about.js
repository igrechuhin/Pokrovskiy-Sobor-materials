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

$('.link').on('click', function (event) {
    'use strict';
    alert('Открыть страницу : ' + $(event.target).data('url'));
});

$(function() {
    'use strict';
    var $navigation = $('.navigation'),
        $dots = $navigation.children(),

        $pageHeader = $('.page-header');

    $navigation.on('click', function (event) {
        var $target = $(event.target),
            id = $target.attr('id');

        alert('Пролистать до страницы : ' + id);

        $dots.removeClass('active');
        $target.addClass('active');

        $pageHeader.html($pageHeader.data(id));
    });
});
