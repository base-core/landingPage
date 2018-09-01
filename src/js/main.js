//= anime.min.js

//= banner-animation.js

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	arrows: false,
	focusOnSelect: true
});

$(function () {

	function onScroll(event){
	    var scrollPos = $(document).scrollTop() + 70;
	    $('.menu a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.menu li').removeClass("active");
	            currLink.parent().addClass("active");
	        }
	        else{
	            currLink.parent().removeClass("active");
	        }
	    });
	}
	$(window).scroll(onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.menu li').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash;
        var menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
// ---------- MEDIUM INTEGRATION API ---------- 
    $.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40BaseCore', function(data) {

        // remove team arcile & get three feeds items
        var articles = data.items.filter(element => element.title !== "BaseCore Team: we create an investment tool of the new generation.").slice(0, 3);
        articles.forEach( function(element, index) {
            let description = element.description.split('p>')[1].split('</p')[0].substr(0, 100);
            description = description.substring(0, description.lastIndexOf(" "));

            // template for display articles
            $('.medium__container').append(`<div class="medium__publication --medium-padding">
                <div class="medium__publication__photo"><img width="318px" src="${element.thumbnail}"></div>
                <h4 class="publication__title"><a href="${element.link}" class="medium__publication__header">${element.title}</a></h4>
                <div class="medium__publication__article">
                    <p>${description}...</p>
                </div>
                <div class="link">
                    <p><a class="details" target="_blank" href="${element.link}">Read more...</a></p>
                </div>
            </div>`)
        });

        // get team article 
        var teamArticle = data.items.find(element => element.title == "BaseCore Team: we create an investment tool of the new generation.");
        teamArticle.description = teamArticle.description.split('p>')[1].split('</p')[0].substr(0, 100);

        // article template
        $('.about_team').append(` <div><img class="about_team__photo" src="${teamArticle.thumbnail}"></div>
            <div class="about_team__info">
                <div class="about_team__header">
                    <h2><a href="${teamArticle.link}">${teamArticle.title}</a></h2>
                </div>
                <div class="about_team__text">
                    <p>${teamArticle.description}...</p>
                    <p><a href="${teamArticle.link}">Read More...</a></p>
                </div>
            </div>`)


    });






    if (window.innerWidth <= 425) {
    	$('.features__list').slick({
    		slidesToShow: 1	,
    		slidesToScroll: 1,
    		arrows: false,
    		loop: true,
    		centerMode: true,
    	})
    }
// ---------- BURGER KING MENU ----------
$('#burger-king').click(function(event){
    $('.top-menu').toggleClass('active')
})

})

