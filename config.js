module.exports = {
	'colors' : {
		'valhalla' : '#282A40',
		'meadow' : '#11B1A9',
		'bittersweet' : '#FA7555',
		'spindle' : '#BCE5EE',
		'purple' : '#6667AB',
		'greylighter' : '#E6E6E6',
		'tertiary': '#FA7555',
	},
	'spacing': '1rem',
	'primary': 'colors(valhalla)',
	'secondary': 'colors(meadow)',
	'tertiary': 'colors(bittersweet)',
	'radius': '15px',

	'body': {
		'background': 'colors(white)',
		'block-background': 'colors(white)',
		'font-color': 'primary',
		'font-size'		: '24px',
		'font-size-lg'	: '22px',
		'font-size-md'	: '20px',
		'font-size-sm'	: '18px',
		'font-size-xxs'	: '16px',
		'line-height' 	: '1.45',
	},
	'header': {
		'background': 'colors(none)',
		// 'font-color': 'body(font-color)',
		'font-size': '0.8em',
	},
	'footer': {
		'background': 'primary',
		'font-color': 'colors(white)',
		'font-size': '0.8em',
	},
	'link': {
		'font-color': 'body(font-color)',
		'font-color-hover': 'secondary',
		'font-color-focus': 'secondary',
		'underline': true,
		'underline-on-hover': true,
	},
	'btn':{
		'background': 'primary',
		'font-color': 'contrastFW(colors(white),primary)',
		'border-size': '2px',
		'radius': false,
		'uppercase': false,
		'font-weight': 400,
	},
};