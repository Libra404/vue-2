//选项卡 
var time = null;
var i2= 1;

tabHIdOrShow();
function tabHIdOrShow() {
    var mainspan = $('.main-card-tab').children('span');

    mainspan.mouseenter(function (el) {
        var teb1 = $(this).parent().siblings('.main-card-body').children('.main-card-body-box');
        var teb2 = $(this).parent().siblings('.main-card-body').children().children('.news');

        var teb = (teb1.length) ? teb1 : teb2;
        var i = $(this).index();

        $(this).addClass('reCo');
        $(this).siblings('span').removeClass('reCo');

        if (teb1.length) {
            teb.hide();
            teb.eq(i).show();
        } else {
            i2 = i+1;
            teb.css({ 'opacity': 0 })
            teb.eq(i).css({ 'opacity': 1 })
        }

    });
}

//选项卡 无限轮播
tabInfiniteRotation();
function tabInfiniteRotation() {
    let news = $('.news');
    let spans = news.parent().parent().siblings('.main-card-tab').children('span');


    clearInterval(time);
    setInterval(() => {
        if (i2 == 3) { i2 = 0; }

        spans.removeClass('reCo');
        spans.eq(i2).addClass('reCo');

        news.css({ 'opacity': 0 });
        news.eq(i2).css({ 'opacity': 1 })
        i2++;
        
    }, 3000);

}

$('#main1>div>canvas').css({'width': '1013'});
