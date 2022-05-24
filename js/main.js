/*
	The7 by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(document).ready(function() {

  /**
   * Author: Heather Corey
   * jQuery Simple Parallax Plugin
   *
   */
   
  (function($) {
   
      $.fn.parallax = function(options) {
   
          var windowHeight = $(window).height();
   
          // Establish default settings
          var settings = $.extend({
              speed        : 0.15
          }, options);
   
          // Iterate over each object in collection
          return this.each( function() {
   
            // Save a reference to the element
            var $this = $(this);
   
            // Set up Scroll Handler
            $(document).scroll(function(){
   
                  var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
   
            // Check if above or below viewport
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return;
        }
   
        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
   
                          // Apply the Y Background Position to Set the Parallax Effect
            $this.css('background-position', 'center ' + yBgPosition + 'px');
                  
            });
          });
      }
  }(jQuery));

//Loader
$(window).load(function() {
	$(".loader-overlay").fadeOut("slow");
})

$('a[data-rel^=lightcase]').lightcase();

// Parallax
$('.parallax-section').parallax({
          speed : .100
        });

// Navigation
  $('.nav-container').onePageNav({
    scrollSpeed: 600,
    currentClass: 'current',
    changeHash: true,
    filter: ':not(.external)'
  });
});