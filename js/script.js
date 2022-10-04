$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed: 1500,
    autoplayHoverPause:true,
    responsive:{
        1000:{
            items:1
        }
    }
})
//menu.html

$(".desserts").hide("slow")
$(".snecks").hide("slow")
$(".teas").hide("slow")
$('.tabs-links a').on('click', function() {
    let href = $(this).attr("href")
    $('.tab-content').hide("slow")
    $(href).show(2000)
})