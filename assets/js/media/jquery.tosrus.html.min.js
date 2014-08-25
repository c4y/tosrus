/*	
 * jQuery Touch Optimized Sliders "R"Us
 * HTML media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(i){var n="tosrus",e="html";i[n].media[e]={filterAnchors:function(n){return"#"==n.slice(0,1)&&i(n).is("div")},initAnchors:function(e,t){i('<div class="'+i[n]._c("html")+'" />').append(i(t)).appendTo(e),e.removeClass(i[n]._c.loading).trigger(i[n]._e.loaded)},filterSlides:function(i){return i.is("div")},initSlides:function(){}}}(jQuery);