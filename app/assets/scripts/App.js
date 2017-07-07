import MobileMenu from './Modules/MobileMenu';
import RevealOnScroll from './Modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "80%");
new RevealOnScroll($(".testimonial"), "75%");
var stickyHeader = new StickyHeader();



