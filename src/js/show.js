// require('!style-loader!css-loader!./style.css');
require('../css/style.css');
let str = require('./str.js');
let info = JSON.parse(str);
document.write(info.str);

// 引入 CSS并使用
var $ = require('jquery');

document.write('<div></div>');
$('div').html('我在等你').css({
	fontSize:'30px',
	fontWeight: 'bold',
	color: 'green'
});
