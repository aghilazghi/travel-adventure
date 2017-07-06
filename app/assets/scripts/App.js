import MobileMenu from './Modules/MobileMenu';
import RevealOnScroll from './Modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "80%");
new RevealOnScroll($(".testimonial"), "65%");



