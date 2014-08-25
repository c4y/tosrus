/*	
 * jQuery Touch Optimized Sliders "R"Us
 * HTML media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */

(function( $ ) {
	
	var _PLUGIN_ = 'tosrus',
		_MEDIA_	 = 'html';

	$[ _PLUGIN_ ].media[ _MEDIA_ ] = {

		//	Filter anchors
		filterAnchors: function( href )
		{
			return ( href.slice( 0, 1 ) == '#' && $(href).is( 'div' ) )
		},

		//	Create Slides from anchors
		initAnchors: function( $s, href )
		{
			$('<div class="' + $[ _PLUGIN_ ]._c( 'html' ) + '" />')
				.append( $(href) )
				.appendTo( $s );

			$s.removeClass( $[ _PLUGIN_ ]._c.loading )
				.trigger( $[ _PLUGIN_ ]._e.loaded );
		},

		//	Filter slides
		filterSlides: function( $s )
		{
			return $s.is( 'div' );
		},

		//	Create slides from existing content
		initSlides: function( $s ) {}
	};
	
})( jQuery );