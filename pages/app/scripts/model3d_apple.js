$(function() {
    'use strict';
    FastClick.attach(document.body);
});

$(function() {
    'use strict';
    var $slider = $('.slider'),
        minValue = 0,
        maxValue = 255;

    function formatTime (value) {
        var mins = Math.floor( value / 60 ),
            secs = Math.floor( value - mins*60 );
        return mins + ':' + (secs < 10 ? '0'+secs : secs);
    }

    $slider.slider({
        orientation: 'horizontal',
        range: 'min',
        min: minValue,
        max: maxValue,
        value: minValue,

        create: function (event) {
            $('.value.min', $slider).text(formatTime(minValue));
            $('.value.max', $slider).text(formatTime(maxValue));
        },

        slide: function (event, ui) {
            var hidePercent = ui.value / maxValue,
                $current = $('.value.current', $slider);
            if (hidePercent < 0.06 || hidePercent > 0.94) {
                $current.fadeOut();
            } else {
                $current.text(formatTime(ui.value))
                        .css('left', $(ui.handle).css('left'))
                        .fadeIn();
            }
        }
    });
});

$('.button.audio').on('click', function () {
    'use strict';
    $(this).toggleClass('active');
    $('.player').fadeToggle();

    alert('Загрузить файл 29.mp3 в плеер');
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

$('.play-pause').on('click', function () {
    'use strict';
    $(this).toggleClass('active');
    alert('Начать / остановить воспроизведение аудио');
});

threeSixty = {
    init: function() {
        this._vr = new AC.VR('viewer', 'images/3d/Pokrov_3d0###.jpg', 241, {
            invert: true,
            spinnable: false
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, '_vr');
    },
    shouldCache: function() {
        return false;
    }
};
if (!window.isLoaded) {
    window.addEventListener('load', function() {
        threeSixty.init();
    }, false);
}
document.observe('dom:loaded', function() {
    if(AC.Detector.isiPad()) {
        _$('viewer').addClassName('isipad');
    }
});
