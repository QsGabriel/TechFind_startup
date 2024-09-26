$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    // const scrollPosition = $(window).scrollTop() - header.outerHeight();
    const scrollPosition = $(window).scrollTop();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1");
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  $(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });

  ScrollReveal().reveal("#home", {
    origin: "top",
    duration: 2000,
    distance: "40%",
  });

  ScrollReveal().reveal("#menu", {
    origin: "right",
    duration: 2000,
    distance: "40%",
  });

  ScrollReveal().reveal("#testimonials", {
    origin: "left",
    duration: 2000,
    distance: "40%",
  });

  ScrollReveal().reveal(".feedback", {
    origin: "right",
    duration: 2000,
    distance: "40%",
  });
});

  ScrollReveal().reveal("#aboutus", {
  origin: "left",
  duration: 2000,
  distance: "40%",
  });

  
  