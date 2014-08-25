/*	
 * jQuery Touch Optimized Sliders "R"Us
 * Vimeo media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */

(function( $ ) {
	
	var _PLUGIN_ = 'tosrus',
		_MEDIA_	 = 'vimeo';

	var _mediaInitiated = false,
		_c, _d, _e, _f, _g;

	$[ _PLUGIN_ ].media[ _MEDIA_ ] = {

		//	Filter anchors
		filterAnchors: function( href )
		{
			return ( href.toLowerCase().indexOf( 'vimeo.com/' ) > -1 );
		},
	
		//	Create Slides from anchors
		initAnchors: function( $s, href )
		{
			href = href.split( 'vimeo.com/' )[ 1 ].split( '?' )[ 0 ] + '?api=1';
			$('<iframe src="http://player.vimeo.com/video/' + href + '" frameborder="0" allowfullscreen />')
				.appendTo( $s );

			initVideo.call( this, $s );
		},

		//	Filter slides
		filterSlides: function( $s )
		{
			if ( $s.is( 'iframe' ) && $s.attr( 'src' ) )
			{			
				return ( $s.attr( 'src' ).toLowerCase().indexOf( 'vimeo.com/video/' ) > -1 );
			}
			return false;
		},

		//	Create slides from existing content
		initSlides: function( $s )
		{
			initVideo.call( this, $s );
		}
	};


	//	Functions
	function initVideo( $s )
	{
		if ( !_mediaInitiated )
		{
			_c = $[ _PLUGIN_ ]._c;
			_d = $[ _PLUGIN_ ]._d;
			_e = $[ _PLUGIN_ ]._e;
			_f = $[ _PLUGIN_ ]._f;
			_g = $[ _PLUGIN_ ]._g;

			_d.add( 'ratio maxWidth maxHeight' );

			_mediaInitiated = true;
		}

		var that = this;

		var $v = $s.children(),
			$a = $s.data( $[ _PLUGIN_ ]._d.anchor ) || $();

		var ratio 		= $a.data( _d.ratio ) 		|| this.opts[ _MEDIA_ ].ratio,
			maxWidth 	= $a.data( _d.maxWidth ) 	|| this.opts[ _MEDIA_ ].maxWidth,
			maxHeight	= $a.data( _d.maxHeight )	|| this.opts[ _MEDIA_ ].maxHeight;

		$s.removeClass( _c.loading )
			.trigger( _e.loaded )
			.on( _e.loading,
				function( e )
				{
					_f.resizeRatio( $v, $s, maxWidth, maxHeight, ratio );
				}
			);

		this.nodes.$wrpr
			.on( _e.sliding,
				function( e )
				{
					commandVideo( 'pause' );
				}
			)
			.on( _e.closing,
				function( e )
				{
					commandVideo( 'unload' );
				}
			);

		_g.$wndw
			.on( _e.resize,
				function( e )
				{
					_f.resizeRatio( $v, $s, maxWidth, maxHeight, ratio );
				}
			);
		
		function commandVideo( fn )
		{
			if ( $v.length )
			{
				$v[ 0 ].contentWindow.postMessage( '{ "method": "' + fn + '" }', '*' );
			}
		}
	}


	//	Defaults
	$[ _PLUGIN_ ].defaults[ _MEDIA_ ] = {
		ratio		: 16 / 9,
		maxWidth	: false,
		maxHeight	: false
	};

	
})( jQuery );