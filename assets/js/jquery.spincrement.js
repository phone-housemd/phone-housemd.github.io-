/*
���� ����� by vk.com/ivan2k17
��� ������ � �����:https://vk.com/samp_sfg_rp 
*/
(function($){$.extend($.easing,{spincrementEasing:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+ 1)+ b;}});$.fn.spincrement=function(opts){var defaults={from:0,to:false,decimalPlaces:0,decimalPoint:'.',thousandSeparator:',',duration:1000,leeway:50,easing:'spincrementEasing',fade:true};var options=$.extend(defaults,opts);var re_thouSep=new RegExp(/^(-?[0-9]+)([0-9]{3})/);function format(num){num=num.toFixed(options.decimalPlaces);if((options.decimalPlaces>0)&&(options.decimalPoint!='.')){num=num.replace('.',options.decimalPoint);}
if(options.thousandSeparator){while(re_thouSep.test(num)){num=num.replace(re_thouSep,'$1'+options.thousandSeparator+'$2');}}
return num;}
return this.each(function(){var obj=$(this);var from=options.from;var to=(options.to!=false)?options.to:parseFloat(obj.html());var duration=options.duration;if(options.leeway){duration+=Math.round(options.duration*(((Math.random()*2)-1)*(options.leeway)/100));
}
obj.css('counter',from);if(options.fade)obj.css('opacity',0);obj.animate({counter:to,opacity:1},{easing:options.easing,duration:duration,step:function(progress){obj.css('visibility','visible');obj.html(format(progress*to));},complete:function(){obj.css('counter',null);obj.html(format(to));}});});};})(jQuery);