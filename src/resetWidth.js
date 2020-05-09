import {setCropConfig} from './config';
import config from './config';
import wrapCss from './wrapCss';
import imgInit from './imgInit';
var $=jQuery;

var resetWidth=function (){
  var w=Math.floor(parseFloat($(this).val()));
  var h=config.height;
  let cl=document.documentElement.clientWidth;
  if (w>0) {
    if (w>cl) w=cl;
    setCropConfig('width',w);
  }else {
    w=config.default_width;
    setCropConfig('width',config.default_width);
  }
  $(this).val(w);
  wrapCss(w,h);
  imgInit();
};
export default resetWidth;
