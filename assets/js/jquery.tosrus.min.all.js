/*
 *	jQuery Touch Optimized Sliders "R"Us 2.1.4
 *	
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	tosrus.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
!function(s){function i(){o=function(s){return t+"-"+s},d=function(s){return t+"-"+s},r=function(s){return s+"."+t},s.each([o,d,r],function(s,i){i.add=function(s){s=s.split(" ");for(var e in s)i[s[e]]=i(s[e])}}),o.add("touch desktop scale-1 scale-2 scale-3 wrapper opened opening fixed inline hover slider slide loading noanimation fastanimation"),d.add("slide anchor"),r.add("open opening close closing prev next slideTo sliding click pinch scroll resize orientationchange load loading loaded transitionend webkitTransitionEnd"),a={complObject:function(i,e){return s.isPlainObject(i)||(i=e),i},complBoolean:function(s,i){return"boolean"!=typeof s&&(s=i),s},complNumber:function(i,e){return s.isNumeric(i)||(i=e),i},complString:function(s,i){return"string"!=typeof s&&(s=i),s},isPercentage:function(s){return"string"==typeof s&&"%"==s.slice(-1)},getPercentage:function(s){return parseInt(s.slice(0,-1))},resizeRatio:function(s,i,e,t,n){var o=i.width(),d=i.height();e&&o>e&&(o=e),t&&d>t&&(d=t),n>o/d?d=o/n:o=d*n,s.width(o).height(d)},transitionend:function(s,i,e){var t=!1,n=function(){t||i.call(s[0]),t=!0};s.one(r.transitionend,n),s.one(r.webkitTransitionEnd,n),setTimeout(n,1.1*e)},setViewportScale:function(){if(l.viewportScale){var s=l.viewportScale.getScale();"undefined"!=typeof s&&(s=1/s,l.$body.removeClass(o["scale-1"]).removeClass(o["scale-2"]).removeClass(o["scale-3"]).addClass(o["scale-"+Math.max(Math.min(Math.round(s),3),1)]))}}},l={$wndw:s(window),$html:s("html"),$body:s("body"),scrollPosition:0,viewportScale:null,viewportScaleInterval:null},l.$body.addClass(s[e].support.touch?o.touch:o.desktop),l.$wndw.on(r.scroll,function(s){l.$body.hasClass(o.opened)&&(window.scrollTo(0,l.scrollPosition),s.preventDefault(),s.stopPropagation(),s.stopImmediatePropagation())}),!l.viewportScale&&s[e].support.touch&&"undefined"!=typeof FlameViewportScale&&(l.viewportScale=new FlameViewportScale,a.setViewportScale(),l.$wndw.on(r.orientationchange+" "+r.resize,function(){l.viewportScaleInterval&&(clearTimeout(l.viewportScaleInterval),l.viewportScaleInterval=null),l.viewportScaleInterval=setTimeout(function(){a.setViewportScale()},500)})),s[e]._c=o,s[e]._d=d,s[e]._e=r,s[e]._f=a,s[e]._g=l}var e="tosrus",t="tos",n="2.1.4";if(!s[e]){var o={},d={},r={},a={},l={};s[e]=function(s,i,e){return this.$node=s,this.opts=i,this.conf=e,this.vars={},this.nodes={},this.slides={},this._init(),this},s[e].prototype={_init:function(){var i=this;this._complementOptions(),this.vars.fixed="window"==this.opts.wrapper.target,this.nodes.$wrpr=s('<div class="'+o.wrapper+'" />'),this.nodes.$sldr=s('<div class="'+o.slider+'" />').appendTo(this.nodes.$wrpr),this.nodes.$wrpr.addClass(this.vars.fixed?o.fixed:o.inline).addClass(o("fx-"+this.opts.effect)).addClass(o(this.opts.slides.scale)).addClass(this.opts.wrapper.classes),this.nodes.$wrpr.on(r.open+" "+r.close+" "+r.prev+" "+r.next+" "+r.slideTo,function(s){arguments=Array.prototype.slice.call(arguments);var s=arguments.shift(),e=s.type;s.stopPropagation(),"function"==typeof i[e]&&i[e].apply(i,arguments)}).on(r.opening+" "+r.closing+" "+r.sliding+" "+r.loading+" "+r.loaded,function(s){s.stopPropagation()}).on(r.click,function(s){switch(s.stopPropagation(),i.opts.wrapper.onClick){case"toggleUI":i.nodes.$wrpr.toggleClass(o.hover);break;case"close":i.close()}}),s.fn.hammer&&s[e].support.touch&&this.nodes.$wrpr.hammer().on(r.pinch,function(s){l.$body.hasClass(o.opened)&&(s.gesture.preventDefault(),s.stopPropagation())}),this.nodes.$anchors=this._initAnchors(),this.nodes.$slides=this._initSlides(),this.slides.total=this.nodes.$slides.length,this.slides.visible=this.opts.slides.visible,this.slides.index=0,this.vars.opened=!0;for(var t=0;t<s[e].addons.length;t++)s.isFunction(this["_addon_"+s[e].addons[t]])&&this["_addon_"+s[e].addons[t]]();for(var n=0;n<s[e].ui.length;n++)this.nodes.$wrpr.find("."+o[s[e].ui[n]]).length&&this.nodes.$wrpr.addClass(o("has-"+s[e].ui[n]));this.vars.fixed?(this.nodes.$wrpr.appendTo(l.$body),this.close(!0)):(this.nodes.$wrpr.appendTo(this.opts.wrapper.target),this.opts.show?(this.vars.opened=!1,this.open(0,!0)):this.close(!0))},open:function(i,e){var t=this;this.vars.opened||(this.vars.fixed&&(l.scrollPosition=l.$wndw.scrollTop(),l.$body.addClass(o.opened),a.setViewportScale()),e?this.nodes.$wrpr.addClass(o.opening).trigger(r.opening,[i,e]):setTimeout(function(){t.nodes.$wrpr.addClass(o.opening).trigger(r.opening,[i,e])},5),this.nodes.$wrpr.addClass(o.hover).addClass(o.opened)),this.vars.opened=!0,this._loadContents(),s.isNumeric(i)&&(e=e||!this.vars.opened,this.slideTo(i,e))},close:function(i){this.vars.opened&&(this.vars.fixed&&l.$body.removeClass(o.opened),i?this.nodes.$wrpr.removeClass(o.opened):a.transitionend(this.nodes.$wrpr,function(){s(this).removeClass(o.opened)},this.conf.transitionDuration),this.nodes.$wrpr.removeClass(o.hover).removeClass(o.opening).trigger(r.closing,[this.slides.index,i])),this.vars.opened=!1},prev:function(i,e){s.isNumeric(i)||(i=this.opts.slides.slide),this.slideTo(this.slides.index-i,e)},next:function(i,e){s.isNumeric(i)||(i=this.opts.slides.slide),this.slideTo(this.slides.index+i,e)},slideTo:function(i,t){if(!this.vars.opened)return!1;if(!s.isNumeric(i))return!1;var n=!0;if(0>i){var d=0==this.slides.index;this.opts.infinite?i=d?this.slides.total-this.slides.visible:0:(i=0,d&&(n=!1))}if(i+this.slides.visible>this.slides.total){var l=this.slides.index+this.slides.visible>=this.slides.total;this.opts.infinite?i=l?0:this.slides.total-this.slides.visible:(i=this.slides.total-this.slides.visible,l&&(n=!1))}if(this.slides.index=i,this._loadContents(),n){var h=0-this.slides.index*this.opts.slides.width+this.opts.slides.offset;this.slides.widthPercentage&&(h+="%"),t&&(this.nodes.$sldr.addClass(o.noanimation),a.transitionend(this.nodes.$sldr,function(){s(this).removeClass(o.noanimation)},5));for(var c in s[e].effects)if(c==this.opts.effect){s[e].effects[c].call(this,h,t);break}this.nodes.$wrpr.trigger(r.sliding,[i,t])}},_initAnchors:function(){var i=this,t=s();if(this.$node.is("a"))for(var n in s[e].media)t=t.add(this.$node.filter(function(){return s[e].media[n].filterAnchors.call(i,s(this).attr("href"))}));return t},_initSlides:function(){return this[this.$node.is("a")?"_initSlidesFromAnchors":"_initSlidesFromContent"](),this.nodes.$sldr.children().css("width",this.opts.slides.width+(this.slides.widthPercentage?"%":"px"))},_initSlidesFromAnchors:function(){var i=this;this.nodes.$anchors.each(function(e){var t=s(this),n=s('<div class="'+o.slide+" "+o.loading+'" />').data(d.anchor,t).appendTo(i.nodes.$sldr);t.data(d.slide,n).on(r.click,function(s){s.preventDefault(),i.open(e)})})},_initSlidesFromContent:function(){var i=this;this.$node.children().each(function(){var t=s(this);s('<div class="'+o.slide+'" />').append(t).appendTo(i.nodes.$sldr);for(var n in s[e].media)if(s[e].media[n].filterSlides.call(i,t)){s[e].media[n].initSlides.call(i,t),t.parent().addClass(o(n));break}})},_loadContents:function(){var s=this;switch(this.opts.slides.load){case"all":this._loadContent(0,this.slides.total);break;case"visible":this._loadContent(this.slides.index,this.slides.index+this.slides.visible);break;case"near-visible":default:this._loadContent(this.slides.index,this.slides.index+this.slides.visible),setTimeout(function(){s._loadContent(s.slides.index-s.slides.visible,s.slides.index),s._loadContent(s.slides.index+s.slides.visible,s.slides.index+2*s.slides.visible)},this.conf.transitionDuration)}},_loadContent:function(i,t){var n=this;this.nodes.$slides.slice(i,t).each(function(){var i=s(this);if(0==i.children().length){var t=i.data(d.anchor).attr("href");for(var a in s[e].media)if(s[e].media[a].filterAnchors.call(n,t)){s[e].media[a].initAnchors.call(n,i,t),i.addClass(o(a));break}i.trigger(r.loading,[i.data(d.anchor)])}})},_complementOptions:function(){if("undefined"==typeof this.opts.wrapper.target&&(this.opts.wrapper.target=this.$node.is("a")?"window":this.$node),"window"!=this.opts.wrapper.target&&"string"==typeof this.opts.wrapper.target&&(this.opts.wrapper.target=s(this.opts.wrapper.target)),this.opts.show=a.complBoolean(this.opts.show,"window"!=this.opts.wrapper.target),s.isNumeric(this.opts.slides.width))this.slides.widthPercentage=!1,this.opts.slides.visible=a.complNumber(this.opts.slides.visible,1);else{var i=a.isPercentage(this.opts.slides.width)?a.getPercentage(this.opts.slides.width):!1;this.slides.widthPercentage=!0,this.opts.slides.visible=a.complNumber(this.opts.slides.visible,i?Math.floor(100/i):1),this.opts.slides.width=i?i:Math.ceil(1e4/this.opts.slides.visible)/100}this.opts.slides.slide=a.complNumber(this.opts.slides.slide,this.opts.slides.visible),this.opts.slides.offset=a.isPercentage(this.opts.slides.offset)?a.getPercentage(this.opts.slides.offset):a.complNumber(this.opts.slides.offset,0)}},s.fn[e]=function(t,n,o,d){l.$wndw||i(),t=s.extend(!0,{},s[e].defaults,t),t=s.extend(!0,{},t,s[e].support.touch?o:n),d=s.extend(!0,{},s[e].configuration,d);var r=new s[e](this,t,d);return this.data(e,r),r.nodes.$wrpr},s[e].support={touch:"ontouchstart"in window.document},s[e].defaults={infinite:!1,effect:"slide",wrapper:{classes:"",onClick:"toggleUI"},slides:{offset:0,scale:"fit",load:"near-visible",visible:1}},s[e].configuration={transitionDuration:400},s[e].debug=function(){},s[e].deprecated=function(s,i){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn(e+": "+s+" is deprecated, use "+i+" instead.")},s[e].effects={slide:function(s){this.nodes.$sldr.css("left",s)},fade:function(i){a.transitionend(this.nodes.$sldr,function(){s(this).css("left",i).css("opacity",1)},this.conf.transitionDuration),this.nodes.$sldr.css("opacity",0)}},s[e].version=n,s[e].media={},s[e].addons=[],s[e].ui=[]}}(jQuery);
/*	
 *	jQuery Touch Optimized Sliders "R"Us
 *	Buttons addon
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(s){function e(e,n){return s('<a class="'+t[e]+n+'" href="#"><span></span></a>')}function n(s,e,n,t){e.on(o.click,function(e){e.preventDefault(),e.stopPropagation(),s.trigger(o[n],[t])})}var t,i,o,d,p,l="tosrus",r="buttons",a=!1;s[l].prototype["_addon_"+r]=function(){a||(t=s[l]._c,i=s[l]._d,o=s[l]._e,d=s[l]._f,p=s[l]._g,t.add("prev next close disabled"),a=!0);var u=this,h=this.opts[r];this.nodes.$prev=null,this.nodes.$next=null,this.nodes.$clse=null,("boolean"==typeof h||"string"==typeof h&&"inline"==h)&&(h={prev:h,next:h}),"undefined"==typeof h.close&&(h.close=this.vars.fixed),this.nodes.$slides.length<2&&(h.prev=!1,h.next=!1),s.each({prev:"prev",next:"next",close:"clse"},function(i,d){h[i]&&("string"==typeof h[i]&&"inline"==h[i]?u.vars.fixed&&"close"!=i&&u.nodes.$slides.on(o.loading,function(){var o=e(i," "+t.inline)["prev"==i?"prependTo":"appendTo"](this);n(u.nodes.$wrpr,o,i,1),("prev"==i&&s(this).is(":first-child")||"next"==i&&s(this).is(":last-child"))&&o.addClass(t.disabled)}):("string"==typeof h[i]&&(h[i]=s(h[i])),u.nodes["$"+d]=h[i]instanceof s?h[i]:e(i,"").appendTo(u.nodes.$wrpr),n(u.nodes.$wrpr,u.nodes["$"+d],i,null)))}),this.opts.infinite||(this.updateButtons(),this.nodes.$wrpr.on(o.sliding,function(){u.updateButtons()}))},s[l].prototype.updateButtons=function(){this.nodes.$prev&&this.nodes.$prev[(this.slides.index<1?"add":"remove")+"Class"](t.disabled),this.nodes.$next&&this.nodes.$next[(this.slides.index>=this.slides.total-this.slides.visible?"add":"remove")+"Class"](t.disabled)},s[l].defaults[r]={prev:!s[l].support.touch,next:!s[l].support.touch},s[l].addons.push(r),s[l].ui.push("prev"),s[l].ui.push("next"),s[l].ui.push("close")}(jQuery);
/*	
 *	jQuery Touch Optimized Sliders "R"Us
 *	Caption addon
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(t){var a,i,s,e,n,d="tosrus",r="caption",o=!1;t[d].prototype["_addon_"+r]=function(){o||(a=t[d]._c,i=t[d]._d,s=t[d]._e,e=t[d]._f,n=t[d]._g,a.add("caption uibg"),i.add("caption"),o=!0);var p=this,c=this.opts[r];t.isArray(c)&&t[d].deprecated('An array for the option "caption"','the option "caption.attributes"'),c.add&&this.vars.fixed&&("string"==typeof c.target&&(c.target=t(c.target)),c.target instanceof t?this.nodes.$capt=c.target:(this.nodes.$capt=t('<div class="'+a.caption+'" />').appendTo(this.nodes.$wrpr),this.nodes.$uibg||(this.nodes.$uibg=t('<div class="'+a.uibg+'" />').prependTo(this.nodes.$wrpr))),c.attributes=c.attributes||[],this.nodes.$anchors.each(function(){var a=t(this),s=a.data(i.slide);s.data(i.caption,"");for(var e=0,n=c.attributes.length;n>e;e++){var d=a.attr(c.attributes[e]);if(d&&d.length){s.data(i.caption,d);break}}}),this.nodes.$wrpr.on(s.sliding,function(){var t=p.nodes.$sldr.children().eq(p.slides.index).data(i.caption)||"";p.nodes.$capt.text(t)[t.length>0?"removeClass":"addClass"](a.disabled)}))},t[d].defaults[r]={add:!1,target:null,attributes:["title","rel"]},t[d].addons.push(r),t[d].ui.push("caption")}(jQuery);
/*	
 *	jQuery Touch Optimized Sliders "R"Us
 *	Drag addon
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(e){if(e.fn.hammer){var t,s,r,n,i,a="tosrus",o="drag",d=!1;e[a].prototype["_addon_"+o]=function(){d||(t=e[a]._c,s=e[a]._d,r=e[a]._e,n=e[a]._f,i=e[a]._g,r.add("dragstart dragend dragleft dragright swipeleft swiperight"),d=!0);var l=this;if(this.opts[o]&&"slide"==this.opts.effect&&this.nodes.$slides.length>1){var f=0,g=!1,u=!1;this.nodes.$wrpr.hammer().on(r.dragstart,function(e){e.stopPropagation(),e.gesture&&(e.gesture.preventDefault(),l.nodes.$sldr.addClass(t.noanimation))}).on(r.dragleft+" "+r.dragright,function(e){e.stopPropagation(),e.gesture&&(e.gesture.preventDefault(),f=e.gesture.deltaX,g=e.gesture.direction,u=!1,("left"==g&&l.slides.index+l.slides.visible>=l.slides.total||"right"==g&&0==l.slides.index)&&(f/=2.5),l.nodes.$sldr.css("margin-left",Math.round(f)))}).on(r.swipeleft+" "+r.swiperight,function(e){e.stopPropagation(),e.gesture&&(e.gesture.preventDefault(),u=!0)}).on(r.dragend,function(e){if(e.stopPropagation(),e.gesture){if(e.gesture.preventDefault(),l.nodes.$sldr.removeClass(t.noanimation).addClass(t.fastanimation),n.transitionend(l.nodes.$sldr,function(){l.nodes.$sldr.removeClass(t.fastanimation)},l.conf.transitionDuration/2),l.nodes.$sldr.css("margin-left",0),"left"==g||"right"==g){if(u)var s=l.slides.visible;else var i=l.nodes.$slides.first().width(),s=Math.floor((Math.abs(f)+i/2)/i);s>0&&l.nodes.$wrpr.trigger(r["left"==g?"next":"prev"],[s])}g=!1}})}},e[a].defaults[o]=e[a].support.touch,e[a].addons.push(o)}}(jQuery);
/*	
 *	jQuery Touch Optimized Sliders "R"Us
 *	Keys addon
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(e){var t,o,s,n,r,a="tosrus",p="keys",d=!1;e[a].prototype["_addon_"+p]=function(){d||(t=e[a]._c,o=e[a]._d,s=e[a]._e,n=e[a]._f,r=e[a]._g,s.add("keyup"),d=!0);var c=this,i=this.opts[p];"boolean"==typeof i&&i&&(i={prev:37,next:39,close:27}),e.isPlainObject(i)&&(this.nodes.$slides.length<2&&(i.prev=!1,i.next=!1),e(document).on(s.keyup,function(e){if(c.vars.opened){var t=!1;switch(e.keyCode){case i.prev:t=s.prev;break;case i.next:t=s.next;break;case i.close:t=s.close}t&&(e.preventDefault(),e.stopPropagation(),c.nodes.$wrpr.trigger(t))}}))},e[a].defaults[p]=!1,e[a].addons.push(p)}(jQuery);
/*	
 *	jQuery Touch Optimized Sliders "R"Us
 *	Pagination addon
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */

 (function( $ ) {
 
 	var _PLUGIN_ = 'tosrus',
		_ADDON_  = 'pagination';

	var _addonInitiated = false,
		_c, _d, _e, _f, _g;

	$[ _PLUGIN_ ].prototype[ '_addon_' + _ADDON_ ] = function()
	{		
		if ( !_addonInitiated )
		{
			_c = $[ _PLUGIN_ ]._c;
			_d = $[ _PLUGIN_ ]._d;
			_e = $[ _PLUGIN_ ]._e;
			_f = $[ _PLUGIN_ ]._f;
			_g = $[ _PLUGIN_ ]._g;

			_c.add( 'pagination selected uibg bullets thumbnails' );

			_addonInitiated = true;
		}

		var that = this,
			pagr = this.opts[ _ADDON_ ];


		//	DEPRECATED
		if ( typeof pagr == 'boolean' )
		{
			$[ _PLUGIN_ ].deprecated( 'A boolean for the option "pagination"', 'the option "pagination.add"' );
		}
		if ( typeof pagr == 'string' )
		{
			$[ _PLUGIN_ ].deprecated( 'A string for the option "pagination"', 'the option "pagination.target"' );
		}
		if ( pagr instanceof $ )
		{
			$[ _PLUGIN_ ].deprecated( 'A jQuery object for the option "pagination"', 'the option "pagination.target"' );
		}
		//	/DEPRECATED


		if ( this.nodes.$slides.length < 2 )
		{
			pagr.add = false;
		}

		if ( pagr.add )
		{
			if ( typeof pagr.target == 'string' )
			{
				pagr.target = $(pagr.target);
			}
			if ( pagr.target instanceof $ )
			{
				this.nodes.$pagr = pagr.target;
			}
			else
			{
				this.nodes.$pagr = $('<div class="' + _c.pagination + ' ' + _c[ pagr.type ] + '" />').appendTo( this.nodes.$wrpr );
				if ( !this.nodes.$uibg )
				{
					this.nodes.$uibg = $('<div class="' + _c.uibg + '" />').prependTo( this.nodes.$wrpr );
				}
			}

			if ( typeof pagr.anchorBuilder != 'function' )
			{
				switch( pagr.type )
				{
					case 'thumbnails':
						if ( this.vars.fixed )
						{
							pagr.anchorBuilder = function( index )
							{
								return '<a href="#" style="background-image: url(' + $(this).data( _d.anchor ).attr( 'href' ) + ');"></a>';
							};
						}
						else
						{
							pagr.anchorBuilder = function( index )
							{
								return '<a href="#" style="background-image: url(' + $(this).find( 'img' ).attr( 'src' ) + ');"></a>';
							};
						}
						break;

					case 'bullets':
					default:
						pagr.anchorBuilder = function( index )
						{
							return '<a href="#"></a>';
						};
						break;
				}
			}

			this.nodes.$slides
				.each(
					function( index )
					{
						$(pagr.anchorBuilder.call( this, index + 1 ) )
							.appendTo( that.nodes.$pagr )
							.on( _e.click,
								function( e )
								{
									e.preventDefault();
									e.stopPropagation();

									that.nodes.$wrpr.trigger( _e.slideTo, [ index ] );
								}
							);
					}
				);
			
			this.updatePagination();
			this.nodes.$wrpr
				.on( _e.sliding,
					function( e, slide, direct )
					{
						that.updatePagination();
					}
				);
		}
	};
	
	$[ _PLUGIN_ ].prototype.updatePagination = function()
	{
		if ( this.nodes.$pagr )
		{
			this.nodes.$pagr
				.children()
				.removeClass( _c.selected )
				.eq( this.slides.index )
				.addClass( _c.selected );
		}
	};

	//	Defaults
	$[ _PLUGIN_ ].defaults[ _ADDON_ ] = {
		add				: false,
		type			: 'bullets',
		target			: null,
		anchorBuilder	: null
	};

	//	Add to plugin
	$[ _PLUGIN_ ].addons.push( _ADDON_ );
	$[ _PLUGIN_ ].ui.push( 'pagination' );
	$[ _PLUGIN_ ].ui.push( 'bullets' );
	$[ _PLUGIN_ ].ui.push( 'thumbnails' );


})( jQuery );
/*	
 * jQuery Touch Optimized Sliders "R"Us
 * HTML media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(i){var n="tosrus",e="html";i[n].media[e]={filterAnchors:function(n){return"#"==n.slice(0,1)&&i(n).is("div")},initAnchors:function(e,t){i('<div class="'+i[n]._c("html")+'" />').append(i(t)).appendTo(e),e.removeClass(i[n]._c.loading).trigger(i[n]._e.loaded)},filterSlides:function(i){return i.is("div")},initSlides:function(){}}}(jQuery);
/*	
 * jQuery Touch Optimized Sliders "R"Us
 * Images media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(i){var n="tosrus",o="image";i[n].media[o]={filterAnchors:function(n){return i.inArray(n.toLowerCase().split(".").pop().split("?")[0],["jpg","jpe","jpeg","gif","png"])>-1},initAnchors:function(o,r){i('<img border="0" />').on(i[n]._e.load,function(r){r.stopPropagation(),o.removeClass(i[n]._c.loading).trigger(i[n]._e.loaded)}).appendTo(o).attr("src",r)},filterSlides:function(i){return i.is("img")},initSlides:function(){}}}(jQuery);
/*	
 * jQuery Touch Optimized Sliders "R"Us
 * Vimeo media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(i){function t(t){function l(i){m.length&&m[0].contentWindow.postMessage('{ "method": "'+i+'" }',"*")}c||(o=i[s]._c,e=i[s]._d,n=i[s]._e,a=i[s]._f,r=i[s]._g,e.add("ratio maxWidth maxHeight"),c=!0);var m=t.children(),f=t.data(i[s]._d.anchor)||i(),h=f.data(e.ratio)||this.opts[d].ratio,u=f.data(e.maxWidth)||this.opts[d].maxWidth,g=f.data(e.maxHeight)||this.opts[d].maxHeight;t.removeClass(o.loading).trigger(n.loaded).on(n.loading,function(){a.resizeRatio(m,t,u,g,h)}),this.nodes.$wrpr.on(n.sliding,function(){l("pause")}).on(n.closing,function(){l("unload")}),r.$wndw.on(n.resize,function(){a.resizeRatio(m,t,u,g,h)})}var o,e,n,a,r,s="tosrus",d="vimeo",c=!1;i[s].media[d]={filterAnchors:function(i){return i.toLowerCase().indexOf("vimeo.com/")>-1},initAnchors:function(o,e){e=e.split("vimeo.com/")[1].split("?")[0]+"?api=1",i('<iframe src="http://player.vimeo.com/video/'+e+'" frameborder="0" allowfullscreen />').appendTo(o),t.call(this,o)},filterSlides:function(i){return i.is("iframe")&&i.attr("src")?i.attr("src").toLowerCase().indexOf("vimeo.com/video/")>-1:!1},initSlides:function(i){t.call(this,i)}},i[s].defaults[d]={ratio:16/9,maxWidth:!1,maxHeight:!1}}(jQuery);
/*	
 * jQuery Touch Optimized Sliders "R"Us
 * Youtube media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
!function(t){function i(i){function u(t){l.length&&l[0].contentWindow.postMessage('{ "event": "command", "func": "'+t+'Video" }',"*")}c||(e=t[s]._c,o=t[s]._d,a=t[s]._e,n=t[s]._f,r=t[s]._g,o.add("ratio maxWidth maxHeight"),c=!0);var l=i.children(),m=i.data(t[s]._d.anchor)||t(),h=m.data(o.ratio)||this.opts[d].ratio,p=m.data(o.maxWidth)||this.opts[d].maxWidth,f=m.data(o.maxHeight)||this.opts[d].maxHeight;i.removeClass(e.loading).trigger(a.loaded).on(a.loading,function(){n.resizeRatio(l,i,p,f,h)}),this.nodes.$wrpr.on(a.sliding,function(){u("pause")}).on(a.closing,function(){u("stop")}),r.$wndw.on(a.resize,function(){n.resizeRatio(l,i,p,f,h)})}var e,o,a,n,r,s="tosrus",d="youtube",c=!1;t[s].media[d]={filterAnchors:function(t){return t.toLowerCase().indexOf("youtube.com/watch?v=")>-1},initAnchors:function(e,o){var a=o;o=o.split("?v=")[1].split("&")[0],this.opts[d].imageLink?(o="http://img.youtube.com/vi/"+o+"/0.jpg",t('<a href="'+a+'" class="'+t[s]._c("play")+'" target="_blank" />').appendTo(e),t('<img border="0" />').on(t[s]._e.load,function(i){i.stopPropagation(),e.removeClass(t[s]._c.loading).trigger(t[s]._e.loaded)}).appendTo(e).attr("src",o)):(t('<iframe src="http://www.youtube.com/embed/'+o+'?enablejsapi=1" frameborder="0" allowfullscreen />').appendTo(e),i.call(this,e))},filterSlides:function(t){return t.is("iframe")&&t.attr("src")?t.attr("src").toLowerCase().indexOf("youtube.com/embed/")>-1:!1},initSlides:function(t){i.call(this,t)}},t[s].defaults[d]={ratio:16/9,maxWidth:!1,maxHeight:!1,imageLink:t[s].support.touch}}(jQuery);