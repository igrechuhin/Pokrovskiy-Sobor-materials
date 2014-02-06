$(function() {
    'use strict';
    FastClick.attach(document.body);
});

$(function() {
    'use strict';
    var $hintScreen = $('.hint-screen');
    $('.button.hint').on('click', function () {
        $hintScreen.fadeIn();
    });

    $hintScreen.on('click', function () {
        $hintScreen.fadeOut();
    });
});

$('.button.back').on('click', function () {
    'use strict';
    alert('Переход на предыдущую страницу');
    alert('Если эта страница первая (при первом запуске приложения), то кнопку надо скрыть');
});

$('.photo').on('click', function () {
    'use strict';
    alert('Переход на страницу с фотографиями (нативный фотоальбом)');
});

$('.panorama').on('click', function () {
    'use strict';
    alert('Переход в панораму scene_1_hall_3');
});

$('.info').on('click', function () {
    'use strict';
    alert('Переход на страницу info');
});

$('.temples').on('click', function () {
    'use strict';
    alert('Переход на страницу temples_list');
});

$('.history').on('click', function () {
    'use strict';
    alert('Переход на страницу history');
});

$('.about').on('click', function () {
    'use strict';
    alert('Переход на страницу about');
});

$('.bonus').on('click', function () {
    'use strict';
    alert('Переход на страницу bonus');
});

$('.legends').on('click', function () {
    'use strict';
    alert('Переход на страницу legends');
});
