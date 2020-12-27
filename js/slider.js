var label = $("label[for=r1],label[for=r2]");

function change() {
    $(label).css('background', '#264160');
    $(this).css('background', 'none');
}

var isLeft = false;
var timeOut = 5000;

setTimeout(autoSlide(), timeOut);

var coin = 0;

$(label[0]).css('background', 'none');

function autoSlide() {
    $(label).css('background', '#264160');
    if (coin == 1) {
        if (!isLeft) {
            right();
            $(label[1]).css('background', 'none');
        } else {
            left();
            $(label[0]).css('background', 'none');
        }
    }
    setTimeout(autoSlide, timeOut);
}


//Движение слайдов
coin = 1;

$(label[1]).click(right);
$(label).click(change);
$(label[0]).click(left);

var slider1 = $('#slider1');
var slider2 = $('#slider2');
var block = $('.block');

function left() {
    slide(slider2, slider1);
    isLeft = false;
}

function right() {
    slide(slider1, slider2);
    isLeft = true;
}

function slide(slider1, slider2) {
    slider2.css('left', '0%');
    slider1.css('left', '-50%');
    block.css('z-index', '6');
    setTimeout(function () {
        slider1.css('transition', '0s');
        slider1.css('opacity', '0');
        setTimeout(function () {
            slider1.css('left', '50%');
            setTimeout(function () {
                slider1.css('opacity', '1');
                slider1.css('transition', '1s');
                block.css('z-index', '4');
            }, 20);
        }, 10);
    }, 600);
}





