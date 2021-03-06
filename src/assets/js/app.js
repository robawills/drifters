import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


import submenu from './modules/_sub-menu.js';

$(() => {
    submenu();
});

import menui from './modules/_menu-i.js';

$(() => {
    menui();
});

import aos from './modules/_aos.js';
$(() => {
    aos();
});

import map from './modules/_map.js';
$(() => {
    map();
});