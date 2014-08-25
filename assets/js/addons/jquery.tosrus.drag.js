/*	
 *	jQuery Touch Optimized Sliders "R"Us
 *	Drag addon
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */

(function( $ ) {

	if ( !$.fn.hammer )
	{
		return;
	}

	var _PLUGIN_ = 'tosrus',
		_ADDON_  = 'drag';

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

			_e.add( 'dragstart dragend dragleft dragright swipeleft swiperight' );
			_addonInitiated = true;
		}

		var that = this;

		if ( this.opts[ _ADDON_ ] && this.opts.effect == 'slide' )
		{
			if ( this.nodes.$slides.length > 1 )
			{
				var _distance 	= 0,
					_direction	= false,
					_swiping	= false;
	
				this.nodes.$wrpr
					.hammer()
					.on( _e.dragstart,
						function( e )
						{
							 e.stopPropagation();
							if ( e.gesture )
							{
								e.gesture.preventDefault();
								that.nodes.$sldr.addClass( _c.noanimation );
							}
						}
					)
					.on( _e.dragleft + ' ' + _e.dragright,
						function( e )
						{
					        e.stopPropagation();
							if ( e.gesture )
							{
								e.gesture.preventDefault();
		
								_distance	= e.gesture.deltaX;
								_direction	= e.gesture.direction;
								_swiping	= false;
			
								if ( ( _direction == 'left' && that.slides.index + that.slides.visible >= that.slides.total  ) ||
									( _direction == 'right' && that.slides.index == 0 ) )
								{
									_distance /= 2.5;
								}
		
								that.nodes.$sldr.css( 'margin-left', Math.round( _distance ) );
							}
						}
					)
					.on( _e.swipeleft + ' ' + _e.swiperight,
						function( e )
						{
							 e.stopPropagation();
							if ( e.gesture )
							{
								e.gesture.preventDefault();
								_swiping = true;
							}
						}
					)
					.on( _e.dragend,
						function( e )
						{
							 e.stopPropagation();
							if ( e.gesture )
							{
								e.gesture.preventDefault();
	
								that.nodes.$sldr
									.removeClass( _c.noanimation )
									.addClass( _c.fastanimation );
		
		
								_f.transitionend( that.nodes.$sldr,
									function()
									{
										that.nodes.$sldr.removeClass( _c.fastanimation );
									}, that.conf.transitionDuration / 2
								);
		
								that.nodes.$sldr.css( 'margin-left', 0 );
		
								if ( _direction == 'left' || _direction == 'right' )
								{
									if ( _swiping )
									{
										var slides = that.slides.visible;
									}
									else
									{
										var slideWidth = that.nodes.$slides.first().width(),
											slides = Math.floor( ( Math.abs( _distance ) + ( slideWidth / 2 ) ) / slideWidth );	
									}
			
									if ( slides > 0 )
									{
										that.nodes.$wrpr.trigger( _e[ _direction == 'left' ? 'next' : 'prev' ], [ slides ] );
									}
								}
		
								_direction = false;
							}
						}
					);
			}
		}

	};

	//	Defautls
	$[ _PLUGIN_ ].defaults[ _ADDON_ ] = $[ _PLUGIN_ ].support.touch;

	//	Add to plugin
	$[ _PLUGIN_ ].addons.push( _ADDON_ );


})( jQuery );