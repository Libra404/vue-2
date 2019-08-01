//harbour 数据部分
var currency = {
    harbour: function () {
        let A = `<div id="harbour">
        </div>
        <div class="artBox">
            <div class="article-card-header">
                版本信息
            </div>
    
            <div class="article-card-body">
                <p>当前版本：layuiAdmin-v1.2.1 pro</p>
                <p>基于框架：layui-v2.4.5</p>
                <div>
                    <a href="javascript:;" class="article-btn">获取授权</a>
                    <a href="javascript:;" class="article-btn">下载新版</a>
                </div>
            </div>
    
            <div class="article-card-header">
                关于版权
            </div>
    
            <div class="article-card-body">
                <blockquote>
                    layuiAdmin 受国家计算机软件著作权保护（登记号：
                    <a href="javascript:;">
                        2018SR410669
                    </a>
                    ），必须经
                    <a href="javascript:;">
                        官网
                    </a>
                    授权才可获得源文件使用权。不得恶意分享产品源代码、二次转售等，违者将承担相应的法律责任。
                </blockquote>
                <p>
                    © 2018
                    <a href="javascript:;">layui.com</a>
                    版权所有
                </p>
            </div>
        </div>`;
        return A;
    },
}
// 加载main
// $.ajax({
//     type: "get",
//     url: "data/Basics/Console.text",
//     success: function (response) {
//         if (response != '') {
//             $('main').html(response);
//         }
//     },
//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//         alert('当前页面未完成');
//         $('main').html("当前页面未完成");
//         // // 状态码
//         // console.log(XMLHttpRequest.status);
//         // // 状态
//         // console.log(XMLHttpRequest.readyState);
//         // // 错误信息   
//         // console.log(textStatus);
//         // console.log(errorThrown);
//     }
// });
//适应分辨率
var hei = $(window).height();
$(document.body).css({ "height": hei });

//****   窗体变动   ******* */
// $(window).resize(function () {
// });














/* nav与和header 的 span动画 */
spanAnimate();
function spanAnimate() {
    //导航条soan
    var NLtop = null;
    $('nav ul li').on({
        mouseenter: function () {
            let ULtop = NLtop = $(this).position().top;
            $('#nav-ho').stop().animate({
                top: ULtop,
                height: '56px'
            }, 150);
        },      //可以通过on({ fun1,fun2 }) 一个对象绑定多个事件

    });

    $('nav ul').on({
        mouseleave: function () {
            $('#nav-ho').animate({
                top: (NLtop + 28),
                height: '0px'
            }, 100);
        },
    });


    /* 头部span动画 */
    var HLleft = null;
    var HLwidth = null;
    //左ul
    $('header ul.header-left li').on({
        mouseenter: function () {
            let HLle = HLleft = $(this).position().left;
            let HLwid = HLwidth = $(this).width();
            $('#hea-ho1').stop().animate({
                'left': HLle + 20,
                'width': HLwid
            }, 200);
        },

    });
    $('header ul.header-left').on({
        mouseleave: function () {
            $('#hea-ho1').stop().animate({
                left: HLleft + 20 + (HLwidth / 2),
                width: 0
            }, 150);
        },
    });
    //右ul
    $('header ul.header-right li').on({
        mouseenter: function () {
            let HLle = HLleft = $(this).position().left;
            let HLwid = HLwidth = $(this).width();
            $('#hea-ho2').stop().animate({
                'left': HLle,
                'width': HLwid
            }, 200);
        },

    });
    $('header ul.header-right').on({
        mouseleave: function () {
            $('#hea-ho2').stop().animate({
                left: HLleft + (HLwidth / 2),
                width: 0
            }, 150);
        },
    });
}

