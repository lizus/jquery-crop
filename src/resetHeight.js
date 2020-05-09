import {setCropConfig} from './config';
import config from './config';
import wrapCss from './wrapCss';
import imgInit from './imgInit';
var $=jQuery;

var resetHeight=function (){
  var h=Math.floor(parseFloat($(this).val()));
  var w=config.width;
  let ct=document.documentElement.clientHeight;
  if (h>0) {
    if(h>ct) h=ct;
    setCropConfig('height',h);
  }else {
    h=config.default_height;
    setCropConfig('height',config.default_height);
  }
  $(this).val(h);
  wrapCss(w,h);
  imgInit();
};
export default resetHeight;
