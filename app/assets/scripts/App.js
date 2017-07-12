import MobileMenu from './Modules/MobileMenu';
import RevealOnScroll from './Modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "80%");
new RevealOnScroll($(".testimonial"), "75%");
var stickyHeader = new StickyHeader();
var modal = new Modal();