/* nav导航显示隐藏 */
LIHover();
function LIHover() {
    //开关点击的下级页面
    $("nav ul li a").click(function () {
        let dl = nee = $(this).next('dl');
        // dl.toggle()
        dl.toggle();
        triangle($(this).parent());

        // 关闭上个点开的同级页面
        let dls1 = $(this).parent().siblings().children('dl');
        let lis = $(this).parent().siblings();
        dls1.hide();
        SDD();
        if ($(this).next('dl').css('display') != 'none') {
            triangle(lis);
        }

        // main 改换数据
        var dls = $(this).next('dl');
        // console.log(dls.length)  0 无下级页面
        if (dls.length == 0) {
            var card = $(this);
            var cardName = card.attr("name");
            var cards = {}
            for (let i = 1; i <= 3; i++) {
                var nn = 'card' + i;
                cards[nn] = (cardName != undefined) ? cardName : "";
                card = card.parent().parent().siblings('a');
                cardName = card.attr("name");
            }
            // console.log(cards.card1+''+cards.card2+''+cards.card3+'')
            htmlobj = $.ajax({
                type: "get",
                url: "data/" + cards.card3 + "/" + cards.card2 + "/" + cards.card1 + ".text",
                success: function (response) {
                    // console.log(htmlobj.responseText)
                    // console.log(response != '')
                    if (response != '') {
                        $('main').html(response);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                
                    console.log("data/" + cards.card3 + "/" + cards.card2 + "/" + cards.card1 + ".text")
             
                    // // 状态码
                    // console.log(XMLHttpRequest.status);
                    // // 状态
                    // console.log(XMLHttpRequest.readyState);
                    // // 错误信息   
                    // console.log(textStatus);
                    // console.log(errorThrown);
                }
            });
            // console.log("ajax数据请求完成后修改对象html，会给对象添加style")
            $('main').removeAttr("style");
        }

    });
}
// nav 的 dl , 添加样式
$('nav dd>a').click(function () {
    var dl = $(this).next('dl');
    var dd = $(this).parent();
    if (!dl.length) {
        //删除nav里 所有的a和dl的style
        $('nav dd>a').removeAttr("style");
        $('nav dd').removeAttr("style");

        //添加当前a的样式和a父级的背景色
        dd.css('background-color', 'rgb(0, 150, 136)'),
            $(this).css('color', 'white');
    }
})

// nav的三角形动画封装
function triangle(_this) {
    let spTop = {
        'border-color': 'transparent',
        'border-bottom-color': 'rgba(255,255,255,1)',
        'margin-top': '-9px',
    }
    let spBoT = {
        'border-color': 'transparent',
        'border-top-color': 'rgba(255,255,255,.7)',
        'margin-top': '-3px'
    }
    let span = _this.children("a").children('span');
    if (span.length == 1) {
        if (_this.children("dl").css('display') != 'none') {    //打开
            span.css(spTop)
        } else {
            span.css(spBoT)
        }
    } else {
        span.css(spBoT)
    }
}













/* header左侧点击缩放显示 */
HeadLI();
function SDD() {
    let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');
    $('header ul').first().css({ 'left': '220px' })
    $('nav').css({ width: '220px' })
    cite.show();
    $('main').css({ 'left': '220px', width: 'calc(100% - 220px)' })
    $('.Nav-header').children('span').css('display', 'inline');
    $('.Nav-header').children('img').css('display', 'none');

}
function HDD() {
    let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');
    $('header ul').first().css({ 'left': '60px' })
    $('nav').css({ width: '60px' })
    $('Nav-header').css({ 'background-image': "url('../img/logo.png') " })
    cite.hide();
    $('main').css({ 'left': '60px', width: 'calc(100% - 60px)' })

    $('nav dl').hide();
    $('.Nav-header').children('span').css('display', 'none');
    $('.Nav-header').children('img').css('display', 'inline');
}
function HeadLI() {
    let i = $('.header-left li').first().children('a');
    i.click(function () {
        let width = $('nav').width();
        let left = $('nav').position().left;
        let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');

        if (!left) {
            if (width <= 60) {//left = 220
                SDD();
                $(this).children('i').toggleClass("icon-shensuozuo").addClass("icon-shensuoyou");
            } else {
                HDD();
                $(this).children('i').toggleClass("icon-shensuoyou").addClass("icon-shensuozuo");
            }
        }
    })
}

//header右侧三点的缩放 和 贤心的hove
artBox()
function artBox() {
    $('#vision').on({
        click: function () {
            $('body').append(currency.harbour());
            $('#harbour').css({ 'top': -hei })

            $('#harbour').toggle();
            $('.artBox').css({ right: 0 });

            $('#harbour').on({
                click: function (event) {
                    var evt = event.target;
                    //事件，源 ( 点击的对象 )
                    // event.srcElement ? event.srcElement : event.target;  //兼容写法
                    if (evt.id == 'harbour') {
                        // alert("s")
                        $(this).toggle();
                        $('.artBox').css({ right: -300 });

                        setTimeout(function () {
                            $("#harbour").remove();
                            $(".artBox").remove();
                        }, 1000)
                    }
                }
            });
        }
    });


    var xianxin = $('.Head-dl').parent();
    var span = xianxin.children('a').children('span');
    xianxin.on({
        mouseenter: function () {
            $('.Head-dl').stop().slideDown();
            span.css({
                'border-color': 'transparent',
                'border-bottom-color': 'rgba(0,0,0)',
                'margin-top': '-9px',
            })
        },
        mouseleave: function () {
            $('.Head-dl').stop().slideUp();
            span.css({
                'border-color': 'transparent',
                'border-top-color': 'rgba(0,0,0)',
                'margin-top': '-3px',
            })
        }
    });
}

//点击放大
    $('.icon-quanping').click(function () {
        var docElm = document.documentElement;
        if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
            $('.icon-liebiaoshouqi').css('transform', 'rotate(0deg)')
        }
        if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    })

