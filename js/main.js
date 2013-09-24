//SMOOTH SCROLL
$(document).ready(function() {
	$("nav a, .back-top a").smoothScroll({speed:1500});

});

//Toggle fucntion to select and de-select each model in the "meet our models section"
$('.selectThis').click(function(){
	$(this).parent().toggleClass('selected');
});

// A FANCYBOX STARTER (single lightbox when you click on each model image in "meet our models section")
$(document).ready(function() {
		$(".fancybox").fancybox();
});

$.fn.isOnScreen = function(){
     
// RESPONSIVE NAV (responsive nav- when scrolling moves from bottom of top of page- this piece of js was copied from another source)
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
     
};

// NAV .fixed at the top of page once you have scrolled
window.onscroll = function(){
	if($('#landingImage').isOnScreen()){
		$('.desktop #nav').removeClass('fixed');
	}else{
		$('.desktop #nav').addClass('fixed');
	};
};
