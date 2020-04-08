$(document).ready(function(){
  $('.header').slick( {
    slidesToShow: 2,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          infinite: true,
          autoplay: true
        }
      }
  ]
  });
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__nav'),
          menuItem = document.querySelectorAll('.promo__nav_item'),
          hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__nav_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__nav_active');
        });
    });
  });
  
  $('.decision__opportunity_item').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      centerPadding: '50px',
      arrows: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.carousel'
    });
  $('.carousel').slick({
      slidesToShow: 1,
      cssEase: 'linear',
      speed: 500,
      infinite: false,
      Dots: false,
      fade: true,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftbutton.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/rightbutton.svg"></button>',
      asNavFor: '.decision__opportunity_item',
      responsive: [
          {
            breakpoint: 1080,
            settings: {
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 769,
            settings: {
              dots: false,
              arrows: false,
              slidesToShow: 1,
              fade: false
            }
          }
      ]
  });
  $('[data-modal=zbs]').on('click', function() {
    $('.overlay, #zbs').fadeIn('slow');
  });
  $('.modalw__close').on('click', function() {
	  $('.overlay, #zbs, #thanks').fadeOut();
  });

  function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        } ,
        phone:"Пожалйста, введите свой номер телефона",
        email: {
          required:"Пожалуйста, введите свою почту",
          email:"Неправильно введен адрес почты"
        }
      }
    });
  }
  validateForms('.feed-form');


  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#zbs').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
		$('.pageup').fadeIn();
		} else {
		$('.pageup').fadeOut();
		}
	});
	$("a[href=#up]").click(function(){
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
	});
	
});


