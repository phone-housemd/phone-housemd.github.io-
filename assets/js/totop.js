/*
Слив сайта by vk.com/ivan2k17
Мой проект в сампе:https://vk.com/samp_sfg_rp 
*/
$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>200){$('.go-top').fadeIn(200);}
else{$('.go-top').fadeOut(200);}});$('.go-top').click(function(event){event.preventDefault();$('html, body').animate({scrollTop:0},300);})});