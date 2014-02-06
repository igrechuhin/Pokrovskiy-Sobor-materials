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

$('.panorama').on('click', function (event) {
    'use strict';
    alert('Переход на панораму : ' + $(event.target).data('destination'));
});
