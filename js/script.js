window.addEventListener('DOMContentLoaded', function() {
    $('.promo-slider').slick({
        slideToShow: 1,
        dots: false,
        infinite: true,
        fade: true,
        arrows: true,
        autoplay: true,
        autoplayTime: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/button-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/button-right.png"></button>',
        responsive:[
            {
                breakpoint: 599,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.decision-slider').slick({
        slideToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
    });
    $('.check-slider').slick({
        slideToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left.png">Назад</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right.png"></button>',
    });

    let currentArticle = $('.check-slider').slick('slickCurrentSlide');
    let totalArticles = $('.check-slider').slideCount;
    $('.check-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        currentArticle = $('.check-slider').slick('slickCurrentSlide');
        totalArticles = slick.slideCount;
        slickArrow();
    });
    slickArrow();
    function slickArrow() {  
        if(currentArticle==0){
           $('.slick-prev').hide();
        }else{
           $('.slick-prev').show();
        }
        if (currentArticle==totalArticles-1){
            $('.slick-next').hide();
        }else{
            $('.slick-next').show();
        }
    }

    const dropItem = document.querySelectorAll('.drop-item');

        for(let i = 0; i < dropItem.length; i++) {
            dropItem[i].addEventListener('mouseenter', showSub, false);
            dropItem[i].addEventListener('mouseleave', hideSub, false);
        }

        function showSub(e) {
            if(this.children.length > 1) {
                this.children[1].style.height = 'auto';
                this.children[1].style.opacity = '1';
            } else {
                return false;
            }
        };
        function hideSub(e) {
            if(this.children.length > 1) {
                this.children[1].style.height = '0px';
                this.children[1].style.opacity = '0';
            } else {
                return false;
            }
        }
    
    const slider = document.getElementById('myRange'),
          output = document.getElementById("demo");
    
    output.innerHTML = slider.value + ' м²';
    
    slider.addEventListener('input', function() {
        output.innerHTML = this.value + ' м²';
    });

    const range = document.getElementById('range'),
          priceFrom = document.querySelector('.price-from'),
          priceTo = document.querySelector('.price-to'),
          square = document.querySelector('.square');
    square.innerHTML = range.value + ' м²';
    priceFrom.innerHTML = range.value * 166;
    priceTo.innerHTML = range.value * 222;

    range.addEventListener('input', function() {
        square.innerHTML = this.value + ' м²';
        priceFrom.innerHTML = this.value * 166;
        priceTo.innerHTML = this.value * 222;
    });
    
    
    const plusBtn = document.querySelectorAll('.plus'),
    minusBtn = document.querySelectorAll('.minus'),
    quantity = document.querySelectorAll('.quantit');
    let t = 1,
        s = 1,
        r = 1;

    plusBtn[0].addEventListener('click', function plusQ(e) {
        e.preventDefault();
        quantity[0].innerHTML = ++t + ' шт';
        if (t < 1) {
            minusBtn[0].classList.add('disable');
        }
    });

    plusBtn[1].addEventListener('click', function plusQ(e) {
        e.preventDefault();
        quantity[1].innerHTML = ++s + ' шт';
        if (s < 1) {
            minusBtn[1].classList.add('disable');
        } 

    });
    plusBtn[2].addEventListener('click', function plusQ(e) {
        e.preventDefault();
        quantity[2].innerHTML = ++r + ' шт';
        if (r < 1) {
            minusBtn[2].classList.add('disable');
        } 

    });

    minusBtn[0].addEventListener('click', function minusQ(e) {
        e.preventDefault();
        if (t > 0) {
            minusBtn[0].classList.remove('disable');
            quantity[0].innerHTML = --t + ' шт';
        }

    });

    minusBtn[1].addEventListener('click', function minusQ(e) {
        e.preventDefault();
        if (s > 0) {
            minusBtn[1].classList.remove('disable');
            quantity[1].innerHTML = --s + ' шт';
        }

    });
    minusBtn[2].addEventListener('click', function minusQ(e) {
        e.preventDefault(); 
        if (r > 0) {
            minusBtn[2].classList.remove('disable');
            quantity[2].innerHTML = --r + ' шт';
        }

    });
    // for(i = 0; i < plusBtn.length; i++) {
    //    (function(i) {
    //        let button = plusBtn[i];
    //        button.addEventListener('click', function() {
    //            quantity[i].innerHTML = ++t;
               
    //        });
           
    //    })(i);
    // };
    // for(i = 0; i < minusBtn.length; i++) {
    //     (function(i) {
    //         let button = minusBtn[i];
    //         button.addEventListener('click', function() {
    //             quantity[i].innerHTML = --t;
    //         })
    //     })(i);
    //  };
     const images = () => {
        const imgPopup = document.createElement('div'),
              workSection = document.querySelector('.calc-sm-grid'),
              bigImage = document.createElement('img');
    
        imgPopup.classList.add('popup');
        workSection.appendChild(imgPopup);
    
        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.display = 'none';
    
        imgPopup.appendChild(bigImage);
    
        workSection.addEventListener('click', (e) => {
            e.preventDefault();
    
            let target = e.target;
    
            if (target && target.classList.contains('preview')) {
                imgPopup.style.display = 'flex';
                const path = target.parentNode.getAttribute('href');
                bigImage.setAttribute('src', path);
            }
            if(target && target.matches('div.popup')) {
                imgPopup.style.display = 'none';
            }
        });
    };
    images();

    const dataLinks = document.querySelectorAll('.p-data'),
          dataOverlay = document.querySelector('.data-overlay');

    dataLinks.forEach((dataLink) => 
        dataLink.addEventListener('click', (e) => {
            dataOverlay.style.display = 'block';
            let target = e.target;
            if(target && target.matches('div.popup')) {
                dataOverlay.style.display = 'none';
            }
        })
    )
    const modals = () => {
        function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
            const trigger = document.querySelectorAll(triggerSelector),
                  modal = document.querySelector(modalSelector),
                  close = document.querySelector(closeSelector),
                  windows = document.querySelectorAll('[data-modal]');
            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target) { //проверка есть ли ивент
                        e.preventDefault();
                    }
                    
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
                    
                    modal.style.display = "flex";
                    document.body.style.overflow = "hidden";
                });
            })
            close.addEventListener('click', () => {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                
                modal.style.display = "none";
                document.body.style.overflow = "";
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal && closeClickOverlay) {
                    
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
    
                    modal.style.display = "none";
                    document.body.style.overflow = "";
                }
            })
        }
        bindModal('.p-data', '.data-overlay', '.close-popup');
        bindModal('[data-target=consultation]', '#thanksblock', '.close-pop');
    };
    modals();

    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            $("#exitblock").fadeIn("fast");
        }    
    });
    $(document).click(function(e) {
        if (($("#exitblock").is(':visible')) && (!$(e.target).closest("#exitblock .exit-layer").length)) {
            $("#exitblock").remove();
        }
    });
    $(document).click(function(e) {
        if(($('#thanksblock').is(':visible')) && (!$(e.target).closest('#thanksblock .exit-layer').length)) {
            $('#exitblock').remove();
        }
    })

    // $(document).ready(function() {
    //     if (YMaps.location){  
    //         if (YMaps.location.city == ('Тюмень') || YMaps.location.city == ('Нягань') || YMaps.location.city == ('Ханты-Мансийск')) {
    //             $(".city").val(YMaps.location.city)
    //         } else {
    //             $('.modal-no-location').fadeIn('fast');
    //         }
    //     } else {
    //         $('.modal-no-location').fadeIn('fast');
    //      };
            
    // });
    // $(document).click(function(e) {
    //     if (($(".modal-no-location").is(':visible')) && (!$(e.target).closest(".modal-no-location .location-layer").length)) {
    //         $(".modal-no-location").remove();
    //     }
    // });
   


    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "./mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });
    const burgMenu = document.querySelector('.header-wrap'),
        burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        burgMenu.classList.toggle('header-wrap-active');
    });

    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    $(document).ready(function() {
        $('.modal-no-location').fadeIn('fast');
    });
    $('.location-confirm').click(function() {
        let textSelect = $('#cityselect option:selected').text();
        let valueSelect = $('#cityselect').val();
        $(".modal-no-location").remove();
        $('.location-city').html(textSelect);
        if (valueSelect == 1) {
            $(".phone-1").html('8 922 002 46 16');
            $(".phone-2").html('8 3452 60 15 60');
        } else if (valueSelect == 2) {
            $(".phone-1").html('8 952 687 32 63');
            $(".phone-2").html('8 346 722 42 61');
        } else if (valueSelect == 3) {
            $(".phone-1").html('8 952 687 32 63');
            $(".phone-2").html('8 346 729 99 29');
        }
        
    });

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheel: true,
        keyboard: true,
        speed: 500,
        adaptiveHeight: true,
        shortSwipes: false,
    });
    
    const checkedImg = document.querySelectorAll('.img-grid-c');

    checkedImg.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('img-grid-checked');
        })
    });

    $('.img-grid-r').click(function() {
        $('.img-grid-r.img-grid-checked').removeClass('img-grid-checked');
        $(this).addClass('img-grid-checked');
    });
});