//媒体查询 屏幕大小变化

    /* var ss=document.getElementsByClassName('shuo');
    console.log(ss) */
    $(".list_dt").click(function () {
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
            /* $('.icon-zelvxuanzefeiyongdaosanjiaoxingfandui').css('transform', 'rotate(0deg)') */
        } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
            /*  $('.icon-zelvxuanzefeiyongdaosanjiaoxingfandui').css('transform', 'rotate(180deg)') */
        }
    });





    $(".list_dtt").click(function () {
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
        } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
        }
    });

    $('.icon-liebiaoshouqi').click(() => {
        if (Math.round($('.leftsidebar').width()) <= 60) {
            $('.leftsidebar').width('20px')
            $('.shuo').css({
                "opacity": '1'
            })
            $('.head').css("padding-left", '20px')
            $('.nr').css("padding-left", '20px')
            $('.icon-liebiaoshouqi').css('transform', 'rotate(0deg)')
            $('.logo').css("left", '0px')

        } else {
            $('.leftsidebar').width('60px')
            $('.head').css({
                "padding-left": '60px'
            })
            $('.shuo').css({
                "opacity": '0'
            })
            $('.nr').css({
                "padding-left": '60px'
            })
            $('.icon-liebiaoshouqi').css('transform', 'rotate(180deg)')
            $('.logo').css("left", '-180px')
        }
    })



    $(".icon-liebiaoshouqi").click(function () {
        $('.list_dd').stop();
        $('dd').siblings("dt").removeAttr("id");
        if ($("dd").attr("id") == "open") {
            $("dd").removeAttr("id").siblings("dd").slideUp();
        } else {
            $("dd").attr("id", "open").next().slideDown().siblings("dd").slideUp();

        }
    });


    $('.list_dt').click(() => {
        if (Math.round($('.leftsidebar').width()) <= 60) {
            $('.leftsidebar').width('20px')
            $('.shuo').css({
                "opacity": '1'
            })
            $('.head').css("padding-left", '20px')
            $('.nr').css("padding-left", '20px')
            $('.icon-liebiaoshouqi').css('transform', 'rotate(0deg)')
        }
    })


    $(window).resize(() => {
        $(window).width() <= 990 ? $('.leftsidebar').width('0px') : $('.leftsidebar').width('20px')
        $(window).width() <= 990 ? $('.shuo').css({
            "opacity": '0'
        }) : $('.shuo').css({
            "opacity": '1'
        })
        $(window).width() <= 990 ? $('.head').css({
            "padding-left": '0px'
        }) : $('.head').css({
            "padding-left": '20px'
        })
        $(window).width() <= 990 ? $('.logo').css({
            "left": '-20px'
        }) : $('.logo').css({
            "left": '0px'
        })
        $(window).width() <= 990 ? $('.nr').css({
            "padding-left": '0px'
        }) : $('.nr').css({
            "padding-left": '20px'
        })
        $(window).width() <= 990 ? $('.nr-one-yi').css({
            "width": '100%'
        }) : $('.nr-one-yi').css({
            "width": '49.9%'
        })
        $(window).width() <= 990 ? $('.nr-one-2').css({
            "width": '100%'
        }) : $('.nr-one').css({
            "width": '49.9%'
        })
        $(window).width() <= 990 ? $('.nr-one').css({
            "width": '100%'
        }) : $('.nr-one').css({
            "width": '65%'
        })
        $(window).width() <= 990 ? $('.nr-right').css({
            "width": '100%'
        }) : $('.nr-right').css({
            "width": '35%'
        })
        $(window).width() <= 990 ? $('.nr-right').css({
            "margin-top": '390px'
        }) : $('.nr-right').css({
            "margin-top": '45px'
        })
    })
    $(window).width() <= 990 ? $('.leftsidebar').width('0px') : $('.leftsidebar').width('20px')
    $(window).width() <= 990 ? $('.head').css({
        "padding-left": '0px'
    }) : $('.head').css({
        "padding-left": '20px'
    })
    $(window).width() <= 990 ? $('.nr').css({
        "padding-left": '0px'
    }) : $('.nr').css({
        "padding-left": '20px'
    })
    $(window).width() <= 990 ? $('.nr-one').css({
        "width": '100%'
    }) : $('.nr-one').css({
        "width": '65%'
    })
    $(window).width() <= 990 ? $('.nr-right').css({
        "width": '100%'
    }) : $('.nr-right').css({
        "width": '35%'
    })
    $(window).width() <= 990 ? $('.nr-right').css({
        "margin-top": '390px'
    }) : $('.nr-right').css({
        "margin-top": '45px'
    })
 