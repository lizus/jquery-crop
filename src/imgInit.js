import draw from './draw';
import getShadowImage from './getShadowImage';
import config from './config';
import {setCropConfig} from './config';
import wrapCss from './wrapCss';
var $=jQuery;

var imgInit=function (){
  var img=$('.crop-shadow-image');
  if (img.length<1) return;
  //var img=getShadowImage();
  var ow=img[0].naturalWidth;//图片原本的宽
  var oh=img[0].naturalHeight;//图片原本的高
  var w=ow;
  var h=oh;
  var cw=config.width;
  var ch=config.height;
  if (ow<cw) {
    cw=ow;
    setCropConfig('width',ow);
  }
  if (oh<ch) {
    ch=oh;
    setCropConfig('height',oh);
  }
  var ratio=w/h;
  if (ratio < cw/ch) {//宽高比例比要裁剪的小，则高度方向会多出来
    w=cw;
    h=Math.floor(w/ratio);
  }else {
    h=Math.floor(ch)+1;
    w=Math.floor(h*ratio);
  }
  img.attr('data-ow',ow);
  img.attr('data-oh',oh);
  img.css({
    width:w,
    height:h,
    left:0,
    top:0
  });
  draw(img);
}

export default imgInit;
